import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import equipmentReducer from '../reducers/equipmentReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => createStore(
  combineReducers({
    equipment: equipmentReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default configureStore;