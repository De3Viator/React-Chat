import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/es/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import chatSlice, { ChatState } from './chats/chatSlice';
import { ChatActions } from './chats/chatSlice';
import logger from 'redux-logger';
import profileSlice, {
  CheckState,
  ProfileAction,
} from './profile/profileSlice';
import createSagaMiddleware from 'redux-saga';
import chatSaga from './reduxSaga';

export interface StoreState {
  profile: CheckState;
  chat: ChatState;
}

export interface StoreAction {
  profile: ProfileAction;
  chat: ChatActions;
  type: string;
}

const persStore = {
  key: 'root',
  storage,
};

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  profile: profileSlice,
  chat: chatSlice,
});

const persistReducers = persistReducer(persStore, rootReducer);
export const store = configureStore({
  reducer: persistReducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk, logger, sagaMiddleware],
});
sagaMiddleware.run(chatSaga);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
