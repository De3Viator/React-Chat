import { nanoid } from 'nanoid';
import { Reducer } from 'react';
import { User } from '../../shared/user';
import { ADD_MESSAGE, ADD_USER, DELETE_USER } from './actions';
import { ChatActions } from './types';

export interface ChatState {
  users: User[];
}
const initialState: ChatState = {
  users: [
    {
      name: 'Charlie',
      id: nanoid(),
      messages: [
        {
          name: 'Charlie',
          message: 'Hello, user!',
          id: nanoid(),
        },
      ],
    },
    {
      name: 'Chloe',
      id: nanoid(),
      messages: [
        {
          name: 'Chloe',
          message: 'Hello, user!',
          id: nanoid(),
        },
      ],
    },
  ],
};

export const chatReducer: Reducer<ChatState, ChatActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.users[state.users.indexOf(action.user)].messages.push(
        action.message
      );
      return {
        ...state,
        users: [...state.users],
      };
    case DELETE_USER:
      state.users.splice(state.users.indexOf(action.user), 1);
      return {
        ...state,
        users: [...state.users],
      };
    case ADD_USER:
      state.users.push({ name: action.name, messages: [], id: nanoid() });
      return {
        ...state,
        users: [...state.users],
      };
    default:
      return state;
  }
};
