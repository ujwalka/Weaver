/** @jsxImportSource theme-ui */

import React from 'react';
import SearchNews from '../../src/components/SearchNews/SearchNews';
import TopNews from '../../src/components/TopNews/TopNews';
import RecentlyViewed from '../../src/components/RecentlyViewed/RecentlyViewed';
import DashNav from '../../src/components/DashNav/DashNav';

function Dashboard() {
  return (
    <>
      {/* navbar */}
      {/* sort by */}
      {/* news results */}
      <DashNav />
      <div sx={{ display: 'flex' }}>
        <div sx={{ flex: 2 }}>
          <SearchNews />
        </div>
        {/* top news */}
        <div sx={{ flex: 1, overflow: 'scroll' }}>
          <TopNews />
        </div>
      </div>
      {/* recently viewed */}
      <RecentlyViewed />
      <div>Hello from Dashboard</div>
    </>
  );
}

export default Dashboard;
