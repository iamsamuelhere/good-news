import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Accordion from "../components/Accordion";
import CircularProgress from "@mui/material/CircularProgress";

import getEvents from "../api/getEvents";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "../components/modals/DeleteModal";

const GoodNews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [publicEvents, setPublicEvents] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    getEvents("?isPublic=true")
      .then((result) => {
        console.log(result)
        setPublicEvents(result?.events || []);
      })
      .catch()
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <p style={{ textAlign: "center" }}>RECENT GOOD NEWS
       
      </p>

      <Paper
        elevation={1}
        style={{
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
        ) : (
          publicEvents.map((publicEvent) => {
            return (
             <Accordion
               item={publicEvent}
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
                       events={publicEvents}
                       setEvents={setPublicEvents}
                       title="Confirm Delete"
                       description={`Are you sure you want to delete the event`}
                       content={publicEvent}
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

export default GoodNews;
