import React,{useState} from 'react';
import { Paper, Typography, Collapse } from '@material-ui/core';
import InputCard from './InputCard'


export default function InputContainer({ listId, type }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
           onClick={() => setOpen(!open)} 
        >
          <Typography>
            {type === 'card' ? '+ Add a Card' : '+ Add another List'}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  );
}