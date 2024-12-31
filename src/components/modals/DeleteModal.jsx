import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import * as React from "react";

import Button from "@mui/material/Button";

import DialogContentText from "@mui/material/DialogContentText";
import DeleteIcon from "@mui/icons-material/Delete";
import removeEvent from "../../api/removeEvent";
const DeleteModal = ({ title, description, content, events, setEvents }) => {
  const [open, setOpen] = React.useState(false);

  const handleDelete = (content) => {
    const id = content?.id;
    const filteredEvents = events.filter((event) => event.id !== id);
    setEvents(filteredEvents);
    setOpen(false);
    removeEvent(`?id=${id}`);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Button
        variant="contained"
        size="small"
        color="error"
        style={{ textTransform: "none" }}
        startIcon={<DeleteIcon />}
        onClick={handleOpen}
      >
        Delete
      </Button>
      <Dialog
        disableEnforceFocus={false}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
            <br />
            <b>{content?.title}</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleDelete(content);
            }}
          >
            Yes
          </Button>
          <Button onClick={handleClose}>No</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default DeleteModal;
