import React,{ useEffect, useState } from 'react'
import './App.css'
import Todo from './assets/components/Todo'
import { nanoid } from 'nanoid'



function App() {
  
  
  const [todos, setTodos] = useState(  JSON.parse(localStorage.getItem("todos"))|| [])
  
  const [newTodo,setNewTodo] = useState ({
  
    todoItem : "",
    todoId : nanoid(),
    
  })
  
  
  function handleChange(event) {
    const { name, value } = event.target;
    
    setNewTodo((prevState) => ({
      ...prevState,
      [name]: value
    }));
    
    
  }

  
  useEffect(()=> {
      localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  function addTodo(event){
    event.preventDefault()
    newTodo.todoItem  && setTodos (prevState => [...prevState, newTodo])
    
    setNewTodo({
        todoItem : "",
        todoId : nanoid()
        
      }
    )
  }
  
  function deleteTodos(id){
    
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.todoId !== id));

  
  }

  function reset(){
    setTodos([])
  }

  const todoElements = todos.map((item) => (
    <Todo key={item.todoId} lists={item} 
    todosArr = {todos}
    deleteHandler ={deleteTodos}

    />
  ));
 

  return (
    <div className="App-container">
      
      <div className='todo-app-container'>
     <h1>Todo</h1>
     
     
      {todoElements}  
        <form onSubmit={addTodo} action="">

          <input type="text" 
          placeholder='Type your Todo list..'
          value={newTodo.todoItem}
          name="todoItem"
          onChange={handleChange}
          />
        </form>
    </div>

    { todos.length > 0 ? ""  :  <div className="starting-text">

<p>Oops! It seems like your todo list is empty.</p>
   <p> Why not add some tasks to stay organized and productive? </p>
  
</div>
}
        
<button onClick={addTodo} className='add-btn'>Add Todo</button>
<button onClick={reset} className='reset'>Reset</button>

    </div>
  )
}

export default App
