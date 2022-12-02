import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({news, setModal}) {
  return (
    <>
      <Card 
        sx={{ maxWidth: 345 }}
        onClick={()=> setModal(true)}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={news.CardMediaurlToImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {news.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {news.publishedAt}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}