import React, { useState, useEffect } from 'react';
import ButtonAppBar from '../components/ButtonAppBar';
import { DataGrid } from '@mui/x-data-grid';
const DepartmentsPage = () => {
  let [departments, setDepartments] = useState([]);

  useEffect(() => {
    getDepartments();
  }, []);

  let getDepartments = async () => {
    let response = await fetch('/deps/get/');
    let data = await response.json();
    console.log(data);
    setDepartments(data);
  };
  console.log(departments);
  const columns = [
    { field: 'name', headerName: 'Name' },
    { field: 'capacity', headerName: 'Capacity' },
    { field: 'date', headerName: 'Date' },
  ];
  return (
    <div>
      <div>
        <ButtonAppBar />
      </div>

      <div>
        <DataGrid rows={departments} columns={columns} autoHeight={true} />
      </div>
    </div>
  );
};

export default DepartmentsPage;
