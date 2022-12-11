import React, {useState, useEffect} from 'react';
import { Layout, Row, Col, Input, Card, Modal } from 'antd';
import NavBar  from '../../components/navbar';
import NewsCard from '../../components/news-card';
import {getData} from '../../utils/getData';
import {BASE_URL} from '../../utils/api';
import InfiniteScroll from "react-infinite-scroll-component";

const { Header, Footer, Content } = Layout;

const Home = () => {
  const [dataList, setDataList] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [searchString, setSearchString] = useState("general");
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getNewsData = async(search)=>{
    let url = `${BASE_URL}?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&page=${currentPage+1}`;
    let res = await getData(url);
    if(res){
      let masterData = res?.articles;
      setTimeout(() => {
        let tempArray = [];
        tempArray.push(...dataList, ...masterData);
        setDataList(tempArray);
      }, 1000);
    }
    setCurrentPage(currentPage + 1);
  }

  useEffect(()=>{
    setDataList(null);
    setCurrentPage(0);
    getNewsData(searchString);
  },[searchString]);

  return (
    <Layout>
      <Header>
        <NavBar />
      </Header>
      <Content>
        <Input.Search 
          allowClear
          size="large"
          placeholder="input search text" 
          onSearch={(value) => setSearchString(value)} 
          enterButton
          style={{margin: '1rem'}}
        />
        <InfiniteScroll
          dataLength={dataList ? dataList?.length : []}
          next={()=>getNewsData(searchString)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <Row gutter={8} style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
            {dataList ? 
              dataList?.map((news, index)=>{
                return(
                  <Col span={6} key={`news-${index}`}>
                    <NewsCard news={news} setIsModalOpen={setIsModalOpen} setNewsData={setNewsData}/>
                  </Col>
                )
              })
            :null}
          </Row>
        </InfiniteScroll>
      </Content>
      <Modal 
        title="Details" 
        open={isModalOpen} 
        onOk={()=> setIsModalOpen(false)} 
        onCancel={()=> setIsModalOpen(false)}
      >
        <Card
          style={{
          width: '100%',
          margin: '0.5rem'
          }}
          cover={
          <img
            alt="example"
            src={newsData.urlToImage}
          />
          }
        >
          <Card.Meta
            title={newsData.title}
            description={newsData.content}
          />
        </Card>
      </Modal>
    </Layout>
  )
}

export default Home