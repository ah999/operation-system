import React from 'react';
import ButtonAppBar from '../components/ButtonAppBar';
import OperationsDisplay from '../components/OperationsDisplay';
import InputForm from '../components/InputForm';
function CreateOperation() {
  return (
    <div>
      <ButtonAppBar />
      <InputForm />
      <OperationsDisplay />
    </div>
  );
}

export default CreateOperation;
