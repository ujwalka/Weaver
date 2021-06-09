import React from 'react';
import NestList from '../../src/components/NestList/NestList';
import SearchNews from '../../src/components/SearchNews/SearchNews';
import RecentlyViewed from '../../src/components/RecentlyViewed/RecentlyViewed';

function BranchPage() {
  return (
    <>
      {/* navbar to dashboard*/}
      {/* nests */}
      <NestList />
      {/* quick search */}
      <SearchNews />
      {/* recent searches */}
      <RecentlyViewed />
      <div className=''>hello from branch page</div>
    </>
  );
}

export default BranchPage;
