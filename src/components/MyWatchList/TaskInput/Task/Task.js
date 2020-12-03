import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import { CheckBox, CheckBoxOutlineBlank, DeleteOutline } from '@material-ui/icons';
import React from 'react';
import classes from './Task.module.scss'

const Task = ({ task, deleteTask, completeTask }) => {


  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.action} onClick={() => (completeTask(task.id))}>
      {task.done 
      ? <CheckBox className={classes.icon + ' ' + classes.green}/>
      : <CheckBoxOutlineBlank className={classes.icon + ' ' + classes.yellow} />}
        <CardContent className={classes.content}>
          <Typography className={classes.text}>
            {task.task}
          </Typography>
        </CardContent>
      </CardActionArea>
      <DeleteOutline className={classes.icon + ' ' + classes.red} onClick={() => deleteTask(task.id)}/>
    </Card>
  )
}

export default Task;
