import React,{useState} from 'react'
import FrameFilled from "../components/Frame -Filled.svg"
import Frame from "../components/Frame.svg"



function Todo(props) {
    
  const [changeState, setChangeState]= useState(false)

  function isDone(){
    setChangeState(!changeState)
  }


  const data = props.lists


  return (
    <div>
     
     <div className= {`todo-list ${changeState? "opacity" : "" } `}>
        <ul>
        {changeState === false && <img onClick={isDone} src={Frame} alt="" />}
        {changeState === true &&<img onClick={isDone} src={FrameFilled} alt="" />}
            <p>{data.todoItem}</p>
        </ul>
    
        <div className="buttons">
             <i  onClick={() => props.deleteHandler(data.todoId)} className="gg-trash dlt-btn "></i>
         </div>
         
     </div>
     {changeState === true && <h5>Completed ✔️ </h5>}
    </div>
  )
}


export default Todo

