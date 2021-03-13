import React, { useState } from 'react';
import List from './components/List';
import store from './utils/store';
import StoreApi from './utils/storeApi';
import {v4 as uuid} from 'uuid';
import './App.css';
import InputConteiner from './components/InputConteiner';

function App() {
  const [data,setData] = useState(store);

  const addMoreCard = (title, listId) => {
   console.log(title, listId);
   const newCardId = uuid();
   console.log(newCardId);

   const newCard ={
      id:newCardId,
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

  const addMoreList = (titile) =>{
    const newListId = uuid();
    const newList = {
      id:newListId,
      titel,
      cards:[]
    };
    const newState = {
      listIds: [... data.listIds, newListId],
      lists: {
        ... data.lists,
        [newListId]: newList;
      },
    };
    setData(newState);
  }

  return (
    <StoreApi.Provider value = {{addMoreCard, addMoreList}}>
      <div className="App">
       {data.listIds.map((listId)=>{
         const list = data.lists[listId];
          return(
           <List list={list} key={listId}/>
          )
        })}
        <InputConteiner type='list' />
     </div>
    </StoreApi.Provider>
  );
}

export default App;
