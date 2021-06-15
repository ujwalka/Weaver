/** @jsxImportSource theme-ui */

import React, { useState } from 'react';
import NewsList from '../NewsList/NewsList';
import { Button, Divider, Input } from 'theme-ui';
import { mockNews } from '../../../mockNews';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { motion } from 'framer-motion';
const initialState = '';

function SearchNews({ onBranch }) {
  const [search, setSearch] = useState(initialState);
  const [searchedNews, setSearchedNews] = useState(null);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
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
  };
  return (
    <>
      <div sx={{ padding: '1rem' }}>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '2rem',
            mb: '1rem',
          }}
        >
          <div sx={{ flex: 4 }}>
            <form action='submit' onSubmit={handleSubmit}>
              <div sx={{ display: 'flex' }}>
                {onBranch ? (
                  <Input
                    type='text'
                    name='search'
                    id='search'
                    value={search}
                    onChange={handleChange}
                    placeholder='Quick search'
                    required
                    sx={{
                      height: '2.5rem',
                      width: '75%',
                    }}
                  />
                ) : (
                  <Input
                    type='text'
                    name='search'
                    id='search'
                    value={search}
                    onChange={handleChange}
                    placeholder='Recent news'
                    required
                    sx={{
                      height: '2.5rem',
                      width: '75%',
                    }}
                  />
                )}
                <motion.div
                  whileHover={{
                    scale: 0.9,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  whileTap={{ scale: 0.8 }}
                  initial='hidden'
                  animate='visible'
                  variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 0.3,
                      },
                    },
                  }}
                >
                  <Button
                    sx={{
                      bg: 'black',
                      height: '2.5rem',
                      ml: 2,
                      cursor: 'pointer',
                    }}
                    type='submit'
                  >
                    <SearchOutlinedIcon />
                  </Button>
                </motion.div>
              </div>
            </form>
          </div>
        </div>
        <div
          sx={{
            height: '82vh',
            padding: '1rem',
            overflowY: 'scroll',
            '::-webkit-scrollbar': { width: 0 },
            scrollbarWidth: 'none',
          }}
        >
          <div sx={{}}>
            {searchedNews || mockNews.articles ? (
              <NewsList
                news={searchedNews || mockNews.articles}
                SearchNews={true}
                onBranch={onBranch}
              />
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
