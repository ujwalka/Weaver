import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from 'theme-ui';

function NewsArticle() {
  // @ts-ignore
  const { currentArticle } = useSelector((state) => state.newsReducer);
  return (
    <>
      {currentArticle ? (
        <div className=''>{currentArticle.title}</div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default NewsArticle;
