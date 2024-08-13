import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';


function App() {
  console.log("App thinks that flag is Outside function");
  const [flag, toggleFlag] = useState(false);
 

  const onClickFunc = () => {
  return function() {
    console.log("_onClick thinks that flag is", flag);
    toggleFlag(!flag);                 

    setTimeout(() => {
      console.log("setTimeout thinks that flag is", flag);
    }, 2000);
  }
}

  return (
    <>
   <p style= {{color:"green", fontSize:"32px"}}>{flag.toString()}</p>
    <div>
      <button onClick={onClickFunc()}>{flag ? "true" : "false"}</button>
    </div>
    </>
  );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

