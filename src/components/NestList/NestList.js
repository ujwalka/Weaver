/** @jsxImportSource theme-ui */

import React, { useState } from 'react';
import { Spinner } from '@theme-ui/components';
import { Button, Divider } from 'theme-ui';

function NestList() {
  const [description, setDescription] = useState('');
  const [nests, setNests] = useState(null);
  // fetch nests from db
  // add nests to db
  const handleSubmit = (e) => {
    e.preventDefault();
    // post nest
    // get nest list
    // update nest list
  };
  const handleChange = (e) => {
    const { description } = e.target;
    setDescription(description);
  };
  return (
    <>
      <div sx={{ ml: 3, mt: 2 }}>
        <form action='submit' onSubmit={handleSubmit}>
          <input
            type='text'
            name='description'
            id='description'
            value={description}
            onChange={handleChange}
            placeholder='Add Description'
            required
            sx={{
              height: '2.5rem',
              width: '75%',
            }}
          />
          <Button
            sx={{ bg: 'black', height: '2.5rem', ml: '.5rem' }}
            type='submit'
          >
            Create Nest
          </Button>
        </form>
      </div>
      <Divider />
      {/* list of nests */}
    </>
  );
}

export default NestList;
