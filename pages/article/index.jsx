import React from 'react';
import NewsArticle from '../../src/components/NewsArticle/NewsArticle';

function ArticlePage() {
  return (
    <>
      {/* nav to dashboard */}
      <NewsArticle />
      <div className=''>hello from article Page</div>
    </>
  );
}

export default ArticlePage;
