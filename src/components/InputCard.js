import React, { useState, useContext } from 'react';
import storeApi from '../utils/storeApi';
import { Paper, InputBase, Button, IconButton } from '@material-ui/core';


export default function InputCard({setOpen,listId,type}){
    const {addMoreCard} = useContext(storeApi);
    const [title,setTitle] = useState('')
    const handleOnChange = (e) =>{
        setTitle(e.target.value);
    };
    const handleBtnConfirm = () =>{
       addMoreCard(title, listId);
       setTitle('')
       setOpen(false);
    };

    const handleBlur = () => {
        setOpen(false);
        setTitle('');   // dejar el input vacio
    }

    return(
        <div>
             <div>
                 <Paper>
                <InputBase className='inputCard'
                   multiline
                   placeholder={
                       type === 'card'
                       ?'Añade descripcion de la tarea'
                       :'Añade nombre de lista'
                    }
                   value={title}
                   onBlur={handleBlur}
                   onChange={handleOnChange}/>
                 </Paper>
              </div>
              <div>
                    <Button onClick={handleBtnConfirm} >
                      {type === 'card' ? 'Add Card' : 'Add List'}
                    </Button>
                  <Button onClick={()=>setOpen(false)}>x</Button>
              </div>
        </div>
    )
}