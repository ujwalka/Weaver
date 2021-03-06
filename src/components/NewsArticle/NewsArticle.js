/** @jsxImportSource theme-ui */

import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MockNewsContent from '../MockNewsContent/MockNewsContent';
import { Spinner, Heading, Image, Text, Card } from 'theme-ui';
import { padding } from 'styled-system';
import AddToNest from '../AddToNest/AddToNest';
function NewsArticle() {
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
                sx={{ textDecoration: 'none', color: 'white' }}
                href={currentArticle.url}
              >
                <Heading> {currentArticle.title}</Heading>
              </a>
              <AddToNest article={currentArticle} />
            </div>
          </Card>
          <div
            sx={{
              height: '52.6vh',
              overflow: 'scroll',
              scrollbarWidth: 'none',
              '::-webkit-scrollbar': { width: 0 },
            }}
          >
            {currentArticle.urlToImage ? (
              <Image
                src={currentArticle.urlToImage}
                sx={{ height: '20rem', float: 'left', padding: '1rem' }}
              />
            ) : null}

            <div sx={{ pl: '1rem', pr: '1rem' }}>
              <MockNewsContent />
            </div>
          </div>
        </>
      ) : (
        <Spinner variant='styles.spinner' />
      )}
    </>
  );
}

export default NewsArticle;
