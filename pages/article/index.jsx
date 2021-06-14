import React from 'react';
import useValidateToken from '../../hooks/useValidateToken';
import DashNav from '../../src/components/DashNav/DashNav';
import NewsArticle from '../../src/components/NewsArticle/NewsArticle';
import { Spinner } from 'theme-ui';

function ArticlePage() {
  const isAuthenticated = useValidateToken();
  return (
    <>
      {isAuthenticated ? (
        <>
          <DashNav strawPage={true} articlePage={false} />
          <NewsArticle />
        </>
      ) : (
        <Spinner variant='styles.spinner' sx={{ ml: '50%', mt: '20%' }} />
      )}
    </>
  );
}

export default ArticlePage;
