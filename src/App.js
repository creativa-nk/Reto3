import React, { useState } from 'react';
import List from './components/List';
import store from './utils/store';
import StoreApi from './utils/storeApi';
import {v4 as uuid} from 'uuid';
import './App.css';

function App() {
  const [data,setData] = useState(store);

  const addMoreCard = (title, listId) => {
   console.log(title, listId);
   const newCardId = uuid();
   console.log(newCardId);
  }

  return (
    <StoreApi.Provider value = {{addMoreCard}}>
      <div className="App">
       {data.listIds.map((listId)=>{
         const list = data.lists[listId];
          return(
           <List list={list} key={listId}/>
          )
        })}
     </div>
    </StoreApi.Provider>
  );
}

export default App;
