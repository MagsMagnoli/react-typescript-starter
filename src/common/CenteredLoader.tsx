import { CircularProgress } from '@material-ui/core';
import React from 'react';
import CenteredBox from './CenteredBox';

function CenteredLoader() {
  return (
    <CenteredBox>
      <CircularProgress />
    </CenteredBox>
  );
}

export default CenteredLoader;
