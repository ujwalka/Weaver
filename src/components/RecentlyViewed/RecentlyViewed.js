/** @jsxImportSource theme-ui */

import { Divider, Spinner } from '@theme-ui/components';
import React from 'react';
import { mockNews } from '../../../mockNews';
import NewsList from '../NewsList/NewsList';

function RecentlyViewed() {
  const recentlySearched = null;
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
          <h2 sx={{ paddingBottom: '2rem' }}>Recently Viewed</h2>
        </div>
        <Divider />
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'scroll',
            scrollbarWidth: 'none',
            padding: '1rem',
            height: '26vh',
          }}
        >
          {recentlySearched || mockNews.articles ? (
            <NewsList
              news={recentlySearched || mockNews.articles}
              RecentViews={true}
              SearchNews={false}
            />
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </>
  );
}

export default RecentlyViewed;
