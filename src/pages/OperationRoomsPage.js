import React, { useState, useEffect } from 'react';
import ButtonAppBar from '../components/ButtonAppBar';
import { DataGrid } from '@mui/x-data-grid';

const OperationRoomsPage = () => {
  let [opRooms, setOpRooms] = useState([]);

  useEffect(() => {
    getOpRooms();
  }, []);

  let getOpRooms = async () => {
    let response = await fetch('/oprooms/get/');
    let data = await response.json();
    console.log(data);
    setOpRooms(data);
  };
  const columns = [
    { field: 'name', headerName: 'Name' },
    { field: 'capacity', headerName: 'Capacity' },
    { field: 'date', headerName: 'Date' },
  ];
  return (
    <div>
      <ButtonAppBar />
      <div>
        <DataGrid rows={opRooms} columns={columns} autoHeight={true} />
      </div>
    </div>
  );
};

export default OperationRoomsPage;
