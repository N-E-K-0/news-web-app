import React, {useState, useEffect, useCallback} from 'react';
import AppBar from '../../components/appbar';
import Categories from '../../components/category';
import NewsCard from '../../components/news-card';
import {BASE_URL} from '../../utils/api';
import {getData} from '../../utils/getData';
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from '@mui/material/Grid';

const Home = ({setReadLater, readLater, setModal, setModalData}) => {
  const [dataList, setDataList] = useState([]);
  const [searchString, setSearchString] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  
  const getNewsData = async (searchString) =>{
    if(searchString){
      setDataList();
      setCurrentPage(currentPage + 1);

      let url = `${BASE_URL}?q=${searchString}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&page=${currentPage+1}`;

      let res = await getData(url);

      if(res){
        let masterData = res?.articles;
        setTimeout(() => {
          let tempArray = [];
          tempArray.push(...dataList, ...masterData);
          setDataList(tempArray);
        }, 1000);
      }
    }
    else{
      setCurrentPage(currentPage + 1);

      let url = `${BASE_URL}?q=${searchString}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&page=${currentPage+1}`;
      let res = await getData(url);
  
      if(res){
        let masterData = res?.articles;
        setTimeout(() => {
          let tempArray = [];
          tempArray.push(...dataList, ...masterData);
          setDataList(tempArray);
        }, 1000);
      }
    }
  }

  const handleReadLater = (news) =>{
    let tempArray = [];
    tempArray.push(...readLater, ...news);
    setReadLater(tempArray);
  }

  useEffect(()=>{
    getNewsData(searchString);
  },[searchString]);

  return (
    <div>
      <AppBar page='home' setSearchString={setSearchString}/>
      <Categories />
      {dataList ? 
        <InfiniteScroll
          dataLength={dataList.length}
          next={getNewsData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <Grid container spacing={2}>
            {dataList?.map((news, index) => (
              <div key={index}>
                <Grid item xs={12} sm={12} md={12} key={index}>
                  <NewsCard 
                    key={`news-item-${index}`} 
                    news={news} 
                    setModal={setModal} 
                    setModalData={setModalData}
                    handleReadLater={handleReadLater} 
                  />
                </Grid>
              </div>
            ))}
          </Grid>
        </InfiniteScroll>
      : "No data found!"} 
    </div>
  )
}

export default Home