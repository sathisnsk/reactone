
import { useState } from "react";
import  {ListItem}  from "./ListItem";

export const InputGroup = (props) => {

const [listItems, setListItems] = useState([]); 

const addToTaskList = () => {
 // localStorage.setItem('task', document.getElementById("input-task").value)
 console.log(document.getElementById("input-task").value);
 const newListItem = document.getElementById("input-task").value;
setListItems((currentArray) =>  [...currentArray, newListItem]);
}

const removeFromTaskList = () => {
  setListItems((currentArray) => currentArray.filter((listItem,index)=>listItem.length>6))
}

  return (
    <>
    <div id="input-group"> 
    <input id="input-task" type="text" placeholder="Enter a Task"/>
    <button className="add-task-btn" onClick = {addToTaskList}>Add Task</button>
    
    </div>
    <div>
      {listItems.length >=1 ?  
    <ListItem values={listItems}/>
      : false }
    </div>
    </>
  )

}