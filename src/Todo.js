import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import { Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

function Todo({ todo, deteTask, updateTask }) {
    return (
        <Card className="todo">
            <CardContent>
                <Typography style={{ overflowWrap: "anywhere" }} >
                    {todo.task}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={() => updateTask(todo._id)} color="primary">
                    <EditIcon />
                </IconButton>|
                <IconButton onClick={() => deteTask(todo._id)} color="primary">
                    <DeleteForeverIcon />
                </IconButton>
            </CardActions>
        </Card>

    )
}

export default Todo
