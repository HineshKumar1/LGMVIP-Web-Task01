import React from 'react'

export default function TodoItem(props) {
  return (
    <>
     <div className="divLayout">
      <i className="fa-solid fa-circle-xmark" onClick={()=>{
        props.selectItem(props.id);
        
      }}></i>
              <li>{props.item}</li>
      </div>
    </>
  )
}