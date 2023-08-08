import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Additem from './Components/Additem';
import Headers from './Components/Headers';
import Footers from './Components/Footers';
import Contents from './Components/Contents';
import { useState } from 'react';
import Additems from './Components/Additems';

function App(){
  const[items,setitems]=useState('')

  const [newItem,setNewitem]=useState('')
  const additem =(item)=>{
    const id=items.length?items[items.length-1].id+1:1;
    const addNewitem ={id,checked:false,item}
    const listitems=[...items,addNewitem]
    setitems(listitems)
    localStorage.setItem("todo_list",JSON.stringify(listitems))
  }
const HandleChange =(id)=>{
    console.log(`id:${id}`)
    const listitems = items.map((item)=>
    item.id===id?{...item,checked:item.checked}:item)
    setitems(listitems)
    localStorage.setItem("todo_list",JSON.stringify(listitems))

  }
const HandleDelete=(id)=>{
    const listitems=items.filter((items)=>items.id!==id)
    setitems(listitems)
    localStorage.setItem("todo_list",JSON.stringify(listitems))

  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(!newItem)return;
    console.log(newItem)
    additem(newItem)
    setNewitem('')
  }
return(   
   <div className='App'>
      <Headers/>
      <Additems
      newItem={newItem}
      setNewitem={setNewitem}
      handleSubmit={handleSubmit}/>
      <Footers
      length={items.length}/>
      <Contents
        items={items}
        HandleChange={HandleChange}
        HandleDelete={HandleDelete}
      />
      
    </div>
  
  )
}
export default App
