/** @jsxImportSource theme-ui */

import React from 'react';
import Register from '../../src/components/Register/Register';
import { Label, Input, Button, Text, Card } from 'theme-ui';

function Page() {
  return (
    <>
      <div
        sx={{
          width: '100vw',
          height: '100vh',
          bg: 'black',
          color: 'white',
        }}
      >
        <Register />
      </div>
    </>
  );
}

export default Page;
