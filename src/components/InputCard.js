import React, { useState, useContext } from 'react';
import storeApi from '../utils/storeApi';
import { Paper, InputBase, Button, IconButton } from '@material-ui/core';


export default function InputCard({setOpen,listId}){
    const {addMoreCard} = useContext(storeApi);
    const [cardTitle,setCardTitle] = useState('')
    const handleOnChange = (e) =>{
        setCardTitle(e.target.value);
    };
    const handleBtnConfirm = () =>{
       addMoreCard(cardTitle, listId);
       setCardTitle('')
       setOpen(false);
    };

    

    return(
        <div>
             <div>
                 <Paper>
                <InputBase className='inputCard'
                   multiline
                   placeholder='añade descripcion de la tarea'
                   value={cardTitle}
                   onBlur={() => setOpen(false)}
                   onChange={handleOnChange}/>
                 </Paper>
              </div>
              <div>
                  <Button onClick={handleBtnConfirm} >Añadir Tarea</Button>
                  <Button onClick={()=>setOpen(false)}>x</Button>
              </div>
        </div>
    )
}