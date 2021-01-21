import React, { useState } from 'react';

function Instructions() {
  // use hook to set visibility state
  const [visibility, setVisibility] = useState(false);

  // function to change visibility status on click
  const changeVis = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="Container">
      <div className="Title" onClick={changeVis}>
        <h2 className="Collapse">
          {/* render icon based on visibility */}
          { visibility ? '▼' : '▶' }
        </h2>
        <h2>&nbsp;Instructions</h2>
      </div>
      {/* render section based on visibility */}
      {visibility ? (
        <div id="Instructions">
          <p>Prerequisites:&nbsp;
            <a 
              href="https://nodejs.org/en/"
              target="_blank"
            >
              Node.js
            </a>
            &nbsp;(<code>^10.12.0</code>, or <code>>=12.0.0</code>) built with SSL support. (If you are using an official Node.js distribution, SSL is always built in.)
          </p>
          <p>To use Webpack, simply:</p>
          <ol>
            <li>Create a directory, initialize npm, install webpack locally, and install the webpack-cli:</li>
            <pre>
              <code>
                mkdir ez-webpack-demo <br />
                cd ez-webpack-demo <br />
                npm init -y <br />
                npm install webpack webpack-cli webpack-dev-server --save-dev
                <br />
              </code>
            </pre>
            <li>Set your desired configurations and copy the webpack configuration template.</li>
            <li>Save the copied contents into a webpack.config.js file in your project's root directory.</li>
            <li>Add the following scripts to your package.json file, as well as installing all relevant dependencies.</li>
            <pre>
              <code>
              "build-dev": "webpack --mode development",<br/>
              "build-prod": "webpack --mode production"<br/>
              </code>
            </pre>
            <p><strong></strong></p>
          </ol>
        </div>
      ) : null}
    </div>
  );
}

export default Instructions;