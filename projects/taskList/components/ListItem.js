import { InputGroup } from "./InputGroup";


export const ListItem = (props) =>
{

const deleteTask =() => {
  return(
  <>
  <InputGroup/>
  </>
  )
}
  
return (
  <ul>
  {props.values.map((listItem, index) => {
    return (
    <li key= {index}> 
      <span> {listItem} </span> 
      <button id='remove-btn' onClick={deleteTask}>remove</button>
    </li> )
    })
    }
  </ul>
)

}



/* ()=>{
  console.log("Before filter \n" + props.values);
  const newList = props.values.filter((listItem)=>listItem.length>6);
  console.log("after filter \n" + newList);
  props.values = newList;
  console.log("after filter \n" + props.values);
} */