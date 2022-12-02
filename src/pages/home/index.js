import React from 'react'
import AppBar from './appbar';
import Categories from './category';
import NewsCard from './news-card';

const Home = () => {
  return (
    <div>
      <AppBar page='home'/>
      <Categories />
      <NewsCard />
    </div>
  )
}

export default Home