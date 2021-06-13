/** @jsxImportSource theme-ui */

import React from 'react';
import StrawList from '../../src/components/StrawList/StrawList';
import DashNav from '../../src/components/DashNav/DashNav';
import NestTextArea from '../../src/components/NestTextArea/NestTextArea';
import RecentlyViewed from '../../src/components/RecentlyViewed/RecentlyViewed';

function NestPage() {
  return (
    <>
      <DashNav />
      <div sx={{ display: 'flex' }}>
        <div sx={{ flex: 1.5 }}>
          <StrawList />
        </div>
        <div sx={{ flex: 1 }}>
          {/* notesList */}
          {/* add to notes */}
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
      {/* notes, description */}
    </>
  );
}

export default NestPage;
