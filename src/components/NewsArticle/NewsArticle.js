import React from 'react';
import { useSelector } from 'react-redux';

function NewsArticle() {
  // @ts-ignore
  const { currentArticle } = useSelector((state) => state.newsReducer);
  return (
    <>
      <div className=''>{currentArticle.title}</div>
    </>
  );
}

export default NewsArticle;
