import { useState, useEffect } from 'react';

export default function useFetchNews(url) {
  const [news, setNews] = useState(null);
  console.log('hello out fetch');
  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(url);
      console.log('hello after fetch');
      const newsResults = await res.json();
      console.log(newsResults.status);
      setNews(newsResults.articles);
    };
    fetchNews();
  }, [news, url]);
  return news;
}
