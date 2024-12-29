import { useState, useEffect } from "react";
import AddEvent from "../components/modals/AddEvent";

import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Accordion from "../components/Accordion";
const VITE_test = import.meta.env.VITE_test;
import getEvents from "../api/getEvents";

import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";


import DeleteModal from "../components/modals/DeleteModal";



const Home = () => {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    isPublic: false,
    userInfo: "test@gmail.com",
    recordDate: "",
    createdAt: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [privateEvents, setPrivateEvents] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getEvents("?isPublic=false")
      .then((result) => {
        console.log(result);
        setPrivateEvents(result?.events || []);
      })
      .catch()
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p
          style={{
            fontSize: "1.2em",
            textAlign: "center",
          }}
        >
          Dear, child of God!!
        </p>
      </div>
      {VITE_test}
      <Paper
        elevation={1}
        style={{
          height: "70vh",
          padding: "1em",
          margin: "1em",
          overflowY: "scroll",
        }}
      >
        <AddEvent
          event={event}
          setEvent={setEvent}
          privateEvents={privateEvents}
          setPrivateEvents={setPrivateEvents}
        />
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",

              alignItems: "center",
            }}
          >
            {" "}
            <CircularProgress />
          </div>
        ) : (
          privateEvents.map((privateEvent) => {
            return (
              <Accordion
                item={privateEvent}
                actions={
                  <>
                    <div style={{ display: "flex", justifyContent: "end" }}>
                      <Button
                        style={{ marginRight: "1em", textTransform: "none" }}
                        size="small"
                        variant="outlined"
                        onClick={() => {}}
                        startIcon={<EditIcon />}
                      >
                        Edit
                      </Button>
                      <DeleteModal
                        events={privateEvents}
                        setEvents={setPrivateEvents}
                        title="Confirm Delete"
                        description={`Are you sure you want to delete the event`}
                        content={privateEvent}
                      />
                    </div>
                  </>
                }
              />
            );
          })
        )}
      </Paper>
    </>
  );
};

export default Home;
