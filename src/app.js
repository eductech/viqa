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
import './styles/styles.scss';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// firebase
import { firebase } from "./firebase/firebase";

const store = configureStore();

/* TEST CODE */
// store.dispatch(startAddEquipment({title: 'Press1', invNo: 5}));
// store.dispatch(startAddEquipment({title: 'Press2', invNo: 5}));
/* TEST CODE */
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
firebase.auth().onAuthStateChanged((user) => {
  renderApp();
  console.log(user);
});
