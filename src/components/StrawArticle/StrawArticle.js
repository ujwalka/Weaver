/** @jsxImportSource theme-ui */

import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MockNewsContent from '../MockNewsContent/MockNewsContent';
import { Spinner, Heading, Image, Text, Card } from 'theme-ui';

function StrawArticle() {
  // add to nest button
  const router = useRouter();

  // @ts-ignore
  const { currentStraw } = useSelector((state) => state.strawReducer);
  const { parsedStraw } = currentStraw;
  useEffect(() => {
    if (!currentStraw) router.push('/dashboard');
  }, []);
  return (
    <>
      {parsedStraw ? (
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
              }}
            >
              <a
                sx={{ textDecoration: 'none', color: 'black' }}
                href={parsedStraw.url}
              >
                <Heading> {parsedStraw.title}</Heading>
              </a>
            </div>
          </Card>
          <div
            sx={{
              overflow: 'scroll',
              height: '83vh',
              scrollbarWidth: 'none',
              '::-webkit-scrollbar': { width: 0 },
            }}
          >
            {parsedStraw.urlToImage ? (
              <Image
                src={parsedStraw.urlToImage}
                sx={{ height: '20rem', float: 'left', padding: '1rem' }}
              />
            ) : (
              <></>
            )}

            <div sx={{ pl: '1rem', pr: '1rem' }}>
              <MockNewsContent />
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default StrawArticle;
