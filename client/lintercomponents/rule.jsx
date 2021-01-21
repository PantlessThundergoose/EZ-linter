import React from 'react';

function Rule(props) {
  // destructuring properties passed down from props
  const { ruleName, ruleValue, updateRule } = props;

  // determining the background-color of rule based on ruleValue
  let opacity = "100%";
  // rgb val of '$black2'
  let backgroundColor = "#f0efeb";
  if (ruleValue === 1) {
    opacity = "100%";
    // hex val of '$orange'
    backgroundColor = "#f77f00";
  } 
  else if (ruleValue === 2) {
    opacity = "100%";
    // hex val of'$red'
    backgroundColor = "#e63946";
  }

  return(
    <div className="Item" 
      onClick={() => updateRule(ruleName)} 

      style={{  backgroundColor, opacity }}>
      <h3 className="Text">{`${ruleName}`}</h3>

    </div>
  );
}

export default Rule;
