import React from 'react'
import AppBar from '../home/appbar';
import Categories from '../home/category';
import NewsCard from '../home/news-card';

const ReadLater = () => {
  return (
    <div>
      <AppBar page='read-later'/>
      <Categories />
      <NewsCard />
    </div>
  )
}

export default ReadLater