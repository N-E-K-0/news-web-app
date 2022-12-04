import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({modal, setModal, modalData}) {
  const handleClose = () => setModal(false);

  return (
    <div>
      {console.log("modalData>>>>>>", modalData)}
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Card 
          sx={{ maxWidth: 345 }}
        >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={modalData.urlToImage}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {modalData.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {modalData.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {dayjs(modalData.publishedAt).format('DD/MM/YYYY')}
                </Typography>
                {/* <Typography variant="body2" color="text.primary" onClick={()=> {
                  setModal(true); setModalData(news)}}>
                  Show Details
                </Typography> */}
                {/* <Typography variant="body2" color="text.primary" onClick={()=> handleReadLater(dayjs(news.publishedAt).toString())}>
                  Read Later
                </Typography> */}
                {/* { flag === "read-later" ? <Typography variant="body2" color="text.primary" onClick={()=> handleReadLater(dayjs(news.publishedAt).toString(), flag)}>
                  Remove
                </Typography> : null} */}
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}