import React, {useState} from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import store from '../utils/store'



export default function Card({card,index}){
  const [data,setData] = useState(store);


   /* const [cards,setCards] = useState(store);
     const DeleteCard = (listId) => {
        setlist((prevState) =>
          prevState.filter((todo, index) => index !== cardId)
        );
      };
    console.log()  

     const DeleteCard = (title,listId) => {

        let { cards } = this.state;
     
        let newCards = [
          ...card.slice(0, id),
          ...card.slice(id + 1),
        ]
     
        this.setState({ cards : newCards });
     
      } */
    
      const DeleteCard = (title, cardId) => {
        const filtredData = setData.cards.filter(card => card.id !== cardId);
        setData({cards:filtredData})
        console.log(cardId)
        console.log(filtredData)
      };


    return(
        <Draggable draggableId={card.id} index={index}>
            {(provided)=>(
                <div
                     ref={provided.innerRef}
                     {...provided.dragHandleProps}
                     {...provided.draggableProps}
                >
                     <div className='tarea'>{card.title}
                        <div className='Xbtn'  onClick={() => DeleteCard(cardId)} >X</div>
                     </div>
                </div> 
            )}
        </Draggable>
    )
}