/** @jsxImportSource theme-ui */

import React, { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';

const initialState = '';

function SearchNews() {
  const [search, setSearch] = useState(initialState);
  const [searchedNews, setSearchedNews] = useState(null);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const searchString = search
      .split(' ')
      .filter((str) => str.length > 0)
      .join('+');
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${searchString}&apiKey=614105ee8fe04bf1b5a7ceaf333fc812`
    );
    const newsArticles = await res.json();
    setSearchedNews(newsArticles.articles);
  }
  return (
    <div sx={{ overflow: 'scroll' }}>
      <h1>Search News</h1>
      <form action='submit' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          id='search'
          value={search}
          onChange={handleChange}
          placeholder='Search news'
          required
        />
        <button type='submit'>search</button>
      </form>
      {searchedNews ? (
        searchedNews.map((news) => <NewsCard news={news} />)
      ) : (
        <p>No news found in your area</p>
      )}
    </div>
  );
}

export default SearchNews;
