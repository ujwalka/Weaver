import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsList({ news }) {
  return (
    <div>
      <div>
        {news.map((article) => (
          <NewsCard news={article} />
        ))}
      </div>
    </div>
  );
}

export default NewsList;
