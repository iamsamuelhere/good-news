import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const mockData = [
  {
    eventTitle: "Saved from an accident",
    eventDescription: "this is the description",
  },
  {
    eventTitle: "Rescued from a trap",
    eventDescription: "this is the description",
  },
  {
    eventTitle: "Saved from an accident",
    eventDescription: "this is the description",
  },
  {
    eventTitle: "Rescued from a trap",
    eventDescription: "this is the description",
  },
  {
    eventTitle: "Saved from an accident",
    eventDescription: "this is the description",
  },
  {
    eventTitle: "Rescued from a trap",
    eventDescription: "this is the description",
  },
  {
    eventTitle: "Saved from an accident",
    eventDescription: "this is the description",
  },
  {
    eventTitle: "Rescued from a trap",
    eventDescription: "this is the description",
  },
  {
    eventTitle: "Saved from an accident",
    eventDescription: "this is the description",
  },
  {
    eventTitle: "Rescued from a trap",
    eventDescription: "this is the description",
  },
];
const GoodNews = () => {
  return (
    <>
      <p style={{ textAlign: "center" }}>RECENT GOOD NEWS</p>

      <Paper
        elevation={1}
        style={{
          height: "70vh",
          padding: "1em",
          margin: "1em",
          overflowY: "scroll",
        }}
      >
        {mockData.map((mock) => {
          return (
            <Accordion style={{ marginTop: "1em" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {mock.eventTitle}
              </AccordionSummary>
              <AccordionDetails>
                <p>{mock.eventDescription}</p>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Paper>
    </>
  );
};

export default GoodNews;
