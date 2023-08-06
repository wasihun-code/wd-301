import React from "react";
import './TaskCard.css'


const TaskCard = (props: {
  title: string; 
  dueDate?: string; 
  completedAtDate?: string; 
  assigneeName: string;
}) => {
  
  return (
    <div className="border-2 m-2 px-8 py-3">
      <h2 className="text-xl font-bold">{props.title}</h2>
      {
        props.completedAtDate ?
            <p>Completed on: {props.completedAtDate}</p> :
            <p>Due on: {props.dueDate}</p> 
      }
      <p>Assignee: {props.assigneeName}</p>
    </div>  
  )
}

export default TaskCard;