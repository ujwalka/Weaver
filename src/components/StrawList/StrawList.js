/** @jsxImportSource theme-ui */

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import strawApi from '../../apiServices/strawApi';
import { uniqWith } from 'lodash';
import StrawCard from '../StrawCard/StrawCard';
import addToCurrentStraw from '../../../redux/actionCreators/addToCurrentStraw';
import { Text } from 'theme-ui';
import { motion } from 'framer-motion';
function StrawList() {
  const [straws, setStraws] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  // @ts-ignore
  const { currentNestId } = useSelector((state) => state.nestReducer);

  // delete articles
  // add redirecion onclick to straw page

  useEffect(() => {
    (async () => {
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
    })();
  }, []);

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
            <motion.div
              key={straw._id}
              whileHover={{
                scale: [1, 0.9, 0.95],
                rotate: [0, 0.4, -0.4, 0],
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div
                sx={{ pointer: 'cursor' }}
                onClick={() => handleClick(straw)}
              >
                <StrawCard straw={straw} />
              </div>
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
