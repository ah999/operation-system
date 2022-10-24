import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
export default function CreateButton() {
  const navigate = useNavigate();
  return (
    <div text-align="center">
      <strong>
        <Button
          text-align="center"
          padding="5px 15px"
          width="25%"
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => navigate('/op/new')}
        >
          Reserve
        </Button>
      </strong>
    </div>
  );
}
