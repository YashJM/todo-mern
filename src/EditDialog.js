import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function EditDialog({ open, handleClose, setUpdatedTask, sendUpdateReq, currentTask }) {

    return (

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Task</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Task"
                    type="email"
                    fullWidth
                    defaultValue={currentTask}
                    onChange={(e) => { setUpdatedTask(e.target.value); }}
                ></TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
          </Button>
                <Button onClick={sendUpdateReq} color="primary">
                    Update
          </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditDialog
