import React, {useEffect, useState} from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useSelector, useDispatch } from 'react-redux';
import {addAnswerToQuestion} from './../../redux';

const AddAnswerForm = ({question_id}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (e) => {
    setOpen(false);
    console.log(document.getElementById("textfield-add-answer-answer").value)
    let answer = document.getElementById("textfield-add-answer-answer").value;
    let email = document.getElementById("textfield-add-answer-email").value;
    let nickname = document.getElementById("textfield-add-answer-nickname").value;
    let images = document.getElementById("textfield-add-answer-image");
    var data = {
      body: answer,
      name: nickname,
      email: email,
    };
    if (images === null) {
      data.photos = [];
    } else {
      data.photos = images.value.split(' ');
    }
    console.log(data);
    dispatch(addAnswerToQuestion(question_id, data));
  }

  return (
  <>
    <a className="report-helpful-btn" onClick={handleClickOpen}>Add an answer</a> 
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle style={{
        paddingBottom: '0'
      }}>Add Your Answer 
      </DialogTitle>
      <DialogTitle style={{
        fontSize: 'medium',
        paddingTop: '0',
      }}>
        You must enter the following: 
      </DialogTitle>
      <DialogContent style={{
        marginTop: '5px'
      }}>
        <TextField
          variant='filled'
          id="textfield-add-answer-answer"
          required
          label="Enter your answer"
          multiline
          fullWidth
          rows={3}
        />
        <TextField
          variant='filled'
          id="textfield-add-answer-email"
          fullWidth
          required
          margin="dense"
          label="Email Address"
          type="email"
        />

        <TextField
          variant='filled'
          id="textfield-add-answer-nickname"
          fullWidth
          required
          margin="dense"
          label="Nickname"
        />

        <TextField
          variant='filled'
          id="textfield-add-answer-image"
          fullWidth
          required
          margin="dense"
          label="Images"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  </>
  )
};

export default AddAnswerForm;