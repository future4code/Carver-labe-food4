import React from 'react';
import { GlobalState } from './global/GlobalState';
import Routes from './routes/Routes'

function App() {
  return (
    <GlobalState>
      <Routes/>
    </GlobalState>
  );
}

export default App;
