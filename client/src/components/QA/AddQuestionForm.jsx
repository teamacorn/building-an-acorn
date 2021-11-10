import React, {useEffect, useState} from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';

const AddQuestionForm = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
  <>
    <Button size="large" variant="outlined" onClick={handleClickOpen}>ADD A QUESTION +</Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add a Question </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please provide your question, email and a nickname.
        </DialogContentText>
        <TextField
          required
          label="Enter your question"
          multiline
          fullWidth
          rows={4}
        />
        <TextField
          fullWidth
          required
          margin="dense"
          label="Email Address"
          type="email"
        />
        <TextField
          fullWidth
          required
          margin="dense"
          label="Nickname"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  </>
  )
};

export default AddQuestionForm;