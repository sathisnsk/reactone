import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [count, setCount] = useState(0);

  const incCounter = () => setCount(count+1);
  const asyncIncCounter = () => {
    setTimeout(()=> setCount((currentCount) => currentCount+1), 2000);
  }

  return (
    <>
      <p>  { count }</p>
      <button onClick = {incCounter}>Add +1</button>
      <button onClick = {asyncIncCounter}> Add +1 later </button>
    </>
  );

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);