import React, {useState, useEffect} from 'react'
import AppBar from '../../components/appbar';
import Categories from '../../components/category';
import NewsCard from '../../components/news-card';
import {BASE_URL} from '../../utils/api';
import {getData} from '../../utils/getData';
import Modal from '../../components/modal';

const Home = () => {
  const [modal, setModal] = useState(false);
  const [newsDataList, setNewsDataList] = useState();

  const getNewsData = async () =>{
    // let url = `${BASE_URL}?q=${searchString}&apiKey=${process.env.API_KEY}`;
    let url = `${BASE_URL}?q=bitcoin&apiKey=${process.env.REACT_APP_API_KEY}`;
    let res = await getData(url);

    if(res){
      let masterData = res?.articles;
      setNewsDataList(masterData);
    }
  }

  useEffect(()=>{
    getNewsData();
  },[])

  return (
    <div>
      <AppBar page='home'/>
      <Categories />
      {newsDataList ? 
        newsDataList.map((news,index)=> {
          return(<NewsCard key={`news-${index}`} news={news} setModal={setModal}/>)
        }) 
      : "No data found!"}
      <Modal modal={modal} setModal={setModal} />
    </div>
  )
}

export default Home