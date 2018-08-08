import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import DashboardPage from "../components/DashboardPage";
import Page404 from "../components/Page404";

class AppRouter extends React.Component {
  state = {
    lastOpenedSection: ''
  }

  onLastOpenedSectionChange = (sectionName) => {
    console.log(sectionName);
    this.setState({lastOpenedSection: sectionName});
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header 
            lastOpenedSection={this.state.lastOpenedSection} 
          />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route 
              path='/dashboard' 
              render={(props) => <DashboardPage {...props} sectionChange={this.onLastOpenedSectionChange}/>} 
            />
            <Route component={Page404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
} 

export default AppRouter;