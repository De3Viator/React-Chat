import { compose, createStore } from 'redux';
import { profileReducer } from './profileReducer';
const composeEnhancers =
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;
export const store = createStore(profileReducer, composeEnhancers());
