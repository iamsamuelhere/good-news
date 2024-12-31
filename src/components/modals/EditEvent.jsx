import * as React from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Dayjs from "dayjs";
import "dayjs/locale/en-gb";
Dayjs.locale("en-gb");

import updateEvent from "../../api/updateEvent";
const EditEvent = ({ privateEvent, privateEvents, setPrivateEvents }) => {
  const [open, setOpen] = React.useState(false);

  const [editEvent, setEditEvent] = React.useState(privateEvent);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);

    updateEvent(editEvent)
      .then((resp) => {
        const updatedEvents = privateEvents.map((event) => {
          const id = privateEvent?.id;
          if (event.id != id) {
            return event;
          } else {
            console.log(id, event.id);
            return editEvent;
          }
        });
        setPrivateEvents(updatedEvents);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const recordDate = editEvent?.recordDate;
  const formattedDate = Dayjs(recordDate, "DD-MM-YYYY").format("YYYY-MM-DD");
  return (
    <div style={{ textAlign: "center" }}>
      <Button
        style={{ marginRight: "1em", textTransform: "none" }}
        size="small"
        variant="contained"
      
        onClick={handleClickOpen}
        startIcon={<EditIcon />}
      >
        Edit
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle
            sx={{ m: 0, p: 2, textAlign: "center" }}
            id="customized-dialog-title"
          >
            Edit Event
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
            <div style={{ display: "flex", flexDirection: "column" }}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en-gb"
              >
                <DatePicker
                  defaultValue={Dayjs(formattedDate)}
                  required
                  label="When"
                  format="DD-MM-YYYY"
                  onChange={(value) => {
                    console.log("value", value);
                    setEditEvent({
                      ...editEvent,
                      recordDate: value.format("DD-MM-YYYY"),
                    });
                  }}
                />
              </LocalizationProvider>
              <TextField
                defaultValue={editEvent?.title}
                required
                id="outlined-basic"
                label="Event Title"
                variant="outlined"
                style={{ marginTop: "1em" }}
                multiline
                minRows={2}
                helperText="What is the event?"
                onChange={(e) => {
                  setEditEvent({ ...editEvent, title: e.target.value });
                }}
              />
              <TextField
                defaultValue={editEvent?.description}
                required
                id="outlined-basic"
                label="How"
                variant="outlined"
                style={{ marginTop: "1em" }}
                multiline
                minRows={4}
                helperText="Describe the event?"
                onChange={(e) => {
                  setEditEvent({ ...editEvent, description: e.target.value });
                }}
              />

              <p>Add Note to: </p>

              <div>
                Self
                <Switch
                  checked={editEvent?.isPublic}
                  onChange={(e) => {
                    setEditEvent({ ...editEvent, isPublic: e.target.checked });
                  }}
                  label="Event"
                />
                Others
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button autoFocus type="submit">
              Update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default EditEvent;
