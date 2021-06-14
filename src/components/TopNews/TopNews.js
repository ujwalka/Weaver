/** @jsxImportSource theme-ui */

import { Divider, Spinner } from '@theme-ui/components';
import React, { useEffect, useState } from 'react';
import useFetchNews from '../../../hooks/useFetchNews';
import NewsCard from '../NewsCard/NewsCard';
import NewsList from '../NewsList/NewsList';
import { mockNews } from '../../../mockNews';
import { useSelector } from 'react-redux';

function TopNews() {
  const [componentTopNews, setComponentTopNews] = useState(null);
  const { topNews } = useSelector((state) => state.newsReducer);

  const url =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=de672c5dc9894971ba8967feb68e7431';
  const fetchNews = async () => {
    if (topNews.length) {
      setComponentTopNews(topNews);
    } else {
      const res = await fetch(url);
      const newsResults = await res.json();
      setComponentTopNews(newsResults.articles);
    }
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
            '::-webkit-scrollbar': { width: 0 },

            height: '45vh',
            padding: '1rem',
          }}
        >
          {componentTopNews ? (
            <NewsList
              news={componentTopNews}
              onBranch={false}
              SearchNews={false}
            />
          ) : (
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Spinner
                variant='styles.whiteSpinner'
                sx={{ ml: 250, mt: 150 }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TopNews;
