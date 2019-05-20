import React from 'react';
import { Route } from 'react-router-dom';
import Quiz from '../quiz/quiz';

import './index.css';

export default () => (
  <div className="App">
      <Route exact path="/" component={Quiz} />
  </div>
)