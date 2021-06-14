import React from 'react';
import DashNav from '../../src/components/DashNav/DashNav';
import NewsArticle from '../../src/components/NewsArticle/NewsArticle';

function ArticlePage() {
  return (
    <>
      <DashNav strawPage={true} articlePage={false} />
      <NewsArticle />
    </>
  );
}

export default ArticlePage;
