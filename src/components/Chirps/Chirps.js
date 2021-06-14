import React, { useEffect, useState } from 'react';
import strawApi from '../../apiServices/strawApi';
import { useSelector } from 'react-redux';
import { truncate } from 'lodash';
import { Text } from 'theme-ui';
function Chirps({ strawId }) {
  const [chirps, setChirps] = useState([]);
  useEffect(() => {
    (async () => {
      // get all chirps, pick the last one
      const { notes } = await strawApi.getAllStrawNotes(strawId);
      const truncatedChirps = notes.slice(-3).map((chirp) =>
        truncate(chirp, {
          length: 130,
          separator: /,? +/,
        })
      );
      setChirps(truncatedChirps.reverse());
    })();
  }, []);
  return (
    <div>
      {chirps
        ? chirps.map((chirp) => (
            <div>
              {' '}
              <Text mb={3}>{chirp} </Text>{' '}
            </div>
          ))
        : null}
    </div>
  );
}

export default Chirps;
