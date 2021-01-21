import React, { Component } from 'react';
import MainLinter from './lintercomponents/mainLinter.jsx';
import MainWebpack from './webpackcomponents/mainWebpack.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import Home from './Home.js';
import Navbar from './Navbar';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.updateLogin = this.updateLogin.bind(this);

    this.state = {isLoggedIn: false};
  }

  updateLogin(bool){
    this.setState({...this.state, isLoggedIn: bool});
  }

  render() {
    return (
      <Router>
        <Navbar isLogginedIn={this.state.isLoggedIn} updateLogin={this.updateLogin}/>
        <div id="entry">
          <Switch>
            <Route path="/shared/:id" children={<MainRenderer />} />
            <Route path="/linter" children={<MainLinter isLoggedIn={this.state.isLoggedIn} updateLogin={this.updateLogin} />} />
            <Route path="/webpack">
              <MainWebpack isLoggedIn={this.state.isLoggedIn} updateLogin={this.updateLogin} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function MainRenderer() {
  //useParams returns an object of key/value pairs of URL parameters. Use it to access params of the current <Route>.
  const { id: sharedConfigId } = useParams();
  return <MainLinter sharedConfigId={sharedConfigId} />;
}
