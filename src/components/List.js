import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card';
import InputConteiner from './InputContainer'


export default function List({list}){
    return(
        <div className='lista'>
            <div>
             <h1 className='tituloLista'>{list.title} </h1>
             <Droppable droppableId={list.id}>
                 {(provided)=>(
                     <div
                     ref={provided.innerRef}
                      {...provided.droppableProps}
                     >
                         {list.cards.map((card,index)=>(
                         <Card key={card.id} card={card} index={index} />
                        ))}
                        {provided.placeholder}
                     </div>
                 )}    
              </Droppable>
             <InputConteiner listId={list.id} type='card' />
            </div>
        </div>
    );
}