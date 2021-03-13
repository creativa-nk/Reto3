import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';


export default function Card({card,index}){
    return(
        <Draggable draggableId={card.id} index={index}>
            {(provided)=>(
                <div
                     ref={provided.innerRef}
                     {...provided.dragHandleProps}
                     {...provided.draggableProps}
                >
                     <div className='tarea'>{card.title}</div>
                </div> 
            )}
        </Draggable>
    )
}