import React from 'react';

const SignInBtn = ({isLoggedIn}) => {
  const startLoginFlow = () => {
    window.location.href = '/api/user/signin';
  };
  return (
      <button className="ui-btn" onClick={startLoginFlow}>
        {isLoggedIn ? 'Signed In' : 'Sign In'}
      </button>
  );
};

export default SignInBtn;