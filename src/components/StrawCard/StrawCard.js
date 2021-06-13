/** @jsxImportSource theme-ui */

import React from 'react';
import { Box, Card, Heading, Image, Text, Divider } from '@theme-ui/components';

function StrawCard({ straw }) {
  return (
    <div>
      {/* strawCard with notes */}
      {/* straw article */}
      <Card
        sx={{
          display: 'flex',
          cursor: 'pointer',
          padding: '1rem',
          height: '15rem',
          boxShadow: '0 4px 8px -4px rgba(0,0,0,.1)',
        }}
      >
        <Image
          src={straw.urlToImage}
          sx={{
            height: '100%',
            pr: '1rem',
            flex: 2,
          }}
        />

        <Box sx={{ flex: 4 }}>
          <Heading as='h3' mb={2}>
            {straw.title}
          </Heading>
          <Divider />
          <Text mb={3}>Chirps here</Text>
        </Box>
      </Card>
      {/* chirps */}
    </div>
  );
}

export default StrawCard;
// strawCard with notes
