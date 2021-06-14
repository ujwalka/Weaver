/** @jsxImportSource theme-ui */

import React from 'react';
import { Box, Card, Heading, Image, Divider } from '@theme-ui/components';

import Chirps from '../Chirps/Chirps';
function StrawCard({ straw }) {
  const { parsedStraw } = straw;

  return (
    <div>
      <Card
        sx={{
          display: 'flex',
          cursor: 'pointer',
          padding: '1rem',
          height: '15rem',
          boxShadow: '0 4px 8px -4px rgba(0,0,0,.1)',
        }}
      >
        {parsedStraw.urlToImage ? (
          <Image
            src={parsedStraw.urlToImage}
            sx={{
              height: '100%',
              pr: '.5rem',
              flex: 2.1,
            }}
          />
        ) : (
          <Image
            src={parsedStraw.urlToImage}
            sx={{
              height: '100%',
              pr: '.5rem',
              flex: 2.1,
            }}
          />
        )}

        <Box sx={{ flex: 4 }}>
          <Heading as='h3' mb={2}>
            {parsedStraw.title}
          </Heading>
          <Divider />
          <Chirps strawId={straw._id} />
        </Box>
      </Card>
    </div>
  );
}

export default StrawCard;
// strawCard with notes
