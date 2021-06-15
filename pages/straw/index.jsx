/** @jsxImportSource theme-ui */

import React from 'react';
import DashNav from '../../src/components/DashNav/DashNav';
import StrawArticle from '../../src/components/StrawArticle/StrawArticle';
import StrawTextArea from '../../src/components/StrawTextArea/StrawTextArea';
import RelatedArticles from '../../src/components/RelatedArticles/RelatedArticles';
import useValidateToken from '../../hooks/useValidateToken';
import { Spinner } from 'theme-ui';

function StrawPage() {
  const isAuthenticated = useValidateToken();
  return (
    <>
      {isAuthenticated ? (
        <>
          <div sx={{ bg: '#0a0a0a', color: 'white' }}>
            <DashNav strawPage={true} articlePage={false} />
            <div sx={{ display: 'flex' }}>
              <div sx={{ flex: 1.5 }}>
                <StrawArticle />
              </div>
              <div sx={{ flex: 1 }}>
                <div
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 2,
                  }}
                >
                  <StrawTextArea />
                  <RelatedArticles />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Spinner variant='styles.spinner' sx={{ ml: '50%', mt: '20%' }} />
      )}
    </>
  );
}

export default StrawPage;
