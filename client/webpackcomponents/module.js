import React from 'react';

const Module = (props) =>{

    return(
        <div>
        {'    '}{'    '}{'    '}{'    '}{'    '}{'{'} <br/>
        {'    '}{'    '}{'    '}{'    '}{'    '}{'    '}test: <span style={{color:'#2a9d8f'}}>{props.file}</span>, <br/>
        {'    '}{'    '}{'    '}{'    '}{'    '}{'    '}loaders: [<span style={{color:'#2a9d8f'}}>{props.loaderArray}</span>], <br/>
        {'    '}{'    '}{'    '}{'    '}{'    '}{'    '}use: [ <br/>
        {'    '}{'    '}{'    '}{'    '}{'    '}{'    '}<span style={{color:'#2a9d8f'}}>{props.useArray}</span> <br/>
        {'    '}{'    '}{'    '}{'    '}{'    '}{'    '}],<br/>
        {'    '}{'    '}{'    '}{'    '}{'    '}{'},'} <br/>
        </div>
    );

}

export default Module;