import React from 'react';

const Rule = (props) => {
    return (
    <div className='webpackRule'>
        <button onClick = { () => props.updateCode(props.header, props.label)} style={ props.bool ? {color: 'blue'} : {}} >{props.label}</button>
    </div>
    )
}

export default Rule;