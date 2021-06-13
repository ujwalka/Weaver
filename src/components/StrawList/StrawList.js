import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import strawApi from '../../apiServices/strawApi';
import { uniqWith, isEqual } from 'lodash';

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
    <div>
      {/* straws with notes preview*/}
      {straws ? straws.map((straw) => <p>{straw.title}</p>) : null}
    </div>
  );
}

export default StrawList;
