import React from "react";
import './TaskCard.css'

const TaskCard = (props) => {
  const duedate = props.dueDate.toISOString().split('T')[0];
  const completeddate = props.completedAtDate.toISOString().split('T')[0];
  
  return (
    <div className="border-2 m-2 px-8 py-3">
      <h2 className="text-xl font-bold">{props.title}</h2>
      {
        props.dueDate >= props.completedAtDate ? 
            <p>Completed on: {completeddate}</p> :
            <p>Due on: {duedate}</p> 
      }
      <p>Assigne: {props.assigneeName}</p>
    </div>
  )
}

export default TaskCard;