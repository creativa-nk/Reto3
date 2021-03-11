import React from 'react';


export default function InputCard(){
    return(
        <div>
             <div>
                <input className='inputCard' placeholder='añade descripcion de la tarea'/>
              </div>
              <div>
                  <button>Añadir Tarea</button>
                  <button>X</button>
              </div>
        </div>
    )
}