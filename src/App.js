import React, { useState } from 'react';
import List from './components/List';
import store from './utils/store';
import StoreApi from './utils/storeApi';
import {v4 as uuid} from 'uuid';
import './App.css';
import InputContainer from './components/InputContainer';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export default function App() {
  const [data,setData] = useState(store);

  
  
/*   const [lists, updateCards] = useState(store);

  const deleteCard = id => {
    updateCards(cards => list.cards.filter(card => card.id !== id));
    setData({cards:updateCards}) 
  };  */



 /*  const deleteCard = (title,listId) => {

   let { cards } = this.state; 
 
    let newCards = [
      ...card.slice(0, id),
      ...card.slice(id + 1),
    ]
 
    this.setState({ cards : newCards });
 
  }  */



/*   const deleteCard = (indexItem) =>{
    setlista((prevState) =>
    prevState.filter((listId,index) => index !== indexItem)
    );
  }; */



/*   const deleteCard = (listI,index) =>{
    // var actualData = data;
    data.lists["list-1"].cards.splice(0,1)
    console.log(data.lists["list-1"].cards);
    console.log(data.listId)
    console.log(data.cardsId)
    
  } */


/*   const deleteCard = (position) => {
    const newData = [
      ...data.slice(0,position),
      ...data.slice(position + 1),
    ]
    setData(newData)
    console.log(newData)
  }
 */


  /* 
      const DeleteCard = (title, cardId) => {
        const filtredData = setData.cards.filter(card => card.id !== cardId);
        setData({cards:filtredData})
        console.log(cardId)
        console.log(filtredData)
      };
 */


  
/*    const deleteList = (listId) => {
     const newState = data.filter(list => list.lists.id !==listId);
     setData(newState);
   }; */

   const deleteList = (listId) => {
    console.log(listId)
    const listToDelete = data.lists[listId]
    const newState = useState.filter(list => list.id !== listId)
    setData(newState)

  };

  const addMoreCard = (title, listId) => {
    console.log(title, listId);

    const newCardId = uuid();
    console.log(newCardId);
    const newCard ={
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const addMoreList = (title) =>{
    const newListId = uuid();
    const newList = {
      id:newListId,
      title,
      cards:[]
    };


   /*  const updateListTitle = (title, listId) => {
      const list = data.lists[listId];
      list.title = title;
    } */


    const newState = {
      listIds: [... data.listIds, newListId],
      lists: {
        ... data.lists,
        [newListId]: newList
      },
    };
    setData(newState);
  }

 const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    console.log('destination', destination, 'source', source, draggableId);

    if (!destination) {
      return;
    }
    if (type === 'list') {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newSate);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };
    
  return (
    <StoreApi.Provider value = {{addMoreCard, addMoreList}}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="app" type="list"  direction="horizontal" >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
               >
                  <div className="App">
                   {data.listIds.map((listId,index)=>{
                     const list = data.lists[listId];
                       return(
                        <List list={list} key={listId} index={index} deleteList={deleteList} listId={listId}/>
                        )
                     })}
                    <InputContainer type='list' />
                  </div>
              </div>
           )}
         </Droppable>
       </DragDropContext>
    </StoreApi.Provider>
  );
}
