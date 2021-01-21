import React, { Component } from 'react';
import Rule from './rule.js';

class Header extends Component {
    constructor(props) {
      super(props);

      this.dropList = this.dropList.bind(this);
      
      this.state = {
        selected: null,
        visible: false,
      };
    }

    selectExclusive(rule){
        if (header === 'mainLibrary'){
            this.setState({...this.state, selected: rule});
        }
    }

    dropList(){
        let newBool = !this.state.visible;
        this.setState({...this.state, visible: newBool});
    }

    render(){

        const rules = [];

        for(let i = 0; i < Object.keys(this.props.rules).length; i++){
            rules.push(<Rule label={Object.keys(this.props.rules)[i]} key={Object.keys(this.props.rules)[i]} header={this.props.label} updateCode={this.props.updateCode}/>)
        }

        const rulecontainer = this.state.visible ? <div id='rulecontainer'>{rules}</div> : <div></div>;

        return(
            <div className='header'>
                <button onClick={this.dropList} >{ this.state.visible ? '- ' : '+ ' }{this.props.label}</button>
                {rulecontainer}
            </div>
        )
    }
    
}

export default Header;