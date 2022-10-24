import * as React from 'react';

import ButtonAppBar from './components/ButtonAppBar';
import OperationsDisplay from './components/OperationsDisplay';
import CreateButton from './components/CreateButton';
export default function FormPropsTextFields() {
  return (
    <div>
      <ButtonAppBar />
      <CreateButton />
      <OperationsDisplay />
    </div>
  );
}
