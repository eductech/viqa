// react
import React from 'react';
import ReactDOM from 'react-dom';

// app router
import AppRouter from './router/AppRouter';

// redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { signOut, signIn } from "./actions/auth";
import {startSetEquipmentList} from './actions/equipmentActions';

// styles
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// firebase
import { firebase } from "./firebase/firebase";

// components
import LoadingPage from "./components/LoadingPage";

export const store = configureStore();

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

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    store.dispatch(signIn(user.uid));
    store.dispatch(startSetEquipmentList()).then(() => {
      renderApp();
    });  
  } else {
    store.dispatch(signOut());
    renderApp();
  }
});
