/** @jsxImportSource theme-ui */

import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import addToCurrentArticle from '../../../redux/actionCreators/addToCurrentArticle';
import NewsCard from '../NewsCard/NewsCard';

function NewsList({ news, RecentViews, SearchNews }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = (article) => {
    dispatch(addToCurrentArticle(article));
    router.push('/article');
  };
  return (
    <div>
      <div>
        {news.map((article) => (
          <div sx={{ pointer: 'cursor' }} onClick={() => handleClick(article)}>
            <NewsCard
              key={article.url}
              news={article}
              RecentViews={RecentViews}
              SearchNews={SearchNews}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsList;
