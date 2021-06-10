import { useState, useEffect } from 'react';

export default function useFetchNews(url) {
  const [news, setNews] = useState(null);
  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(url);
      const newsResults = await res.json();
      setNews(newsResults.articles);
    };
    fetchNews();
  }, [news, url]);
  return news;
}
