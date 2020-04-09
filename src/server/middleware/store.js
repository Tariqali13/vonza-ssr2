import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import ReduxThunk from "redux-thunk";

import reducers from "../../store/reducers";

const createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk))(
  createStore
);

const configureStore = (initialState = {}) => {
  return createStoreWithMiddleware(reducers, initialState);
};

const storeMiddleware = () => (req, res, next) => {
  const store = configureStore();
  req.store = store;
  next();
};

export default storeMiddleware;
