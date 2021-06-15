/** @jsxImportSource theme-ui */

import React from 'react';
import useValidateToken from '../../hooks/useValidateToken';
import DashNav from '../../src/components/DashNav/DashNav';
import NewsArticle from '../../src/components/NewsArticle/NewsArticle';
import { Spinner } from 'theme-ui';
import RecentlyViewed from '../../src/components/RecentlyViewed/RecentlyViewed';

function ArticlePage() {
  const isAuthenticated = useValidateToken();
  return (
    <>
      {isAuthenticated ? (
        <>
          <div sx={{ bg: '#0a0a0a', color: 'white' }}>
            <DashNav strawPage={true} articlePage={false} />

            <NewsArticle />
            <RecentlyViewed />
          </div>
        </>
      ) : (
        <Spinner variant='styles.spinner' sx={{ ml: '50%', mt: '20%' }} />
      )}
    </>
  );
}

export default ArticlePage;
