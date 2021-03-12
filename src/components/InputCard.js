import React, { useState, useContext } from 'react';
import storeApi from '../utils/storeApi';


export default function InputCard({setOpen,listId}){
    const {addMoreCard} = useContext(storeApi);
    const [cardTitle,setCardTitle] = useState('')
    const handleOnChange = (e) =>{
        setCardTitle(e.target.value);
    };
    const handleBtnConfirm = () =>{
       addMoreCard(cardTitle, listId);
       setOpen(false);
    };

    return(
        <div>
             <div>
                <input className='inputCard'
                 placeholder='añade descripcion de la tarea'
                  value={cardTitle}
                   onChange={handleOnChange}/>
              </div>
              <div>
                  <button onClick={handleBtnConfirm} >Añadir Tarea</button>
                  <button onClick={()=>setOpen(false)}>X</button>
              </div>
        </div>
    )
}