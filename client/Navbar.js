import React from 'react';
import SignInBtn from './lintercomponents/SignInBtn.jsx';

const Navbar = (props) => {

    return (
        <div id="topButtons">
            <div id='signin-btn'>
                <SignInBtn isLoggedIn={props.isLoggedIn} />
            </div>
        </div>
    );

}

export default Navbar;