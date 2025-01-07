import { useState, useEffect } from "react";
import AddEvent from "../components/modals/AddEvent";

import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Accordion from "../components/Accordion";

import getEvents from "../api/getEvents";

import DeleteModal from "../components/modals/DeleteModal";
import Card from "@mui/material/Card";

import EditModal from "../components/modals/EditEvent";

const Home = ({user, setUser}) => {
  console.log("Home user", user )
  const [event, setEvent] = useState({
    title: "",
    description: "",
    isPublic: false,
    userInfo: user?.email,
    recordDate: "",
    createdAt: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [privateEvents, setPrivateEvents] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const userEmail = user?.email;
    getEvents(`?userEmail=${userEmail}`)
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
         Dear <b>{user?.displayName||""}</b>, child of God!!
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          variant="outlined"
          style={{
            fontSize: "1em",
            padding: "0.5em",

          }}
        >
          So God created man in His own image; in the image of God. He created him; male and female He created them.
        </Card>
      </div>
      <AddEvent
          event={event}
          setEvent={setEvent}
          privateEvents={privateEvents}
          setPrivateEvents={setPrivateEvents}
        />
      <Paper
        elevation={1}
        style={{
          zIndex:"1",
          height: "70vh",
          padding: "1em",
          margin: "1em",
          overflowY: "scroll",
        }}
      >
        
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
        ) :
          (privateEvents.length === 0) ?
            (
              <div style={{ display: "flex", justifyContent: "center" }}>

                <div>
                  <p>You have no events, use Add Event to create.</p>
                </div>
              </div>
            )
            : (


              privateEvents.map((privateEvent) => {
                return (
                  <Accordion
                    key={privateEvent?.id}
                    item={privateEvent}
                    backgroundColor = {privateEvent.isPublic?"#5DB996":"#074799"}
                    actions={
                      <>
                        <div style={{ display: "flex", justifyContent: "end" }}>
                          <EditModal
                            privateEvent={privateEvent}
                            event={event}
                            setEvent={setEvent}
                            privateEvents={privateEvents}
                            setPrivateEvents={setPrivateEvents}
                          />
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
