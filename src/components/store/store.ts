import { compose, createStore, combineReducers } from 'redux';
import { chatReducer, ChatState } from './chats/chatReducer';
import { CheckState, profileReducer } from './profile/profileReducer';
const composeEnhancers =
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

export interface StoreState {
  profile: CheckState;
  chat: ChatState;
}
export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chat: chatReducer,
  }),
  composeEnhancers()
);
