/** @jsxImportSource theme-ui */

import { Divider, Spinner } from '@theme-ui/components';
import React from 'react';
import { mockNews } from '../../../mockNews';
import NewsList from '../NewsList/NewsList';

function RecentlyViewed() {
  const recentlySearched = null;
  return (
    <>
      <h4>Recently Searched</h4>
      <Divider />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'scroll',
          scrollbarWidth: 'none',
          padding: '1rem',
        }}
      >
        {recentlySearched || mockNews.articles ? (
          <NewsList news={recentlySearched || mockNews.articles} />
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}

export default RecentlyViewed;
