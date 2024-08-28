import React from 'react';
import ReactDOM from 'react-dom/client';
import {Counter} from './Counter.js';

const App = () => {

  return (
  <>
    <Counter />
    <Counter />
    <Counter />
  </>  
  )

}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);