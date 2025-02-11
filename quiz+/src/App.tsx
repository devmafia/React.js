import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './components/Quiz'
import questions from './data/data.json' ;

function App() {
  return (
    <div className="App">
      <Quiz questions={questions}></Quiz>
    </div>
  );
}

export default App;
