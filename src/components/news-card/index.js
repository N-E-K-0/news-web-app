import React from 'react'
import { Avatar, Card } from 'antd';

const NewsCard = ({news, setIsModalOpen, setNewsData}) => {
  return (
    <div>
        <Card
            style={{
            width: 300,
            margin: '0.5rem'
            }}
            cover={
            <img
                alt="example"
                src={news.urlToImage}
            />
            }
            actions={[
                <h3>Read Later</h3>,
                <h3 onClick={()=> {setIsModalOpen(true); setNewsData(news)}}>Details</h3>
            ]}
        >
            <Card.Meta
                title={news.title}
                description={news.publishedAt}
            />
        </Card>
    </div>
  )
}

export default NewsCard