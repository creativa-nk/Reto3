import React from 'react';
import Card from './Card'


export default function List(){
    return(
        <div className='lista'>
            <h1 className='tituloLista'> Titulo de lista </h1>
            <Card />
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}