import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

interface AlertSnackProps{
  textMsg: string;
  typeAlert:string
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertSnack({ open,
                                     typeAlert, 
                                     textMsg, 
                                     vertical,
                                     horizontal,
                                     handleClose}) {
  //const [open, setOpen] = React.useState(open);
  // console.log('args==>',args)
  // const handleClick = () => {
  //   setOpen(true);
  // };



  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar 
        open={open} 
        autoHideDuration={1800} 
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} 
          severity={typeAlert} 
          sx={{ width: '100%' }}>
          {textMsg}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
