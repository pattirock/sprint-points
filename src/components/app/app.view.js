import React from 'react';
import styles from './app.module.css';
import Config from '../config';
import Results from '../results';
import Participants from '../participants';

const App = () => (
  <div className={styles._container}>
    <header>
      <h1>Sprint points calculator</h1>
    </header>
    <Config />
    <Participants />
    <Results />
    {/* <Calendar /> */}
  </div>
);

export default App;
