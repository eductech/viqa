import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import EquipmentList from "../components/EquipmentList";
import Page404 from "../components/Page404";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/dashboard' component={EquipmentList} />
        <Route component={Page404} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;