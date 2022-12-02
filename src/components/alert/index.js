import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export const AlertPop = () =>{
  return(
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      Something went wrong!
    </Alert>
  )
}