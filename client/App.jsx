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

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div id="entry">
          <Switch>
            <Route path="/shared/:id" children={<MainRenderer />} />
            <Route path="/linter" children={<MainLinter />} />
            <Route path="/webpack">
              <MainWebpack />
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
