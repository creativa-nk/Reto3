import React,{useState} from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card';
import store from '../utils/store';
import InputConteiner from './InputContainer'


export default function List({list,index ,listId}){
    const [data,setData] = useState(store);

    const deleteCard = (id,index) =>{
    
        const newData = data.lists[listId].cards.splice(index, 1)
                        
        console.log(listId)
        console.log(index);
        console.log(data.lists[listId].cards) 
        console.log(newData)
        /* setData(data.lists[listId].cards) */ // da el error
    } 

    const deleteList = (index) =>{
    
        const newData = data.lists[listId].cards.splice(index)

        console.log(listId)
        console.log(data.lists[listId].cards)
        /* setData(data.lists[listId].cards) */ // da el error

    }
    return(
        <Draggable draggableId={list.id} index={index}>
            {(provided) => (
                <div className='lista'{...provided.draggableProps} ref={provided.innerRef}>
                    <div  {...provided.dragHandleProps}>
                        <h1 className='tituloLista'>{list.title} </h1>
                             <Droppable droppableId={list.id}>
                                  {(provided)=>(
                                <div
                                  ref={provided.innerRef}
                                  {...provided.droppableProps}
                                >
                                 {list.cards.map((card,index)=>(
                                 <Card key={card.id} card={card} index={index} deleteCard={deleteCard} />
                                 ))}
                                 {provided.placeholder}
                                </div>
                                  )}    
                             </Droppable>
                             <div>
                                <InputConteiner listId={list.id} type='card' />
                                 <div className='XbtnLista'  onClick = {() => deleteList(listId)}>Limpiar Lista</div>
                             </div>
                         
                    </div>
                </div>
            )}
        
        </Draggable> 
    );
}