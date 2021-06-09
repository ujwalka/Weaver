import React from 'react';
import SearchNews from '../../src/components/SearchNews/SearchNews';
import TopNews from '../../src/components/TopNews/TopNews';
import RecentlyViewed from '../../src/components/RecentlyViewed/RecentlyViewed';

function Dashboard() {
  return (
    <>
      {/* navbar */}
      {/* sort by */}
      {/* news results */}
      <SearchNews />
      {/* top news */}
      <TopNews />
      {/* recently viewed */}
      <RecentlyViewed />
      <div>Hello from Dashboard</div>
    </>
  );
}

export default Dashboard;
