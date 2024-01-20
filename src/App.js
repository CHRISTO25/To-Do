import React from 'react'
import { useState } from 'react'

function App() {
const [text,setText]=useState('')
const [text1,setText1]=useState('')
const [store,setStore]=useState([])
const [show,setShow]=useState(false)
  return (
    <div>
        <div>
          <input type="text"onChange={(e)=>{setText(e.target.value)}} value={text}/>
          <button onClick={()=>{setStore([...store,{id:Date.now(),text:text,status:false,editShow:false}])}}>Add</button>
        
        </div>
        {
          store.map((x)=>{
            return(
              <div>
           <input type="checkbox" checked={x.status} onClick={(e)=>{setStore(store.filter((obj)=>{if(x.id===obj.id){obj.status=e.target.checked}return obj}))}}/>
           <input type="text" value={x.text}/>
           <button onClick={()=>{setStore(store.filter((obj)=>{if(x.id !==obj.id){return obj}}))}}>Delete</button>
           <button onClick={()=>{setShow(store.filter((obj)=>{if(x.id===obj.id){x.editShow=!x.editShow}return obj}))}}>EDIT</button>
          { x.editShow? <div><input type="text" value={text1?text1:text} onChange={(e)=>{setText1(e.target.value)}} /> <button onClick={()=>{setStore(store.filter((obj)=>{if(x.id===obj.id){x.text=text1}return obj}))}}>save</button></div>:null}
         
        </div>
            )
          })
        }
         <button onClick={()=>{setStore(store.filter((y)=>{if(y===null){return y}}))}}> delete all</button>
        <h2>ACTIVED</h2>
        {
          store.map((x)=>{
            if(x.status==true){
              return(
                <p>{x.text}</p>
              )
            }
          })
        }

    </div>
  )
}

export default App
