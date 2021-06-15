/** @jsxImportSource theme-ui */

import { Divider, Spinner, Heading } from '@theme-ui/components';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { mockNews } from '../../../mockNews';
import NewsList from '../NewsList/NewsList';
import { Text } from 'theme-ui';

function RelatedArticles() {
  const [related, setRelated] = useState(null);
  const { currentStraw } = useSelector((state) => state.strawReducer);
  const { parsedStraw } = currentStraw;

  const searchString = parsedStraw.title
    .split(' ')
    .filter((str) => str.length > 0)
    .join('+');

  const url = `https://newsapi.org/v2/everything?q=${searchString}&apiKey=614105ee8fe04bf1b5a7ceaf333fc812`;
  const fetchNews = async () => {
    const res = await fetch(url);
    const newsResults = await res.json();
    setRelated(newsResults.articles);
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      <div sx={{ padding: '1rem', pt: 0, mt: 0 }}>
        <div
          sx={{
            display: 'flex',
            mt: '1rem',
            // height: '3rem',
            alignItems: 'center',
          }}
        >
          <Heading>Related</Heading>
        </div>
        <Divider />
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'scroll',
            scrollbarWidth: 'none',
            '::-webkit-scrollbar': { width: 0 },
            padding: '1rem',
            height: '26vh',
          }}
        >
          {related && related.length ? (
            <NewsList news={related} onBranch={false} SearchNews={false} />
          ) : (
            <Text as='h2'> No related articles</Text>
          )}
        </div>
      </div>
    </>
  );
}

export default RelatedArticles;
