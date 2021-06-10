import { Box, Card, Heading, Image, Text } from '@theme-ui/components';
import React from 'react';

function NewsCard({ news, SearchNews, RecentViews }) {
  return (
    <>
      <Card
        sx={{
          borderRadius: '3',
          display: 'flex',
          padding: '1rem',
          borderColor: 'border',
          boxShadow: '0 8px 16px -4px rgba(0,0,0,.1)',
        }}
      >
        {SearchNews ? (
          <Image
            src={news.urlToImage}
            sx={{
              height: '100%',
              pr: '1rem',
              flex: 2,
            }}
          />
        ) : null}

        <Box sx={{ flex: 4 }}>
          <Heading as='h2' mb={2}>
            {news.title}
          </Heading>
          {SearchNews ? <Text mb={3}>{news.content}</Text> : null}
        </Box>
      </Card>
    </>
  );
}

export default NewsCard;
