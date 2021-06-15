/** @jsxImportSource theme-ui */

import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import addToCurrentArticle from '../../../redux/actionCreators/addToCurrentArticle';
import NewsCard from '../NewsCard/NewsCard';
import AddToNest from '../AddToNest/AddToNest';
import { Card, Divider, Flex, Heading } from 'theme-ui';
import addToRecentlyViewed from '../../../redux/actionCreators/addToRecentlyViewed';
import { motion } from 'framer-motion';
function NewsList({ news, SearchNews, onBranch }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = (article) => {
    dispatch(addToCurrentArticle(article));
    dispatch(addToRecentlyViewed(article));
    router.push('/article');
  };
  return (
    <>
      <div sx={{ display: 'flex', flexDirection: 'column' }}>
        {news.map((article) => (
          <>
            <Card
              sx={{
                borderRadius: '3',
                padding: '.5rem',
                borderColor: 'border',
                boxShadow: '0 4px 4px -4px rgba(255,255,255,.1)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {SearchNews && !onBranch ? (
                <div
                  sx={{
                    mb: '.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div sx={{ flex: 4 }}>
                    <Heading sx={{}}> {article.title} </Heading>
                  </div>
                  <div sx={{ flex: 1 }}>
                    <AddToNest article={article} />
                  </div>
                </div>
              ) : (
                <></>
              )}
              <motion.div
                key={article.url}
                whileHover={{
                  scale: [1, 0.9, 0.9],
                  rotate: [0, 0.3, -0.3, 0],
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div
                  sx={{ pointer: 'cursor' }}
                  onClick={() => handleClick(article)}
                >
                  <NewsCard
                    key={article.url}
                    news={article}
                    SearchNews={SearchNews}
                    onBranch={onBranch}
                  />
                </div>
              </motion.div>
            </Card>
          </>
        ))}
      </div>
    </>
  );
}

export default NewsList;
