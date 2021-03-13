import React, { useState } from 'react';
import List from './components/List';
import store from './utils/store';
import StoreApi from './utils/storeApi';
import {v4 as uuid} from 'uuid';
import './App.css';
import InputContainer from './components/InputContainer';
import { DragDropContext } from 'react-beautiful-dnd';

export default function App() {
  const [data,setData] = useState(store);

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


    const updateListTitle = (title, listId) => {
      const list = data.lists[listId];
      list.title = title;
    }


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
    const{ destinacion, source, draggableId} = result;
    console.log('destination', destinacion, 'source',source, draggableId);

    if(!destinacion){ // si el destino es null( osea no es una lista >> devolver la tarea a su sitio)
      return;
    }
  }; 


  return (
    <StoreApi.Provider value = {{addMoreCard, addMoreList}}>
      <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
       {data.listIds.map((listId)=>{
         const list = data.lists[listId];
          return(
           <List list={list} key={listId}/>
          )
        })}
        <InputContainer type='list' />
     </div>
     </DragDropContext>
    </StoreApi.Provider>
  );
}
