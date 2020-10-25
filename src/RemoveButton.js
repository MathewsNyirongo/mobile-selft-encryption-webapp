import React from 'react';
import { withStyles, Button } from '@material-ui/core';

const RemoveButton = withStyles({
    root:{
        boxShadow: 'none',
        color: '#E24C4C',
        textTransform: 'none',
        borderRadius: 25,
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#ffffff',
        borderColor: '#E24C4C',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Atial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(','),
        '&:hover': {
            backgroundColor: '#E24C4C',
            borderColor: '#E24C4C',
            color: '#ffffff',
            boxShadow: 'none'
        },
        '&:focus': {
            backgroundColor: '#ffffff',
            borderColor: '#E24C4C',
            color: '#E24C4C',
            boxShadow: 'none'
        }
    }
})(Button);

export default RemoveButton;