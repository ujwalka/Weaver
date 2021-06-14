/** @jsxImportSource theme-ui */

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import strawApi from '../../apiServices/strawApi';
import { uniqWith, isEqual } from 'lodash';
import StrawCard from '../StrawCard/StrawCard';
import addToCurrentStraw from '../../../redux/actionCreators/addToCurrentStraw';

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
      console.log(articleList);
      const articlesUniq = uniqWith(
        articleList,
        (object, other) => object.parsedStraw === other.parsedStraw
      );
      console.log(articlesUniq);
      setStraws(articlesUniq);
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
      {straws
        ? straws.map((straw) => (
            <>
              <div
                sx={{ pointer: 'cursor' }}
                onClick={() => handleClick(straw)}
              >
                <StrawCard straw={straw} />
              </div>
            </>
          ))
        : null}
    </div>
  );
}

export default StrawList;
