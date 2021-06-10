import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsList({ news, RecentViews, SearchNews }) {
  return (
    <div>
      <div>
        {news.map((article) => (
          <NewsCard
            news={article}
            RecentViews={RecentViews}
            SearchNews={SearchNews}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsList;
