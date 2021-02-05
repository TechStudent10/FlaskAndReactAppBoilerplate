import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function FetchFromFlask(endpoint, method='POST', body="") {
  const [state, stateSetter] = useState('');
  
  useEffect(() => {
    fetch(endpoint, {method:method,body:body}).then(res => res.json()).then(data => {
      stateSetter(data.result);
    })
  // eslint-disable-next-line
  }, []);
  return state
}

function App() {
  const [flask, setFlask] = useState('hi');

  setFlask(FetchFromFlask('/hello'));

  return (
    <div className="App">
      <p>
        Flask says: {flask}
      </p>
    </div>
  );
}

export default App;
