import React, { Component } from 'react';
import Config from './config.jsx';
import Instructions from './instructions.jsx';
import Code from './code.js';
import ourState from './state.js';
import ourProps from './properties.js';
import {Link} from 'react-router-dom';

import BackButton from './backButton';

//importing buttons from lintercomponents folder
import ShareBtn from '../lintercomponents/ShareBtn.jsx';
import SignInBtn from '../lintercomponents/SignInBtn.jsx';
import SaveConfigBtn from '../lintercomponents/SaveConfigBtn.jsx';
import SavedConfigs from '../lintercomponents/SavedConfigs.jsx';

import ExportBtnWebpack from './ExportBtnWebpack.jsx';

class mainWebpack extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      librarySelected: null,
      config: ourState,
      props: ourProps,
      savedConfigs: [],
      imports: [],
      modules: [],
      plugins: [],
      code: '', 
    };

    this.addSavedConfig = this.addSavedConfig.bind(this);
    this.removeSavedConfig = this.removeSavedConfig.bind(this);
    this.updateCode = this.updateCode.bind(this);
  }

  addSavedConfig(configObj) {
    this.setState({ savedConfigs: this.state.savedConfigs.concat(configObj) });
  }

  removeSavedConfig(name) {
    this.setState({
      savedConfigs: this.state.savedConfigs.filter(
        (configObj) => configObj.name !== name
      ),
    });
  }

  updateCode(header, rule){
    
    let newBool;
    const currBool = this.state.config[header][rule];
    newBool = !currBool;

    let newImports = [...this.state.imports];
    let newModules = [...this.state.modules];
    let newPlugins = [...this.state.plugins];

    if (newBool){
      if (this.state.props[rule].hasOwnProperty('import')){
        if (!newImports.some(importVal => importVal.name === this.state.props[rule].import.name))
          newImports.push(this.state.props[rule].import);
      }

      if (this.state.props[rule].hasOwnProperty('module')){
        if (!newModules.some(moduleVal => moduleVal.test === this.state.props[rule].module.test))
          newModules.push(this.state.props[rule].module);
      }

      if (this.state.props[rule].hasOwnProperty('plugins')){
        if (!newPlugins.some(pluginVal => pluginVal === this.state.props[rule].plugins))
          newPlugins.push(this.state.props[rule].plugins);
      }
    } else {
      if (this.state.props[rule].hasOwnProperty('import'))
        newImports = [...newImports].filter(importVal => importVal !== this.state.props[rule].import);

      if (this.state.props[rule].hasOwnProperty('module'))
        newModules = [...newModules].filter(moduleVal => moduleVal !== this.state.props[rule].module);

      if (this.state.props[rule].hasOwnProperty('plugins'))
        newPlugins = [...newPlugins].filter(pluginVal => pluginVal !== this.state.props[rule].plugins);
    }
      this.setState({...this.state, config: {
        ...this.state.config,
        [header]: {
          ...this.state.config[header],
          [rule]: newBool,
        },
        }, imports: [...newImports], modules: [...newModules], plugins: [...newPlugins],
        code: document.getElementById('code').innerText});
   
    

    

    navigator.clipboard.writeText(this.state.code);

  }

  componentDidMount() {
    // attempt to retrieve the user's saved configs
    fetch('api/user/savedconfigs').then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          this.props.updateLogin(true);
          // this.setState({savedConfigs: data.configs });
        });
      }
    });
  }

  render() {
    const { config } = this.state;

    return (
      <div id='mainwebpack'>
        <div id="topButtons">
          <ExportBtnWebpack config={(this.state.code === '' ? "Please select options from EZCode" : this.state.code)} />
          {/*{this.props.isLoggedIn ? (
            <SaveConfigBtn
              config={this.state.config}
              addSavedConfig={this.addSavedConfig}
              savedConfigs={this.state.savedConfigs}
            />
          ) : null}
          <ShareBtn config={config} />*/}
          <div id="signin-btn">
            <BackButton />
            <SignInBtn isLoggedIn={this.props.isLoggedIn} />
          </div>
        </div>

        <div id="content">
          <header id="title">
          <Link to="/">
            <h1>{'{ EZ-pack }'}</h1>
            <div id="subheader">Webpack configs that don't suck.</div>
          </Link>
          </header>
          {this.props.isLoggedIn ? (
            <div>
              {this.state.savedConfigs.length ? <h3>Saved Configs:</h3> : null}
              <SavedConfigs
                configs={this.state.savedConfigs}
              />
            </div>
          ) : null}
          <div id='webpackcontent'>
            <Config headers={Object.entries(this.state.config)} updateCode={this.updateCode}/>
            <Code imports={this.state.imports} modules={this.state.modules} plugins={this.state.plugins} />
          </div>
          <Instructions />
        </div>
      </div>
    );
  }
}

export default mainWebpack;
