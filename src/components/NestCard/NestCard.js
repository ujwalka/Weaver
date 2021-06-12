import React, { useEffect, useState } from 'react';
import { Card, Box, Heading, Text } from 'theme-ui';
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
            display: 'flex',
          }}
        >
          <Box sx={{ flex: 4 }}>
            <Heading as='h3' mb={2}>
              {nest.description}
            </Heading>
          </Box>

          {nest.notes ? <Text> {nest.notes}</Text> : null}
          {articles
            ? articles.map((article) => <p>{article}</p>})
            : null}
        </Card>
      </>
      {/* notes, articles */}
    </div>
  );
}

export default NestCard;
// strawlist
