import React, { useState } from 'react';
import List from './components/List';
import Card from './components/Card';
import store from './utils/store'
import './App.css';

function App() {
  const [data,setData] = useState(store)
  return (
    <div className="App">
      {data.listIds.map((listId)=>(
       <List />
      ))}
    </div>
  );
}

export default App;
