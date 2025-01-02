import React from 'react'
import Todo from './Todo';
function TodoContainer({todos, deletetodo}) {
    return (
        <div className='container'>
            {todos.map((todo, index)=>{
                return (
                    <Todo todo={todo} index={index} deletetodo={deletetodo}/>
                )
            })}
        </div>
    )
}
export default TodoContainer;