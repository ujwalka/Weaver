/** @jsxImportSource theme-ui */

import React, { useEffect, useState } from 'react';
import { Input, Button, Heading, Divider } from '@theme-ui/components';
import { useSelector } from 'react-redux';
import nestApi from '../../apiServices/nestApi';
import { lowerFirst } from 'lodash';

function NestTextArea() {
  const [warble, setWarble] = useState('');
  const [warbles, setWarbles] = useState([]);
  // @ts-ignore
  const { currentNestId } = useSelector((state) => state.nestReducer);
  useEffect(() => {
    (async () => {
      //  get warbles, set warbles
      console.log('id from effect', currentNestId);
      const { notes } = await nestApi.getAllNestNotes(currentNestId);
      setWarbles(notes.reverse());
    })();
  }, []);
  const handleChange = (e) => {
    setWarble(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(currentNestId, warble);
    await nestApi.postNestNote(currentNestId, warble);
    console.log(currentNestId, warble);
    const { notes } = await nestApi.getAllNestNotes(currentNestId);
    setWarbles(notes.reverse());
  };

  // save from text area into the nest notes
  return (
    <>
      <div
        sx={{
          padding: '.5rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Heading>Warbles</Heading>
        <Divider />
      </div>

      <div
        sx={{
          height: '39vh',
          mb: 2,
          padding: '0.5rem',
          overflow: 'scroll',
          overflowAnchor: 'none',
          scrollbarWidth: 'none',
          '::-webkit-scrollbar': { width: 0 },
        }}
      >
        {/* Note */}
        {warbles ? warbles.map((warble) => <p>{warble}</p>) : <p>No warbles</p>}
      </div>
      <form
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onSubmit={handleSubmit}
      >
        <div sx={{ mr: 1, flex: 4 }}>
          <Input
            type='text'
            name='warble'
            id='warble'
            value={warble}
            onChange={handleChange}
            required
            sx={{}}
          />
        </div>
        <Button
          sx={{ bg: 'black', height: '2.5rem', flex: 1, cursor: 'pointer' }}
          type='submit'
        >
          Warble
        </Button>
      </form>
    </>
  );
}

export default NestTextArea;
