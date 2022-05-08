import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App';
import { Navigation } from './components/Navigation/Navigation';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navigation />
        <AppRouter />
      </HashRouter>
    </div>
  );
}

export default App;
