import React, { useEffect, useState } from 'react';
import { Card, Box, Heading, Text, Button, Divider } from 'theme-ui';
import strawApi from '../../apiServices/strawApi';
import NewsCard from '../NewsCard/NewsCard';
import { uniqWith, isEqual } from 'lodash';
import nestApi from '../../apiServices/nestApi';
import { truncate } from 'lodash';

function NestCard({ nest }) {
  const [articles, setArticles] = useState(null);
  const [lastWarble, setLastWarble] = useState('');
  console.log(articles);
  useEffect(() => {
    (async () => {
      const { articles } = await strawApi.getAllArticles(nest._id);
      const articleList = articles.map(({ newsArticle }) =>
        JSON.parse(newsArticle)
      );
      const articlesUniq = uniqWith(articleList, isEqual);
      setArticles(articlesUniq.reverse().slice(-3));

      const { notes } = await nestApi.getAllNestNotes(nest._id);
      const lastCompleteWarble = notes.slice(-1);
      setLastWarble(
        truncate(lastCompleteWarble, {
          length: 110,
          separator: /,? +/,
        })
      );
    })();
  }, []);

  return (
    <div>
      <>
        <Card
          sx={{
            borderRadius: '3',
            padding: '1rem',
            boxShadow: '4px 4px 4px -4px rgba(0,0,0,1)',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
          }}
        >
          <Card
            sx={{
              display: 'flex',
            }}
          >
            {lastWarble ? (
              <Text>{lastWarble}</Text>
            ) : (
              <Text>No Warbles on this Nest</Text>
            )}
          </Card>
          <div>
            <Divider />
            {articles && articles.length ? (
              articles.map((article) => <NewsCard news={article} />)
            ) : (
              <Text sx={{ mr: 2 }}>Nest Empty</Text>
            )}
          </div>
        </Card>
      </>
      {/* notes, articles */}
    </div>
  );
}

export default NestCard;
// strawlist
