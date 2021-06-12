/** @jsxImportSource theme-ui */

import router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MockNewsContent from '../MockNewsContent/MockNewsContent';
import { Spinner, Heading, Image, Text, Card } from 'theme-ui';
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
          <Card
            sx={{
              boxShadow: '0 4px 4px -4px rgba(0,0,0,.5)',
            }}
          >
            <div
              sx={{
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
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
          </Card>
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
