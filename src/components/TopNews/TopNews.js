/** @jsxImportSource theme-ui */

import { Divider, Spinner } from '@theme-ui/components';
import React, { useEffect, useState } from 'react';
import useFetchNews from '../../../hooks/useFetchNews';
import NewsCard from '../NewsCard/NewsCard';
import NewsList from '../NewsList/NewsList';
import { mockNews } from '../../../mockNews';

function TopNews() {
  // const topNews = useFetchNews(
  //   'https://newsapi.org/v2/top-headlines?country=us&apiKey=de672c5dc9894971ba8967feb68e7431'
  // );
  return (
    <>
      <div sx={{ padding: '1rem', pt: 0, mt: 0 }}>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '3rem',
          }}
        >
          <h2>Top News</h2>
        </div>
        <Divider />

        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'scroll',
            scrollbarWidth: 'none',
            height: '45vh',
            padding: '1rem',
          }}
        >
          {mockNews.articles ? (
            <NewsList
              news={mockNews.articles || topNews}
              RecentViews={false}
              SearchNews={false}
            />
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
