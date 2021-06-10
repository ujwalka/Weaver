import React, { useEffect, useState } from 'react';
import useFetchNews from '../../../hooks/useFetchNews';
import NewsCard from '../NewsCard/NewsCard';

function TopNews() {
  const topNews = useFetchNews(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=de672c5dc9894971ba8967feb68e7431'
  );

  return (
    <>
      {topNews ? (
        <div>
          {topNews.map((news) => (
            <NewsCard news={news} />
          ))}
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}

export default TopNews;
