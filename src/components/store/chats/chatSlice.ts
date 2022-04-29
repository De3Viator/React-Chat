import { createAsyncThunk, createSlice, Slice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Message } from '../../shared/message';
import { User } from '../../shared/user';

export interface ChatState {
  users: User[];
}

export interface ChatActions {
  addMessage: () => void;
  addUser: () => void;
  deleteUser: () => void;
}

export interface ChatPayload {
  payload: {
    user: User;
    userName: string;
    message: Message;
  };
}

export const botAnswer = createAsyncThunk('BOT_ANSWER', async (user: User) => {
  const bot: Message = await new Promise((resolve) =>
    setTimeout(() => {
      const newMessage = {
        name: 'bot',
        message: 'Сообщение отправлено!',
        id: nanoid(),
      };
      resolve(newMessage);
    }, 1500)
  );
  const payload = {
    user,
    bot,
  };
  return payload;
});

export const chatSlice: Slice<ChatState> = createSlice({
  name: 'CHAT',
  initialState: {
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
  },
  reducers: {
    addMessageSlice(state, action: ChatPayload) {
      const us = state.users.find((el) => el.id === action.payload.user.id);
      state.users[state.users.indexOf(us)].messages.push(
        action.payload.message
      );
    },
    deleteUserSlice(state, action: ChatPayload) {
      state.users.splice(state.users.indexOf(action.payload.user), 1);
    },
    addUserSlice(state, action: ChatPayload) {
      state.users.push({
        name: action.payload.userName,
        id: nanoid(),
        messages: [],
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(botAnswer.fulfilled, (state, action) => {
      const us = state.users.find((el) => el.id === action.payload.user.id);
      state.users[state.users.indexOf(us)].messages.push(action.payload.bot);
      return state;
    });
  },
});

export const { addMessageSlice, deleteUserSlice, addUserSlice } =
  chatSlice.actions;
export default chatSlice.reducer;
