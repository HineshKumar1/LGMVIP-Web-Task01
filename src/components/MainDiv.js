import React,{useState} from 'react'
import TodoItem from './TodoItem';

export default function MainDiv() {
  const [InputList, setInputList] = useState('');
  const [List, setList] = useState([]);

  const showItems = (element) =>{
    setInputList(element.target.value);
  }
  const AddList = ()=>{
    // var items = document.getElementById('ListInput').value;
    setList((oldItem)=>{
        return [...oldItem,InputList]
    });
  }
  const deleteItem = (id)=>{

    setList((oldItem)=>{
      return oldItem.filter((Array,index) => {
        return index !== id;
      })
  })
}
  return (

    <div className="container" >
      <div className="center">
        <input type="text" id='ListInput' onChange={showItems}  />
        <button className='button-1' onClick={AddList} >+ New Task</button>
        <ol>
          {
             List.map((value,index)=>{
              return <TodoItem 
              item={value}
              key={index}
              id={index}
              selectItem={deleteItem} 
              />
             })
          }
        </ol>
      </div>
      
    </div>
  )
}