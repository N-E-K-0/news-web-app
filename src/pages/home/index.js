import React from 'react'
import AppBar from '../../components/appbar';
import Categories from '../../components/category';
import NewsCard from '../../components/news-card';

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