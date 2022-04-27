import { Message } from '../../shared/message';
import { User } from '../../shared/user';
import { AddMessage, AddUser, DeleteUser } from './types';

export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';
export const ADD_USER = 'CHATS::ADD_USER';
export const DELETE_USER = 'CHATS::DELETE_USER';

export const addUserStore: AddUser = (name: string) => ({
  type: ADD_USER,
  name,
});

export const deleteUserStore: DeleteUser = (user: User) => ({
  type: DELETE_USER,
  user,
});

export const addMessageStore: AddMessage = (message: Message, user: User) => ({
  type: ADD_MESSAGE,
  user,
  message,
});
