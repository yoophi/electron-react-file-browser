import './App.global.css';

import React, { useCallback, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import fs from 'fs';
import icon from '../assets/icon.svg';

const Hello = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const getFiles = useCallback(() => {
    fs.readdir('/', (err, files) => {
      if (err) {
        setError(error);
        return;
      }

      setFiles(files);
    });
  }, []);
  useEffect(() => {
    getFiles();
  }, []);

  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <pre>{JSON.stringify(files, null, 2)}</pre>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
