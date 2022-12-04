import React, {useState, useEffect, useCallback} from 'react';
import AppBar from '../../components/appbar';
import Categories from '../../components/category';
import NewsCard from '../../components/news-card';
import {BASE_URL} from '../../utils/api';
import {getData} from '../../utils/getData';
import { Virtuoso } from 'react-virtuoso';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';

const Home = ({setReadLater, setModal}) => {
  const [newsDataList, setNewsDataList] = useState(() => []);
  const [dataList, setDataList] = useState([]);
  const [searchString, setSearchString] = useState();
  
  const getNewsData = async () =>{
    let url = `${BASE_URL}?q=${searchString}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20`;
    let res = await getData(url);

    if(res){
      let masterData = res?.articles;
      setDataList(masterData);
    }
  }

  const loadMore = useCallback(() => {
    return setTimeout(() => {
      setNewsDataList((newsData) => [...newsData, ...dataList]);
    }, 500)
  }, [setNewsDataList, dataList]);

  const handleReadLater = (data, flag) =>{
    let tempArray = [];
    if(flag){
      let result = newsDataList.filter(item=> dayjs(item.publishedAt).toString() !== data);
      tempArray.push(result);
    }
    else {
      let result = newsDataList.filter(item=> dayjs(item.publishedAt).toString() === data);
      tempArray.push(result);
    }
    setReadLater(tempArray);
  }

  useEffect(() => {
    const timeout = loadMore();
    return () => clearTimeout(timeout);
  }, [])

  useEffect(()=>{
    getNewsData();
  },[searchString]);

  return (
    <div>
      <AppBar page='home' setSearchString={setSearchString}/>
      <Categories />
      {newsDataList ? 
        <Virtuoso
          style={{ height: '100vh' }}
          data={newsDataList}
          endReached={loadMore}
          itemContent={(index, news) => {
            return(
              <Grid item xs={2} sm={4} md={4} key={index}>
                <NewsCard key={`news-item-${index}`} news={news} setModal={setModal} handleReadLater={handleReadLater} />
              </Grid>
            )
          }}
          components={<Skeleton variant="rectangular" width={210} height={118} /> }
        /> 
      : "No data found!"} 
    </div>
  )
}

export default Home