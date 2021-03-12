import React, { useState } from 'react';


export default function InputCard({setOpen}){
    const [cardTitle,setCardTitle] = useState('')
    const handleOnChange = (e) =>{
        setCardTitle(e.target.value);
    }
    return(
        <div>
             <div>
                <input className='inputCard'
                 placeholder='añade descripcion de la tarea'
                  value={cardTitle}
                   onChange={handleOnChange}/>
              </div>
              <div>
                  <button onClick={()=>setOpen(false)} >Añadir Tarea</button>
                  <button onClick={()=>setOpen(false)}>X</button>
              </div>
        </div>
    )
}