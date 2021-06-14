/** @jsxImportSource theme-ui */

import React from 'react';
import NestList from '../../src/components/NestList/NestList';
import SearchNews from '../../src/components/SearchNews/SearchNews';
import DashNav from '../../src/components/DashNav/DashNav';
import RecentlyViewed from '../../src/components/RecentlyViewed/RecentlyViewed';
import { Heading } from 'theme-ui';

function BranchPage() {
  return (
    <>
      <DashNav strawPage={false} articlePage={false} />
      <div sx={{ display: 'flex' }}>
        <div sx={{ flex: 2 }}>
          <NestList />
        </div>
        <div sx={{ flex: 1 }}>
          <SearchNews onBranch={true} />
        </div>
      </div>
    </>
  );
}

export default BranchPage;
