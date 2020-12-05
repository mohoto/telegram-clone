import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import db from '../misc/firebase'

export default function FormDialog({ openModalThread, handleClose }) {

    const [thread, setThread] = useState();

    const addThread = () => {
        db.collection('threads').add({
            name: thread
        })
        handleClose();
    }

    return (
        <div>
            <Dialog open={openModalThread} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Ajouter</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ajouter un utilisateur
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="utilisateur"
                        type="text"
                        fullWidth
                        value={thread}
                        onChange={event => setThread(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Annuler
          </Button>
                    <Button onClick={addThread} color="primary">
                        Ajouter
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
