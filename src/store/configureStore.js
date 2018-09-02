import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import equipmentReducer from '../reducers/equipmentReducer';
import authReducer from "../reducers/auth";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => createStore(
  combineReducers({
    equipment: equipmentReducer,
    auth: authReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default configureStore;