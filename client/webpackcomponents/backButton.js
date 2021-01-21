import React from 'react';
import {Link} from 'react-router-dom';

const BackButton = () => {
  return (
  <div>
    <Link to="/">
      <button className="ui-btn">Back</button>
    </Link>
  </div>
  );
};

export default BackButton;



