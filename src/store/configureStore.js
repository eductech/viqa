import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import equipmentReducer from '../reducers/equipmentReducer';
import sessionSettingsReducer from "../reducers/sessionSettingsReducer";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => createStore(
  combineReducers({
    equipment: equipmentReducer,
    sessionSettings: sessionSettingsReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default configureStore;