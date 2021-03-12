import React from 'react';
import Card from './Card';
import InputConteiner from './InputConteiner'


export default function List({list}){
    return(
        <div className='lista'>
            <div>
             <h1 className='tituloLista'>{list.title} </h1>
             {list.cards.map((card)=>(
                  <Card key={card.id} card={card} />
              )
              )}
             <InputConteiner listId={list.id} />
            </div>
        </div>
    );
}