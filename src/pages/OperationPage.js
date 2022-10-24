import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function OperationPage({ history }) {
  let { id } = useParams();
  let [operation, setOperation] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getOperation();
  }, [id]);

  let getOperation = async () => {
    if (id === 'new') return;
    let response = await fetch(`/ops/${id}/`);
    let data = await response.json();
    setOperation(data);
  };

  /*
   */
  let deleteOperation = async () => {
    fetch(`/ops/${id}/delete/`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/jason',
      },
    });
    navigate('/');
  };

  console.log(operation);
  return (
    <div>
      <div>{operation.date}</div>
      <div>{id}</div>
      <button
        onClick={() => {
          deleteOperation();
          window.location.reload();
        }}
      >
        Delete .....
      </button>
    </div>
  );
}

export default OperationPage;
