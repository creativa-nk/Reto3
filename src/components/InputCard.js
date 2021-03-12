import React from 'react';


export default function InputCard({setOpen}){
    return(
        <div>
             <div>
                <input className='inputCard' placeholder='añade descripcion de la tarea'/>
              </div>
              <div>
                  <button >Añadir Tarea</button>
                  <button onClick={()=>setOpen(false)}>X</button>
              </div>
        </div>
    )
}