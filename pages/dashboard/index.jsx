/** @jsxImportSource theme-ui */

import React from 'react';
import SearchNews from '../../src/components/SearchNews/SearchNews';
import TopNews from '../../src/components/TopNews/TopNews';
import RecentlyViewed from '../../src/components/RecentlyViewed/RecentlyViewed';
import DashNav from '../../src/components/DashNav/DashNav';
import { Divider } from '@theme-ui/components';

function Dashboard() {
  return (
    <>
      {/* sort by */}
      <DashNav />
      <div sx={{ display: 'flex', flexDirection: 'column' }}>
        <div sx={{ display: 'flex' }}>
          <div sx={{ flex: 2 }}>
            <SearchNews />
          </div>
          <div sx={{ flex: 1 }}>
            <TopNews />
          </div>
        </div>
        <div>
          <RecentlyViewed />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
