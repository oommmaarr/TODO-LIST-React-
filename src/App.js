import  { useRef , useState } from 'react';
import './App.css';


function App() {
 const [todos , settodos] = useState([])
 const inputRef = useRef()
 const Addhandler = ()=>{
  var inputVal = inputRef.current.value
  const newItem = { inputVal , completed : false}
  if(inputRef.current.value===""){
    return
  }

  settodos([...todos,newItem])
  inputRef.current.value = ""
  
 }
 const HandleItemDone = (index)=>{
  const newTOdos = [...todos]
  newTOdos[index].completed = !newTOdos[index].completed 
  settodos(newTOdos)
 }
 const DeleteHandler = (index) =>{
  const newTOdos = [...todos]
  newTOdos.splice(index  , 1 )
  settodos(newTOdos)
 }


  return (
    <div className="App">
      <div className='frame'>
    <h2 className='text-5xl text-white font-mono m-4'>TO DO-LIST</h2>
    <ul className='text-white text-2xl w-11/12'>
     {todos.map(({inputVal , completed } , index)=>{
      return (
      <div className='flex  content-between mt-3'>
      <li id='task' className={completed ? "done " : ""} key={index} onClick={()=>HandleItemDone(index)}>{inputVal}</li>
      <span className='x' onClick={()=>DeleteHandler(index)}>X</span>
      </div>
      )
     })}
    </ul>
    <input className='input' ref={inputRef}></input>
    <button className='btn' onClick={Addhandler}>ADD</button>
    </div>
    </div>
  );
}

export default App;
