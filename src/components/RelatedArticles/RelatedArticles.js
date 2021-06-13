/** @jsxImportSource theme-ui */

import { Divider, Spinner, Heading } from '@theme-ui/components';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { mockNews } from '../../../mockNews';
import NewsList from '../NewsList/NewsList';
import { uniqWith, isEqual } from 'lodash';
import { Text } from 'theme-ui';

// _.uniqWith(objects, _.isEqual);

function relatedlyViewed() {
  // const [related, setrelated] = useState(null);
  // const { relatedlyViewed } = useSelector((state) => state.newsReducer);
  // useEffect(() => {
  //   const relatedlyViewedUniq = uniqWith(relatedlyViewed, isEqual);
  //   setrelated(relatedlyViewedUniq);
  // }, []);
  const related = null;
  //get related
  // display related
  return (
    <>
      <div sx={{ padding: '1rem', pt: 0, mt: 0 }}>
        <div
          sx={{
            display: 'flex',
            mt: '1rem',
            // height: '3rem',
            alignItems: 'center',
          }}
        >
          <Heading> Related</Heading>
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
          {related ? (
            <NewsList news={related} onBranch={false} SearchNews={false} />
          ) : (
            <Text> No related articles</Text>
          )}
        </div>
      </div>
    </>
  );
}

export default relatedlyViewed;
