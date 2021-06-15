/** @jsxImportSource theme-ui */

import React from 'react';
import StrawList from '../../src/components/StrawList/StrawList';
import DashNav from '../../src/components/DashNav/DashNav';
import NestTextArea from '../../src/components/NestTextArea/NestTextArea';
import RecentlyViewed from '../../src/components/RecentlyViewed/RecentlyViewed';
import useValidateToken from '../../hooks/useValidateToken';
import { Spinner } from 'theme-ui';

function NestPage() {
  const isAuthenticated = useValidateToken();
  return (
    <>
      {isAuthenticated ? (
        <>
          <div sx={{ bg: '#0a0a0a', color: 'white' }}>
            <DashNav strawPage={false} articlePage={false} />
            <div sx={{ display: 'flex' }}>
              <div sx={{ flex: 1.5 }}>
                <StrawList />
              </div>
              <div sx={{ flex: 1 }}>
                <div
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 2,
                  }}
                >
                  <NestTextArea />
                  <RecentlyViewed />
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

export default NestPage;
