import React from 'react';

const Plugin = (props) => {
    return(
        <div>
        {'    '}{'    '}plugins: <br/>
        {'    '}{'    '}{'    '}[<br/>
        {'    '}{'    '}{'    '}<span style={{color:'#f4a261'}} >{props.plugins}</span><br/>
        {'    '}{'    '}{'    '}]<br/>
        </div>
    );
}

export default Plugin;