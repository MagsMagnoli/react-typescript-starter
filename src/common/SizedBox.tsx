import { Box } from '@material-ui/core';
import React from 'react';

interface Props {
  height?: number;
  width?: number;
}

function SizedBox({ height, width }: Props) {
  return (
    <Box
      display={height ? 'block' : 'inline-block'}
      width={width}
      height={height}
    />
  );
}

export default SizedBox;
