import React from 'react'
import AppBar from '../../components/appbar';
import NewsCard from '../../components/news-card';
import Grid from '@mui/material/Grid';

const ReadLater = ({dataList, setModal, setModalData}) => {
  return (
    <div>
      <AppBar page='read-later'/>
      <Grid container spacing={2}>
        {dataList?.map((news, index) => (
          <div key={index}>
            <Grid item xs={12} sm={12} md={12} key={index}>
              <NewsCard 
                key={`news-item-${index}`} 
                news={news} 
                setModal={setModal} 
                setModalData={setModalData}
              />
            </Grid>
          </div>
        ))}
      </Grid>
    </div>
  )
}

export default ReadLater