/** @jsxImportSource theme-ui */

import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import addToCurrentArticle from '../../../redux/actionCreators/addToCurrentArticle';
import NewsCard from '../NewsCard/NewsCard';
import AddToNest from '../AddToNest/AddToNest';
import { Card, Flex } from 'theme-ui';
import addToRecentlyViewed from '../../../redux/actionCreators/addToRecentlyViewed';

function NewsList({ news, RecentViews, SearchNews }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const router = useRouter();
  const handleClick = (article) => {
    dispatch(addToCurrentArticle(article));
    dispatch(addToRecentlyViewed(article));
    // add to recent news
    // add to nest button
    router.push('/article');
  };
  return (
    <>
      <div sx={{ display: 'flex', flexDirection: 'column' }}>
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
                <div
                  sx={{
                    mb: '.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div> </div>
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
    </>
  );
}

export default NewsList;
