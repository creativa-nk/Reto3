import React, {useState} from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import store from '../utils/store'



export default function Card({card,index , id, deleteCard}){
  const [data,setData] = useState(store);
  
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