//Input.js
import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input(props) {
  const { name, label, value, variant, onChange, ...other } = props;
  return (
    <TextField
      variant={variant || 'outlined'}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
    />
  );
}
