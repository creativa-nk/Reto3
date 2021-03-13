import React, { useState, useContext } from 'react';
import storeApi from '../utils/storeApi';
import { Paper, InputBase, Button } from '@material-ui/core';


export default function InputCard({setOpen,listId,type}){
    const {addMoreCard, addMoreList} = useContext(storeApi);
    const [title,setTitle] = useState('')
    const handleOnChange = (e) =>{
        setTitle(e.target.value);
    };
    const handleBtnConfirm = () =>{
       if(type==='card'){
        addMoreCard(title, listId);
        setTitle('')
        setOpen(false);
    } else {
        addMoreList(title);
        setTitle('')
        setOpen(false);
    }
    };


    return(
        <div  className='containetInputCard'>
             <div>
                 <Paper className='inputCard'>
                <InputBase 
                   multiline
                   autoFocus
                   placeholder={
                       type === 'card'
                       ?'Descripción de la tarea'
                       :'Añade nombre de lista'
                    }
                   value={title}
                   onChange={handleOnChange}/>
                 </Paper>
              </div>
              <div>
                    <Button onClick={handleBtnConfirm} >
                      {type === 'card' ? 'Añadir Tarea' : 'Añadir Lista'}
                    </Button>
                  <Button onClick={()=>setOpen(false)}>x</Button>
              </div>
        </div>
    )
}