import { Message } from '../../shared/message';
import { User } from '../../shared/user';
import { ADD_MESSAGE, ADD_USER, DELETE_USER } from './actions';

export type ChatActions =
  | ReturnType<AddMessage>
  | ReturnType<DeleteUser>
  | ReturnType<AddUser>;

export type AddMessage = (
  message: Message,
  user: User
) => {
  type: typeof ADD_MESSAGE;
  message: Message;
  user;
};

export type DeleteUser = (user: User) => {
  type: typeof DELETE_USER;
  user: User;
};

export type AddUser = (name: string) => {
  type: typeof ADD_USER;
  name;
};
