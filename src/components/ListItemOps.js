import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';

const ListItemOps = ({ operation, onGetOperations }) => {
  let navigate = useNavigate();

  let deleteOperation = async () => {
    await fetch(`/ops/${operation.id}/delete/`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
    onGetOperations();
    navigate('/');
  };

  return (
    <div>
      <div>
        <Link to={`ops/${operation.id}`}>{operation.id}</Link>
      </div>
      <div>
        <p>{operation.date}</p>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={deleteOperation}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ListItemOps;
