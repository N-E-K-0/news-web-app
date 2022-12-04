import React from 'react'
import AppBar from '../../components/appbar';
import Categories from '../../components/category';
import NewsCard from '../../components/news-card';

const ReadLater = (flag) => {
  return (
    <div>
      <AppBar page='read-later'/>
      <NewsCard flag="read-later"/>
    </div>
  )
}

export default ReadLater