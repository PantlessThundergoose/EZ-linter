import React, { useState } from 'react';

function StyleGuide(props){
  // destructure props
  const { styleGuideStatus, guide, loadPresets } = props;

  let opacity = "100%";
  let backgroundColor = "#f0efeb";
  if (styleGuideStatus) {
    opacity = "100%";
    backgroundColor = "#06d6a0";
  } 

  return (
    <div className="Item StyleGuide"
      onClick={() => loadPresets(guide, !styleGuideStatus)}
      style={{backgroundColor, opacity}}>
         <h3 className="Text longBtn">AirBnb</h3>
    </div>
  );
}

export default StyleGuide;