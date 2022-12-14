//Select.js
import React from 'react';
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
} from '@material-ui/core';

export default function Select(props) {
  const { name, label, value, varient, onChange, options, ...other } = props;

  return (
    <FormControl variant={varient || 'outlined'}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...other}
      >
        <MenuItem></MenuItem>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
