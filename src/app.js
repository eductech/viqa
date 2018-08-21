// react
import React from 'react';
import ReactDOM from 'react-dom';

// app router
import AppRouter from './router/AppRouter';

// redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startAddEquipment } from './actions/equipmentActions'

// styles
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 /* bootstrap js
  import $ from 'jquery';
  import Popper from 'popper.js';
  import 'bootstrap/dist/js/bootstrap.bundle.min';
*/
import './styles/styles.scss';

const store = configureStore();

/* TEST CODE */
store.dispatch(startAddEquipment({title: 'Press1', invNo: 5}));
store.dispatch(startAddEquipment({title: 'Press2', invNo: 5}));

/* TEST CODE */

ReactDOM.render((
    <Provider store={store}>
      <AppRouter />
    </Provider>
  ),
  document.getElementById('app')
);
