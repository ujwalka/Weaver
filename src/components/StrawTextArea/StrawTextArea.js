/** @jsxImportSource theme-ui */

import React from 'react';
import { Input, Button, Heading, Divider } from '@theme-ui/components';
import { useSelector } from 'react-redux';

function NestTextArea() {
  // @ts-ignore
  const { currentNestId } = useSelector((state) => state.nestReducer);

  // save from text area into the nest notes
  return (
    <>
      <div sx={{ height: '47vh', mb: 2 }}>
        {/* Note */}
        <div>
          <div
            sx={{
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Heading> Chirps</Heading>
            <Divider />
          </div>
        </div>
      </div>
      <form
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div sx={{ mr: 1, flex: 4 }}>
          <Input sx={{}} />
        </div>
        <Button sx={{ bg: 'black', flex: 1 }}> Chirp</Button>
      </form>
    </>
  );
}

export default NestTextArea;
