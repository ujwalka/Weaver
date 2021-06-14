/** @jsxImportSource theme-ui */

import React from 'react';
import DashNav from '../../src/components/DashNav/DashNav';
import StrawArticle from '../../src/components/StrawArticle/StrawArticle';
import StrawTextArea from '../../src/components/StrawTextArea/StrawTextArea';
import RelatedArticles from '../../src/components/RelatedArticles/RelatedArticles';

function StrawPage() {
  return (
    <>
      <DashNav strawPage={true} articlePage={false} />
      <div sx={{ display: 'flex' }}>
        <div sx={{ flex: 1.5 }}>
          <StrawArticle />
        </div>
        <div sx={{ flex: 1 }}>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: 2,
            }}
          >
            <StrawTextArea />
            <RelatedArticles />
          </div>
        </div>
      </div>
    </>
  );
}

export default StrawPage;
