import React from 'react';

function Feature(props) {
  // destructuring properties passed down from props
  const { featureName, featureValue, updateFeature } = props;

  // determining the background-color of rule based on envValue
  let backgroundColor;
  let opacity;
  if (!featureValue) {
    opacity = "100%"
    backgroundColor = '#f0efeb';
  }
  if (featureValue){
    opacity = "100%"
    backgroundColor = '#06d6a0';
  } 

  return (
    <div
      className="Item"
      onClick = {() => updateFeature(featureName, 'features')}
      style={{ backgroundColor, opacity }}
    >
      <h3 className="Text">{`${featureName}`}</h3>
    </div>
  );
}

export default Feature;
