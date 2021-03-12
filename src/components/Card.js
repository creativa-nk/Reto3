import React from 'react';


export default function Card({card}){
    return(
        <div className='tarea'>
            {card.content}
        </div>
    )
}