import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';

function OperationsDisplay({ operation }) {
  let [operations, setOperations] = useState([]);

  useEffect(() => {
    getOperations();
  }, []);

  let getOperations = async () => {
    let response = await fetch('/ops/get/');
    let data = await response.json();
    console.log(data);
    setOperations(data);
  };
  let deleteOperation = async (operation) => {
    console.log(operation.id);
    await fetch(`/ops/${operation.id}/delete/`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });

    getOperations();
  };

  const columns = [
    { field: 'doctor_name', headerName: 'Doctor' },
    { field: 'patient_id', headerName: 'Patient ID' },
    {
      field: 'department_id',
      headerName: 'Department',
      width: 120,
    },
    { field: 'date', headerName: 'Date' },
    { field: 'duration', headerName: 'Duration' },
    { field: 'emergency', headerName: 'Emergency' },

    { field: 'room_id', headerName: 'Operation Room', width: 170 },
    {
      field: 'action',
      headerName: 'Action',
      renderCell: (params) => (
        <strong>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => deleteOperation(params)}
          >
            delete
          </Button>
        </strong>
      ),
      disableClickEventBubbling: true,
    },
  ];
  return (
    <div>
      <DataGrid rows={operations} columns={columns} autoHeight={true} />
    </div>
  );
}

export default OperationsDisplay;
