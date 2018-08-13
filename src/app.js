// react
import React from 'react';
import ReactDOM from 'react-dom';

// app router
import AppRouter from './router/AppRouter';

// redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addEquipment } from './actions/equipmentActions'

// styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

/* TEST CODE */
store.dispatch(addEquipment({title: 'Press', invNo: 5}));
store.dispatch(addEquipment({title: 'Press', invNo: 5}));

/* TEST CODE */

ReactDOM.render((
    <Provider store={store}>
      <AppRouter />
    </Provider>
  ),
  document.getElementById('app')
);
