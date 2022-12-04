import React, {useState, useEffect, useCallback} from 'react';
import AppBar from '../../components/appbar';
import Categories from '../../components/category';
import NewsCard from '../../components/news-card';
import {BASE_URL} from '../../utils/api';
import {getData} from '../../utils/getData';
// import { Virtuoso } from 'react-virtuoso';
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';

const Home = ({setReadLater, setModal, setModalData}) => {
  const [newsDataList, setNewsDataList] = useState(() => []);
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

  // const handleReadLater = (data, flag) =>{
  //   let tempArray = [];
  //   if(flag){
  //     let result = newsDataList.filter(item=> dayjs(item.publishedAt).toString() !== data);
  //     tempArray.push(result);
  //   }
  //   else {
  //     let result = newsDataList.filter(item=> dayjs(item.publishedAt).toString() === data);
  //     tempArray.push(result);
  //   }
  //   setReadLater(tempArray);
  // }

  useEffect(()=>{
    getNewsData(searchString);
  },[searchString]);

  return (
    <div>
      <AppBar page='home' setSearchString={setSearchString}/>
      <Categories />
      {dataList ? 
        // <Virtuoso
        //   style={{ height: '100vh' }}
        //   data={newsDataList}
        //   endReached={loadMore}
        //   itemContent={(index, news) => {
        //     return(
        //       <Grid item xs={2} sm={4} md={4} key={index}>
        //         <NewsCard key={`news-item-${index}`} news={news} setModal={setModal} handleReadLater={handleReadLater} />
        //       </Grid>
        //     )
        //   }}
        //   components={<Skeleton variant="rectangular" width={210} height={118} /> }
        // /> 
        <InfiniteScroll
          dataLength={dataList.length}
          next={getNewsData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {dataList?.map((news, index) => (
            <div  key={index}>
              <Grid item xs={2} sm={4} md={4} key={index}>
                <NewsCard 
                  key={`news-item-${index}`} 
                  news={news} 
                  setModal={setModal} 
                  setModalData={setModalData}
                  // handleReadLater={handleReadLater} 
                />
              </Grid>
            </div>
          ))}
        </InfiniteScroll>
      : "No data found!"} 
    </div>
  )
}

export default Home