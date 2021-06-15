/** @jsxImportSource theme-ui */

import React, { useEffect, useState } from 'react';
import { Input, Button, Heading, Divider } from '@theme-ui/components';
import { useSelector } from 'react-redux';
import strawApi from '../../apiServices/strawApi';
import { motion } from 'framer-motion';
function StrawTextArea() {
  // @ts-ignore
  const [chirp, setChirp] = useState('');
  const [chirps, setChirps] = useState([]);
  // @ts-ignore
  const { currentStraw } = useSelector((state) => state.strawReducer);
  useEffect(() => {
    (async () => {
      //  get chirps, set chirps
      const { notes } = await strawApi.getAllStrawNotes(currentStraw._id);
      setChirps(notes.reverse());
    })();
  }, []);
  const handleChange = (e) => {
    setChirp(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await strawApi.postStrawNote(currentStraw._id, chirp);
    const { notes } = await strawApi.getAllStrawNotes(currentStraw._id);
    setChirps(notes.reverse());
  };
  return (
    <>
      <div
        sx={{
          padding: '.5rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Heading>Chirps</Heading>
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
        {chirps ? (
          chirps.map((chirp, index) => <p key={index}>{chirp}</p>)
        ) : (
          <p>No chirps</p>
        )}
      </div>
      <form
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onSubmit={handleSubmit}
      >
        <div sx={{ mr: 2, flex: 4 }}>
          <Input
            type='text'
            name='chirp'
            id='chirp'
            value={chirp}
            onChange={handleChange}
            required
            sx={{}}
          />
        </div>

        <Button
          sx={{ bg: 'black', height: '2.5rem', flex: 1, cursor: 'pointer' }}
          type='submit'
        >
          <motion.div
            whileHover={{
              scale: 0.94,
              transition: {
                duration: 0.1,
              },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <b>Chirp</b>
          </motion.div>
        </Button>
      </form>
    </>
  );
}

export default StrawTextArea;
