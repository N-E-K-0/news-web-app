import React from 'react'
import AppBar from '../../components/appbar';
import Categories from '../../components/category';
import NewsCard from '../../components/news-card';

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