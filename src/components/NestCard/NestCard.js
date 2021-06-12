import React, { useEffect, useState } from 'react';
import { Card, Box, Heading, Text, Button, Divider } from 'theme-ui';
import NewsCard from '../NewsCard/NewsCard';
function NestCard({ nest }) {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    if (nest && nest.articles) {
      // const articleList = nest.articles.map((article) => JSON.parse(article));
      // get articles
      // display last 3
      console.log(nest.articles);
      // setArticles(articleList);
    }
  }, [articles]);
  console.log(nest);
  return (
    <div>
      <>
        <Card
          sx={{
            borderRadius: '3',
            padding: '1rem',
            borderColor: 'border',
            boxShadow: '0 8px 16px -4px rgba(0,0,0,.1)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Card
            sx={{
              display: 'flex',
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Heading as='h2' mb={2}>
                {nest.description}
              </Heading>
            </Box>
            {nest.notes ? (
              <Text sx={{ mr: 2 }}> Notes exist, display top first note</Text>
            ) : null}
          </Card>
          <Divider />
          <div>
            <Heading as='h3'> Recently added</Heading>
            {articles && articles.length
              ? articles.map((article) => <p>{article}</p>)
              : null}
          </div>
        </Card>
      </>
      {/* notes, articles */}
    </div>
  );
}

export default NestCard;
// strawlist
