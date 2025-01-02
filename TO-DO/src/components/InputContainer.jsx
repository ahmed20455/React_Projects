import React from 'react'
function InputContainer({inputvalue, writetodo, addTodo}) {
    return (<div className='input-container'>
        <input type="text" value={inputvalue} onChange={writetodo}></input>
        <button onClick={addTodo}>+</button>
    </div>)
}
export default InputContainer