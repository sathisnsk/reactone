import {useState} from 'react';

export const Counter = () => {
const [count,setCount] = useState(0);

return (
 <div>
  {count}
 <button onClick = {()=>{
 setCount(count+1);
 }}> click here </button>
 </div>
)

}