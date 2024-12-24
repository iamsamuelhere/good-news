import * as React from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Switch from '@mui/material/Switch';
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography } from "@mui/material";

const AddEvent = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Event
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2, textAlign:"center" }} id="customized-dialog-title">
          Add Event
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
         <div style={{display:"flex", flexDirection:"column"}}>
           <LocalizationProvider
             dateAdapter={AdapterDayjs}
             adapterLocale="en-gb"
           >
             <DatePicker label="When" format="DD-MM-YYYY"
               
               />
           </LocalizationProvider>
           <TextField
             id="outlined-basic"
             label="Event Title"
             variant="outlined"
             style={{marginTop:"1em" }}
             multiline
              minRows={2}
             helperText="What is the event?"
           />
           <TextField
              id="outlined-basic"
              label="How"
              variant="outlined"
              style={{marginTop:"1em" }}
              multiline
             minRows={4}
             helperText="Describe the event?"
            />

           <p>Add Note to

           <div>
             Self
              <Switch 

                label= 'Event'
                 />
              Others
           </div>
             </p>
         </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AddEvent;
