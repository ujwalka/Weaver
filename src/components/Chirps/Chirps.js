import React, { useEffect, useState } from 'react';
import strawApi from '../../apiServices/strawApi';
import { truncate } from 'lodash';
import { Text, Divider } from 'theme-ui';
function Chirps({ strawId }) {
  const [chirps, setChirps] = useState([]);
  useEffect(() => {
    (async () => {
      // get all chirps, pick the last one
      const { notes } = await strawApi.getAllStrawNotes(strawId);
      const truncatedChirps = notes.slice(-4).map((chirp) =>
        truncate(chirp, {
          length: 70,
          separator: /,? +/,
        })
      );
      setChirps(truncatedChirps.reverse());
    })();
  }, []);
  return (
    <div>
      {chirps && chirps.length ? (
        chirps.map((chirp) => (
          <div>
            {' '}
            <Text as='h4' mb={2}>
              {chirp}{' '}
            </Text>
          </div>
        ))
      ) : (
        <Text mb={3}> No Chirps </Text>
      )}
    </div>
  );
}

export default Chirps;
