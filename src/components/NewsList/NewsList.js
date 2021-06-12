/** @jsxImportSource theme-ui */

import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import addToCurrentArticle from '../../../redux/actionCreators/addToCurrentArticle';
import NewsCard from '../NewsCard/NewsCard';
import AddToNest from '../AddToNest/AddToNest';
import { Card } from 'theme-ui';

function NewsList({ news, RecentViews, SearchNews }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = (article) => {
    dispatch(addToCurrentArticle(article));
    // add to recent news
    // add to nest button
    router.push('/article');
  };
  return (
    <div>
      <div>
        {news.map((article) => (
          <>
            <Card
              sx={{
                borderRadius: '3',
                padding: '1rem',
                borderColor: 'border',
                boxShadow: '0 4px 4px -4px rgba(255,255,255,.1)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {SearchNews ? (
                <div sx={{ mb: '.5rem', position: 'relative', left: '35rem' }}>
                  <AddToNest article={article} />
                </div>
              ) : (
                <></>
              )}

              <div
                sx={{ pointer: 'cursor' }}
                onClick={() => handleClick(article)}
              >
                <NewsCard
                  key={article.url}
                  news={article}
                  RecentViews={RecentViews}
                  SearchNews={SearchNews}
                />
              </div>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
}

export default NewsList;
