import { Box } from '@material-ui/core';
import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

function CenteredBox({ children }: Props) {
  return (
    <Box
      display="flex"
      flexGrow={1}
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
}

export default CenteredBox;
