import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Search from './components/search/search';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Search />
      </Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
