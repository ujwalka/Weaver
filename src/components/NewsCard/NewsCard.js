import { Box, Card, Heading, Image, Text } from '@theme-ui/components';
import React from 'react';
import AddToNest from '../AddToNest/AddToNest';

function NewsCard({ news, SearchNews, onBranch }) {
  return (
    <>
      <Card
        sx={{
          display: 'flex',
          cursor: 'pointer',
        }}
      >
        {SearchNews && !onBranch ? (
          <Image
            src={news.urlToImage}
            sx={{
              height: '100%',
              pr: '.5rem',
              flex: 2,
            }}
          />
        ) : null}

        <Box sx={{ flex: 4 }}>
          <Heading as='h3' mb={2}>
            {news.title}
          </Heading>
          {SearchNews ? <Text mb={3}>{news.description}</Text> : null}
        </Box>
      </Card>
    </>
  );
}

export default NewsCard;
