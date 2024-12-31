import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Accordion from "../components/Accordion";
import CircularProgress from "@mui/material/CircularProgress";

import getEvents from "../api/getEvents";

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
               key={publicEvent?.id}
               item={publicEvent}
              
               />
            );
          })
        )}
      </Paper>
    </>
  );
};

export default GoodNews;
