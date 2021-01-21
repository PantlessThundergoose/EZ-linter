import React, { Component } from 'react';
import Import from './import.js';
import Module from './module.js';
import Plugin from './plugin.js';
import Properties from './properties.js';

class Code extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){

        const imports = [];
        const modules = []
        const plugins = [];

        for (let i = 0; i < this.props.imports.length; i++){
            imports.push(<Import key={`import#${i}`} name={this.props.imports[i].name} path={this.props.imports[i].path} />);
        }
        
        for (let i = 0; i < this.props.modules.length; i++){
            modules.push(<Module key={`module#${i}`} file={this.props.modules[i].test} loaderArray={this.props.modules[i].loaders} useArray={this.props.modules[i].use}/>)
        }
        
        for (let i = 0; i < this.props.plugins.length; i++){
            plugins.push(<Plugin key={`plugin#${i}`} plugins={this.props.plugins[i]} />);
        }

        return(
            <div id='webpackcode'>
                <pre>
                    <code id='code'>
                        <Import name='webpack' path='webpack' />
                        <Import name='path' path='path' />
                        {imports}
                        <br/>
                        <span style={{color:'#9d4edd'}} >const</span> config = {'{'} <br/>
                            {'    '}entry: <span style={{color:'#2a9d8f'}} > './src/index.js'</span>, <br/>
                            {'    '}output: {'{'} <br/>
                            {'    '}{'    '}path: path.<span style={{color:'#f4a261'}} >resolve</span>(__dirname, <span style={{color:'#2a9d8f'}} >'dist'</span>), <br/>
                            {'    '}{'    '}filename: <span style={{color:'#2a9d8f'}} >'bundle.js'</span> <br/>
                            {'    '}{'}'},<br/>
                            {'    '}module: {'{'} <br/>
                            {'    '}{'    '}rules: [<br/>
                            {modules}<br/>
                            {'    '}{'    '}]<br/>
                            {'    '}{'},'}<br/>
                            {'    '}{'    '}plugins: [<span style={{color:'#f4a261'}} >{plugins}</span><br/>]<br/>
                        {'};'} <br/>
                        <br/>
                        module.exports = config;
                    </code>
                </pre>
            </div>
        );
    }
}

export default Code;