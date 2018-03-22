import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const intialState = {};

const middleware = [thunk];
const isDevMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
const reduxTool = window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()

const determineComposer = function () {
  return (isDevMode)
    ? compose( applyMiddleware(...middleware), reduxTool)
    : compose( applyMiddleware(...middleware))
};

const store = createStore(
  rootReducer,
  intialState,
  determineComposer()
);

export default store;
