import { nanoid } from 'nanoid';
import { put, takeEvery, delay, cancel, takeLatest } from 'redux-saga/effects';
import { Message } from '../shared/message';
import { addBotMessage } from './chats/chatSlice';

function* chatSaga() {
  yield takeLatest(addBotMessage.type, getBotMessage);
}

function* getBotMessage(action) {
  const message = {
    name: ' Bot',
    message: 'Сообщение добавлено!',
    id: nanoid(),
  };
  yield delay(1500);
  yield put(
    addBotMessage({
      user: action.payload,
      bot: message,
    })
  );
}

export default chatSaga;
