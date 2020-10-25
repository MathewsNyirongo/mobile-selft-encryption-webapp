import React from 'react';
import {Dialog, DialogTitle, Slide, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import RemoveButton from './RemoveButton';
import DefaultButton from './DefaultButton';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomDialog({ isOpen, onClose, title, content, onClick }){
    
    return(
        <div>
            <Dialog
                aria-labelledby="title"
                aria-describedby="content"
                open={isOpen}
                onClose={onClose}
                keepMounted
                TransitionComponent={Transition}
            >
                <DialogTitle id="title" style={{color: '#E24C4C'}}>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="content">{content}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <RemoveButton onClick={onClose} color="primary">No</RemoveButton>
                    <DefaultButton onClick={onClick} color="primary">Yes</DefaultButton>
                </DialogActions>
            </Dialog>
        </div>
    );
};
