import React from 'react';
import ButtonAppBar from '../components/ButtonAppBar';
import { Button } from '@material-ui/core';
function ErrorPage() {
  return (
    <div>
      <ButtonAppBar />
      <h3>
        No more operations can be added for today, Please postpone this
        operation for tomorrow
      </h3>
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
        >
          Back
        </Button>
      </strong>
    </div>
  );
}

export default ErrorPage;
