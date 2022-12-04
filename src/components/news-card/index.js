import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';

export default function ActionAreaCard({news, setModal, setModalData, handleReadLater, flag}) {
  return (
    <>
      <Card 
        sx={{ maxWidth: 250}}
      >
        <CardMedia
          component="img"
          height="140"
          image={news.urlToImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {news.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {dayjs(news.publishedAt).format('DD/MM/YYYY')}
          </Typography>
          {/* { flag === "read-later" ? <Typography variant="body2" color="text.primary" onClick={()=> handleReadLater(dayjs(news.publishedAt).toString(), flag)}>
            Remove
          </Typography> : null} */}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=> handleReadLater(news)}>Read Later</Button>
          <Button size="small" onClick={()=> {
            setModal(true); setModalData(news)}}>Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}