import { Box } from '@material-ui/core';
import React, { ReactNode } from 'react';

interface PaddingProps {
  children?: ReactNode;
  padding: number;
}

function Padding({ children, padding }: PaddingProps) {
  return <Box padding={`${padding}rem`}>{children}</Box>;
}

export default Padding;
