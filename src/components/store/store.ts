import { configureStore } from '@reduxjs/toolkit';
import chatSlice, { ChatState } from './chats/chatSlice';
import { ChatActions } from './chats/chatSlice';
import profileSlice, {
  CheckState,
  ProfileAction,
} from './profile/profileSlice';
export interface StoreState {
  profile: CheckState;
  chat: ChatState;
}

export interface StoreAction {
  profile: ProfileAction;
  chat: ChatActions;
  type: string;
}

export const store = configureStore<StoreState, StoreAction>({
  reducer: { profile: profileSlice, chat: chatSlice },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
