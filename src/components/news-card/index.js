import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import dayjs from 'dayjs';

export default function ActionAreaCard({news, setModal, setModalData, handleReadLater, flag}) {
  return (
    <>
      <Card 
        sx={{ maxWidth: 345 }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={news.urlToImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {news.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {dayjs(news.publishedAt).format('DD/MM/YYYY')}
            </Typography>
            <Typography variant="body2" color="text.primary" onClick={()=> {
              setModal(true); setModalData(news)}}>
              Show Details
            </Typography>
            <Typography variant="body2" color="text.primary" onClick={()=> handleReadLater(dayjs(news.publishedAt).toString())}>
              Read Later
            </Typography>
            { flag === "read-later" ? <Typography variant="body2" color="text.primary" onClick={()=> handleReadLater(dayjs(news.publishedAt).toString(), flag)}>
              Remove
            </Typography> : null}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}