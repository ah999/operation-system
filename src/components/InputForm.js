import React, { useState, useEffect } from 'react';
import { useForm, Form } from './UseForm';
import Button from '../controls/Button';
import DatePicker from '../controls/DatePicker';
import Input from '../controls/Input';
import Select from '../controls/Select';
import { Paper, Grid } from '@material-ui/core';
import { format, compareAsc } from 'date-fns';

const emergencyList = [
  { id: '1', title: '1' },
  { id: '2', title: '2' },
  { id: '3', title: '3' },
  { id: '4', title: '4' },
  { id: '5', title: '5' },
  { id: '6', title: '6' },
];

const departmentList = [
  { id: 'department 1', title: 'Department 1' },
  { id: 'department 2', title: 'Department 2' },
  { id: 'department 3', title: 'Department 3' },
  { id: 'department 4', title: 'Department 4' },
  { id: 'department 5', title: 'Department 5' },
];

const modelObject = {
  doctor_name: '',
  patient_id: '',
  duration: '',
  department_id: '',
  emergency: '',
  date: new Date(),
};

export default function Employee({ operation }) {
  const { values, setValues, handleInputChange, resetForm } =
    useForm(modelObject);
  let [operations, setOperations] = useState([]);

  useEffect(() => {
    getOperations();
  }, []);

  let getOperations = async () => {
    let response = await fetch('/ops/get/');
    let data = await response.json();
    setOperations(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    resetForm();
  };

  let createOperation = async () => {
    fetch(`/op/post/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    getOperations();
  };

  return (
    <Paper>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <Input
              label="Doctor Name"
              name="doctor_name"
              type="text"
              required
              value={values.doctor_name}
              onChange={handleInputChange}
            />
            <Input
              label="Patient ID"
              name="patient_id"
              type="number"
              required
              value={values.patient_id}
              onChange={handleInputChange}
            />
            <Input
              label="Duration (minutes)"
              name="duration"
              type="number"
              required
              value={values.duration}
              onChange={handleInputChange}
            />
            <Select
              label="Department"
              name="department_id"
              required
              value={values.department_id}
              onChange={handleInputChange}
              options={departmentList}
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              label="Emergency"
              name="emergency"
              required
              value={values.emergency}
              onChange={handleInputChange}
              options={emergencyList}
              defaultValue="1"
            />
            <DatePicker
              label="Date"
              name="date"
              required
              value={values.date}
              format="MMM/dd/yyyy"
              onChange={handleInputChange}
              autoOk
            />

            <div>
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ marginLeft: 16 }}
                onClick={createOperation}
                text="Submit"
                type="submit"
              />
              <Button
                variant="outlined"
                color="primary"
                size="large"
                style={{ marginLeft: 16 }}
                onClick={handleSubmit}
                text="Reset"
              />
            </div>
          </Grid>
        </Grid>
      </Form>
    </Paper>
  );
}
