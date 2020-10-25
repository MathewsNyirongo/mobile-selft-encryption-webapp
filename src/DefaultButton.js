import React from 'react';
import { withStyles, Button } from '@material-ui/core';

const DefaultButton = withStyles({
    root:{
        boxShadow: '0 7px 17px -3px #0047F7',
        color: '#ffffff',
        textTransform: 'none',
        borderRadius: 25,
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0047F7',
        borderColor: '#0047F7',
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
            backgroundColor: '#ffffff',
            borderColor: '#0047F7',
            color: '#0047F7',
            boxShadow: 'none'
        },
        '&:focus': {
            backgroundColor: '#ffffff',
            borderColor: '#0047F7',
            color: '#0047F7',
            boxShadow: 'none'
        }
    }
})(Button);

export default DefaultButton;