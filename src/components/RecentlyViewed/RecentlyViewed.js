/** @jsxImportSource theme-ui */

import { Divider, Spinner } from '@theme-ui/components';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { mockNews } from '../../../mockNews';
import NewsList from '../NewsList/NewsList';
import { uniqWith, isEqual } from 'lodash';
import { Text } from 'theme-ui';

// _.uniqWith(objects, _.isEqual);

function RecentlyViewed() {
  const [recent, setRecent] = useState(null);
  const { recentlyViewed } = useSelector((state) => state.newsReducer);
  useEffect(() => {
    const recentlyViewedUniq = uniqWith(recentlyViewed, isEqual);
    setRecent(recentlyViewedUniq);
  }, []);
  return (
    <>
      <div sx={{ padding: '1rem', pt: 0, mt: 0 }}>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '3rem',
          }}
        >
          <h2 sx={{ paddingBottom: '2rem' }}>Recently Viewed</h2>
        </div>
        <Divider />
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'scroll',
            scrollbarWidth: 'none',
            '::-webkit-scrollbar': { width: 0 },

            padding: '1rem',
            height: '26vh',
          }}
        >
          {recent ? (
            <NewsList news={recent} RecentViews={true} SearchNews={false} />
          ) : (
            <Text> No Recent articles</Text>
          )}
        </div>
      </div>
    </>
  );
}

export default RecentlyViewed;
