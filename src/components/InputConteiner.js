import React,{useState} from 'react';
import {Paper, Collapse} from '@material-ui/core';
import InputCard from './InputCard'


export default function InputConteiner(listId){
  const [open,setOpen] = useState(false)
    return(
        <div >
            <Collapse in={open}>
              <InputCard setOpen={setOpen} listId={listId} />
            </Collapse>
            <Collapse in={!open}>
              
               <span onClick={()=>setOpen(!open)}> + Añadir tarea</span>
              
            </Collapse>
        </div>
    )
}