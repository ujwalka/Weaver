import React, { useEffect, useState } from 'react';
import { Card, Box, Heading, Text, Button, Divider } from 'theme-ui';
import strawApi from '../../apiServices/strawApi';
import NewsCard from '../NewsCard/NewsCard';
import { uniqWith, isEqual } from 'lodash';

function NestCard({ nest }) {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    (async () => {
      const { articles } = await strawApi.getAllArticles(nest._id);

      const articleList = articles.map(({ newsArticle }) =>
        JSON.parse(newsArticle)
      );
      const articlesUniq = uniqWith(articleList, isEqual);
      setArticles(articlesUniq.slice(-3));
    })();
  }, [articles]);

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
            <Heading as='h3' sx={{ mb: 3 }}>
              Recently added
              <Divider />
            </Heading>
            {articles
              ? articles.map((article) => <NewsCard news={article} />)
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
