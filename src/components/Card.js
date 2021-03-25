import React from 'react';
import { Draggable} from 'react-beautiful-dnd'



export default function Card({card,index , id, deleteCard}){
  
    return(
        <Draggable draggableId={card.id} index={index}>
            {(provided)=>(
                <div
                     ref={provided.innerRef}
                     {...provided.dragHandleProps}
                     {...provided.draggableProps}
                >
                     <div className='tarea'>{card.title}
                        <div className='Xbtn'    onClick={() =>deleteCard(id, index)}  >X</div>
                     </div>
                </div> 
            )}
        </Draggable>
    )
}