import React from 'react';
import { exportPlainTextFile } from '../lib/exportJson';

const ExportBtn = ({ config }) => {
  const prettyJson = JSON.stringify(config, null, 2);

  return (
    <div>
      <button
        id="export-btn"
        className="ui-btn"
        onClick={() => exportPlainTextFile(config.replace(/(\r\n|\n|\r)/gm, "  "), 'webpack.config.js')}
      >
        Export webpack.config.js
      </button>
    </div>
  );
};

export default ExportBtn;
