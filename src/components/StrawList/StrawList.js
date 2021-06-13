/** @jsxImportSource theme-ui */

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import strawApi from '../../apiServices/strawApi';
import { uniqWith, isEqual } from 'lodash';
import StrawCard from '../StrawCard/StrawCard';

function StrawList() {
  const [straws, setStraws] = useState(null);
  // @ts-ignore
  const { currentNestId } = useSelector((state) => state.nestReducer);
  useEffect(() => {
    (async () => {
      const { articles } = await strawApi.getAllArticles(currentNestId);

      const articleList = articles.map(({ newsArticle }) =>
        JSON.parse(newsArticle)
      );
      const articlesUniq = uniqWith(articleList, isEqual);
      setStraws(articlesUniq);
    })();
  }, [straws]);

  return (
    // get all straws
    // add redirecion onclick to straw page
    <div
      sx={{
        overflow: 'scroll',
        padding: '1rem',
        height: '92vh',
        scrollbarWidth: 'none',
      }}
    >
      {/* straws with notes preview*/}
      {straws ? straws.map((straw) => <StrawCard straw={straw} />) : null}
    </div>
  );
}

export default StrawList;
