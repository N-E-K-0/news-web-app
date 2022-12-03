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
  const [searchString, setSearchString] = useState();

  const getNewsData = async () =>{
    console.log("searchString>>>>>", searchString);
    let url = `${BASE_URL}?q=${searchString}&apiKey=${process.env.REACT_APP_API_KEY}`;
    let res = await getData(url);

    if(res){
      let masterData = res?.articles;
      setNewsDataList(masterData);
    }
  }

  useEffect(()=>{
    getNewsData();
  },[]);

  useEffect(()=>{
    getNewsData();
  },[searchString]);

  return (
    <div>
      <AppBar page='home' setSearchString={setSearchString}/>
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