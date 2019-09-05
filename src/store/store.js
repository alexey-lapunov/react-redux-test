import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './app/reducer';
import usersReducer from './users/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  app: appReducer,
  users: usersReducer,
  user: userReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
