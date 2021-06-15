/** @jsxImportSource theme-ui */

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import strawApi from '../../apiServices/strawApi';
import { uniqWith } from 'lodash';
import StrawCard from '../StrawCard/StrawCard';
import addToCurrentStraw from '../../../redux/actionCreators/addToCurrentStraw';
import DeleteButton from '../DeleteButton/DeleteButton';
import { Text, Heading } from 'theme-ui';
import { motion } from 'framer-motion';
function StrawList() {
  const [straws, setStraws] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  // @ts-ignore
  const { currentNestId } = useSelector((state) => state.nestReducer);

  const setAllArticles = async () => {
    const { articles } = await strawApi.getAllArticles(currentNestId);

    const articleList = articles.map((article) => {
      return {
        _id: article._id,
        parsedStraw: JSON.parse(article.newsArticle),
      };
    });
    const articlesUniq = uniqWith(
      articleList,
      (object, other) => object.parsedStraw === other.parsedStraw
    );
    setStraws(articlesUniq.reverse());
  };

  useEffect(() => {
    setAllArticles();
  }, []);

  const handleDeleteClick = async (straw) => {
    await strawApi.deleteArticle(currentNestId, straw._id);
    setAllArticles();
  };
  const handleClick = (straw) => {
    dispatch(addToCurrentStraw(straw));
    router.push('/straw');
  };

  return (
    <div
      sx={{
        overflow: 'scroll',
        padding: '1rem',
        height: '92vh',
        '::-webkit-scrollbar': { width: 0 },
        scrollbarWidth: 'none',
      }}
    >
      {straws && straws.length ? (
        straws.map((straw) => (
          <>
            {straw._id ? (
              <div
                key={straw._id}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  bg: 'black',
                  color: 'white',
                  borderRadius: 3,
                  ml: 2,
                }}
              >
                <div>
                  <Heading as='h3' sx={{ padding: 2 }}>
                    {straw.parsedStraw.title}
                  </Heading>
                </div>

                <DeleteButton
                  handleClick={handleDeleteClick}
                  component={straw}
                />
              </div>
            ) : null}
            <motion.div
              key={straw._id}
              whileHover={{
                scale: 0.99,
                transition: {
                  duration: 0.1,
                },
              }}
              whileTap={{
                scale: 0.96,
              }}
              sx={{ pointer: 'cursor' }}
              onClick={() => handleClick(straw)}
            >
              <StrawCard straw={straw} />
            </motion.div>
          </>
        ))
      ) : (
        <Text as='h2'> No Saved Articles</Text>
      )}
    </div>
  );
}

export default StrawList;
