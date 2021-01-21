import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div id='main'>
      <div id="content">
          <header id="title">
            <h1>{'{ CodeEZ }'}</h1>
            <div id="subheader">Code setup that doesn't suck.</div>
          </header>
          <div id='homebtns'>
            <Link to="/linter">
              <button>EZ-Linter</button>
            </Link>
            <Link to="/webpack">
              <button>EZ-Pack</button>
            </Link>
          </div>
      </div>
    </div>;
  }
}

export default Home;
// // // 