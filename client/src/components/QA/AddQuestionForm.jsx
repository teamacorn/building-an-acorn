import React, {useEffect, useState} from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useSelector, useDispatch } from 'react-redux';
import {addQuestionToProduct} from './../../redux';

const AddQuestionForm = () => {
  const dispatch = useDispatch();
  const currentProduct = useSelector(state => state.currentProduct);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (e) => {
    setOpen(false);
    let question = document.getElementById("textfield-add-question-question").value;
    let email = document.getElementById("textfield-add-question-email").value;
    let nickname = document.getElementById("textfield-add-question-nickname").value;
    dispatch(addQuestionToProduct({
      body: question,
      name: nickname,
      email: email,
      product_id: currentProduct.product.id
    }));
  }

  return (
  <>
    <Button size="large" variant="outlined" onClick={handleClickOpen}>ADD A QUESTION +</Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle style={{
        paddingBottom: '0'
      }}>Add Your Question 
      </DialogTitle>
      <DialogTitle style={{
        fontSize: 'medium',
        paddingTop: '0',
      }}>
        About the {currentProduct.product.name}
      </DialogTitle>
      <DialogContent style={{
        marginTop: '5px'
      }}>
        <TextField
          variant='filled'
          id="textfield-add-question-question"
          required
          label="Enter your question"
          multiline
          fullWidth
          rows={4}
        />
        <TextField
          variant='filled'
          id="textfield-add-question-email"
          fullWidth
          required
          margin="dense"
          label="Email Address"
          type="email"
        />
        <DialogContentText style={{
          fontSize: 'small'
        }}>
          * For authentication reasons, you will not be emailed
        </DialogContentText>
        <TextField
          variant='filled'
          id="textfield-add-question-nickname"
          fullWidth
          required
          margin="dense"
          label="Nickname"
        />
        <DialogContentText style={{
          fontSize: 'small'
        }}>
          * For privacy reasons, do not use your full name or email address
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  </>
  )
};

export default AddQuestionForm;