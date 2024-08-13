import React from 'react';
import ReactDOM from 'react-dom/client';
import {MyButton} from './components/MyButton.js'

const App = () => {

return(
  <>
  {console.log('render of App')}
  <MyButton />
  </>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
