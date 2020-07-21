import React from 'react';
import CenteredBox from 'common/CenteredBox';
import { Typography } from '@material-ui/core';

// Component to display when navigating to an invalid route
function NotFound() {
  return (
    <CenteredBox>
      <Typography variant={'h2'}>404 Not Found</Typography>
    </CenteredBox>
  );
}

export default NotFound;
