/** @jsxImportSource theme-ui */

import React from 'react';
import { Input, Button, Heading, Divider } from '@theme-ui/components';
import StrawList from '../../src/components/StrawList/StrawList';
import DashNav from '../../src/components/DashNav/DashNav';
import RecentlyViewed from '../../src/components/RecentlyViewed/RecentlyViewed';
import { flex } from 'styled-system';

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
            <div sx={{ height: '47vh', mb: 2 }}>
              {/* Note */}
              <Heading>Notes</Heading>
              <Divider />
            </div>
            <form
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div sx={{ mr: 1, flex: 4 }}>
                <Input sx={{}} />
              </div>
              <Button sx={{ bg: 'black', flex: 1 }}> Add</Button>
            </form>
            <RecentlyViewed />
          </div>
        </div>
      </div>
      {/* notes, description */}
    </>
  );
}

export default NestPage;
