import {useState} from 'react';
import {MyCounter} from './MyCounter.js';

const MyButton = () => {
  const [counter, setCounter] = useState(5);
  console.log('Button outside return');
  const incrementCounter = () => {
    console.log('Button inside increment logic');
    setCounter(counter+1);
  }

  return  (
    <>
    {console.log('render of Button')}
  <MyCounter count={counter} />
  <button onClick = {incrementCounter} > increment </button>
    </>
  )
  
}

export {MyButton};