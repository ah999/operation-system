//Button.js
import React from 'react';
import { Button as MuiButton } from '@material-ui/core';

export default function Button(props) {
  const { text, size, color, variant, onClick, ...other } = props;

  return (
    <strong>
      <MuiButton
        variant={variant || 'contained'}
        color={color || 'primary'}
        size={size || 'large'}
        style={{ marginLeft: 16 }}
        onClick={onClick}
        {...other}
      >
        {text}
      </MuiButton>
    </strong>
  );
}
