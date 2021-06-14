/** @jsxImportSource theme-ui */

import React from 'react';
import NestList from '../../src/components/NestList/NestList';
import SearchNews from '../../src/components/SearchNews/SearchNews';
import DashNav from '../../src/components/DashNav/DashNav';
import RecentlyViewed from '../../src/components/RecentlyViewed/RecentlyViewed';
import { Spinner } from 'theme-ui';
import useValidateToken from '../../hooks/useValidateToken';

function BranchPage() {
  const isAuthenticated = useValidateToken();
  return (
    <>
      {isAuthenticated ? (
        <>
          <DashNav strawPage={false} articlePage={false} />
          <div sx={{ display: 'flex' }}>
            <div sx={{ flex: 1.3 }}>
              <NestList />
              <RecentlyViewed />
            </div>
            <div sx={{ flex: 1 }}>
              <SearchNews onBranch={true} />
            </div>
          </div>
        </>
      ) : (
        <Spinner variant='styles.spinner' sx={{ ml: '50%', mt: '20%' }} />
      )}
    </>
  );
}

export default BranchPage;
