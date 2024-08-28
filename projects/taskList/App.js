import React from 'react';
import ReactDOM from 'react-dom/client';
import { InputGroup } from './components/InputGroup';

const App = () => {
  return (
    <div id="container">
      <h1> To-Do List </h1>
      <InputGroup/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);