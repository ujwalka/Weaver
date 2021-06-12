/** @jsxImportSource theme-ui */

import router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MockNewsContent from '../MockNewsContent/MockNewsContent';
import { Spinner, Heading, Image, Text } from 'theme-ui';
import { padding } from 'styled-system';
import AddToNest from '../AddToNest/AddToNest';
function NewsArticle() {
  // add to nest button
  const router = useRouter();

  // @ts-ignore
  const { currentArticle } = useSelector((state) => state.newsReducer);
  useEffect(() => {
    if (!currentArticle) router.push('/dashboard');
  }, []);
  return (
    <>
      {currentArticle ? (
        <>
          {/* title */}
          {/* image */}
          {/* content */}
          {/* link */}
          <div
            sx={{
              padding: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <a
              sx={{ textDecoration: 'none', color: 'black' }}
              href={currentArticle.url}
            >
              <Heading> {currentArticle.title}</Heading>
            </a>
            <AddToNest article={currentArticle} />
          </div>
          {currentArticle.urlToImage ? (
            <Image
              src={currentArticle.urlToImage}
              sx={{ height: '20rem', float: 'left', padding: '1rem' }}
            />
          ) : (
            <></>
          )}

          {/* truncated news article */}
          <div sx={{ pl: '1rem', pr: '1rem' }}>
            <MockNewsContent />
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default NewsArticle;
