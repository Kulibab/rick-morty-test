import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import AddIcon from '@material-ui/icons/Add';
import { lightGreen } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  root: {
    padding: '8px 8px 8px 12px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
    border: '2px solid chartreuse',
    background: '#444',

  },
  input: {
    flex: 1,
    color: 'chartreuse',
  },
}));

export default function TaskInput({addTask}) {
  const classes = useStyles();
  const [task, setTask] = useState('');

  const handleSubmit = () => {
    addTask({
      task,
      id: +new Date(),
      done: false,
    })

    setTask('');
  }

  return (
    <Paper className={classes.root} >
      <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <AddIcon style={{
        background: lightGreen[500],
        borderRadius: '50%',
        cursor: 'pointer',
        }}
        onClick={handleSubmit}
        />
    </Paper>
  );
}