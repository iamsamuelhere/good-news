import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionComponent = ({ item, actions }) => {
  return (
    <Accordion style={{ marginTop: "1em" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {item?.title}
      </AccordionSummary>
      <AccordionDetails style={{ whiteSpace: "pre-line" }}>
      

        <span>{item?.description}</span>
        <br />
        <br />

        <div style={{ fontSize: "0.9rem" }}>
          <i>Event Date: {item?.recordDate}</i>
        </div>
        <div>
          <div style={{margin:"1em"}}>
            {actions&&actions}
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
