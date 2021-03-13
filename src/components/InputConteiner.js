import React,{useState} from 'react';
import { Paper, Typography, Collapse } from '@material-ui/core';
import InputCard from './InputCard'


export default function InputConteiner(listId, type){
  const [open,setOpen] = useState(false)
    return(
        <div className='inputConteiner'>
            <Collapse in={open}>
              <InputCard setOpen={setOpen} listId={listId} type={type} />   {/* que type es lista o card */}
            </Collapse>
            <Collapse in={!open}>
              <Paper
               onClick={() => setOpen(!open)}
              >
                <Typography>
                  {type === 'card'?'+ Añadir otra Tarea':'+ Añadir otra Lista'}
                </Typography>
              </Paper>
            </Collapse>
        </div>
    )
}