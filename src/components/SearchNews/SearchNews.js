/** @jsxImportSource theme-ui */

import React, { useState } from 'react';
import NewsList from '../NewsList/NewsList';
import { Button, Divider } from 'theme-ui';

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
    <>
      <div sx={{ padding: '1rem' }}>
        <div
          sx={{
            justifyContent: 'space-between',
            display: 'flex',

            alignItems: 'center',
            height: '3.5rem',
          }}
        >
          <div sx={{ flex: 2 }}>
            <h2>Search</h2>
          </div>
          <div sx={{ flex: 4 }}>
            <form action='submit' onSubmit={handleSubmit}>
              <input
                type='text'
                name='search'
                id='search'
                value={search}
                onChange={handleChange}
                placeholder='Search news'
                required
                sx={{
                  height: '2.5rem',
                  width: '80%',
                }}
              />
              <Button sx={{ bg: 'black', height: '2.5rem' }} type='submit'>
                search
              </Button>
            </form>
          </div>
        </div>
        <Divider />
        <div
          sx={{
            height: '40vh',
            padding: '1rem',
            overflowY: 'scroll',
            scrollbarWidth: 'none',
          }}
        >
          <div sx={{}}>
            {searchedNews ? (
              <NewsList news={searchedNews} />
            ) : (
              <p>No search results</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchNews;
