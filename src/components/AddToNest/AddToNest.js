/** @jsxImportSource theme-ui */

import React from 'react';
import { Select, Box } from 'theme-ui';

function AddToNest({ article }) {
  // get all nests
  // add article test on click
  //stringify article before sending it to the backend
  //
  return (
    <>
      <Select
        sx={{ width: '15rem', overflow: 'scroll' }}
        arrow={
          <Box
            as='svg'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentcolor'
            sx={{
              ml: -28,
              alignSelf: 'center',
              pointerEvents: 'none',
            }}
          >
            <path d='M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z' />
          </Box>
        }
        defaultValue=''
      >
        <option>Default Nest</option>
        <option>Hi</option>
        <option>Beep</option>
        <option>Boop</option>
      </Select>
    </>
  );
}

export default AddToNest;
