
const MyCounter = (props) => {
  console.log('render of Counter');
  return (<p> {props.count}</p>)
}


export {MyCounter};