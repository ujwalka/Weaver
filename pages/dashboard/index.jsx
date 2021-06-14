/** @jsxImportSource theme-ui */

import React from 'react';
import { Spinner } from '@theme-ui/components';
import SearchNews from '../../src/components/SearchNews/SearchNews';
import TopNews from '../../src/components/TopNews/TopNews';
import RecentlyViewed from '../../src/components/RecentlyViewed/RecentlyViewed';
import DashNav from '../../src/components/DashNav/DashNav';
import useValidateToken from '../../hooks/useValidateToken';

function Dashboard() {
  const isAuthenticated = useValidateToken();

  return (
    <>
      {isAuthenticated ? (
        <>
          <DashNav />
          <div sx={{ display: 'flex', bg: '#0a0a0a', color: 'white' }}>
            <div sx={{ flex: 1.5 }}>
              <SearchNews onBranch={false} />
            </div>
            <div sx={{ flex: 1 }}>
              <div sx={{ display: 'flex', flexDirection: 'column' }}>
                <TopNews />
                <RecentlyViewed />
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

export default Dashboard;
