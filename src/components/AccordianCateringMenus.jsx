import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordianCateringMenus() {
  return (
    <>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          DownLow Chicken
        </AccordionSummary>
        <AccordionDetails>
          Vancouver&apos;s best fried chicken! Our catering options include
          Tenders, Sandos, Boneless Thighs and which ever sides you&apos;d like!
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Vennie&apos;s Subs
        </AccordionSummary>
        <AccordionDetails>
          12 inch and 6 inch subs, fully customizable and made with care.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          DownLow Burgers
        </AccordionSummary>
        <AccordionDetails>
          Our burgers are made with the best ingredients and are sure to please.
        </AccordionDetails>
      </Accordion>
    </>
  );
}
