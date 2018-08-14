import { createStore, combineReducers } from 'redux';
import equipmentReducer from '../reducers/equipmentReducer';

const configureStore = () => createStore(
  combineReducers({
    equipment: equipmentReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;