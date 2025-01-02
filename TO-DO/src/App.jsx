import { useState } from 'react';
import './App.css'
import InputContainer from './components/InputContainer'
import TodoContainer from './components/TodoContainer'
function App() {
  
  const [inputvalue, setInputvalue] = useState('');
  const [todos, setTodos] = useState([]);
  function writetodo(e){
    setInputvalue(e.target.value)
  }
  function addTodo(){
     if(inputvalue!=''){
      setTodos((prevTodos)=>[...prevTodos, inputvalue])
      setInputvalue('')
     }
  } 
  function deletetodo(todoIndex){
      setTodos((prevTodos)=>
        prevTodos.filter((prevTodos, prevTodosIndex)=>{
          return prevTodosIndex != todoIndex
      })
    )
  }
  console.log(todos)
  return (
   <main>
    <h1>To Do List</h1>
    <InputContainer inputvalue={inputvalue} writetodo={writetodo} addTodo={addTodo}/>


    <TodoContainer todos={todos} deletetodo={deletetodo}/>
    </main>
  );
}

export default App
