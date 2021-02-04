import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [flask, setFlask] = useState('hi');

  function FetchFromFlask(endpoint, state, stateSetter, method='POST', body="") {
    useEffect(() => {
      fetch(endpoint, {method:method,body:body}).then(res => res.json()).then(data => {
        stateSetter(data.result);
      })
    // eslint-disable-next-line
    }, []);
    return state
  }

  FetchFromFlask('/hello', flask, setFlask);

  return (
    <div className="App">
      <p>
        Flask says: {flask}
      </p>
    </div>
  );
}

export default App;
