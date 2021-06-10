/** @jsxImportSource theme-ui */

import { Divider, Spinner } from '@theme-ui/components';
import React, { useEffect, useState } from 'react';
import useFetchNews from '../../../hooks/useFetchNews';
import NewsCard from '../NewsCard/NewsCard';
import NewsList from '../NewsList/NewsList';

function TopNews() {
  const topNews = useFetchNews(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=de672c5dc9894971ba8967feb68e7431'
  );

  return (
    <>
      <div sx={{ padding: '1rem' }}>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '3.5rem',
          }}
        >
          <h2 sx={{ paddingBottom: '2rem' }}>Top News</h2>
        </div>
        <Divider />

        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'scroll',
            scrollbarWidth: 'none',
            height: '40vh',
            padding: '1rem',
          }}
        >
          {topNews ? (
            <NewsList news={topNews} />
          ) : (
            <div sx={{ justifyContent: 'space-around' }}>
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TopNews;
