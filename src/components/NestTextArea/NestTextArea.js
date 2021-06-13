/** @jsxImportSource theme-ui */

import React from 'react';
import RecentlyViewed from '../RecentlyViewed/RecentlyViewed';
import { Input, Button, Heading, Divider } from '@theme-ui/components';
import { useSelector } from 'react-redux';

function NestTextArea() {
  // @ts-ignore
  const { currentNestId } = useSelector((state) => state.nestReducer);

  // save from text area into the nest notes
  return (
    <>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: 2,
        }}
      >
        <div sx={{ height: '47vh', mb: 2 }}>
          {/* Note */}
          <Heading>Warbles</Heading>
          <Divider />
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
          <Button sx={{ bg: 'black', flex: 1 }}> Add</Button>
        </form>
        <RecentlyViewed />
      </div>
    </>
  );
}

export default NestTextArea;
