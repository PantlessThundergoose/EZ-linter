import React from 'react';
import { Link } from 'react-router-dom';

function Env(props) {
  // destructuring properties passed down from props
  const { envName, envValue, updateEnv } = props;
  // determining the background-color of rule based on envValue
  let backgroundColor;
  let opacity = "100%";
  if (!envValue){
    opacity = "100%";
    backgroundColor = '#f0efeb';
  }
  if (envValue) {
    opacity = "100%";
    backgroundColor = '#06d6a0';
  }

  return (
    <div
      className="Item"
      onClick = {() => updateEnv(envName, 'envir')}
      style={{ opacity, backgroundColor }}
    >
      <h3 className="Text">{`${envName}`}</h3>
    </div>
  );
}

export default Env;
