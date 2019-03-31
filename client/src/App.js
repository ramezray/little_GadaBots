import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import './App.css';
import AppNavbar from "./components/AppNavbar"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import Home from "./pages/Home";
import BotProfile from "./pages/BotProfile";
import UserProfile from "./pages/UserProfile";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div>
        <AppNavbar />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/botProfile/:id" component={BotProfile} />
          <Route exact path="/userProfile" component={UserProfile} />
          <Route exact path="*" component={NoMatch} />
          </Switch>
        <Footer />
      </div>
      </Router>
    </Provider>
    )
        }
}

export default App;
