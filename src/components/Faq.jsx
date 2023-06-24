
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Faq.css"

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='faq-section'>
      <div className='faq-row'>
        <div className='col-1'>
          <img src={require("../assets/img/girl thinking.gif")} alt='sellyourcamera' />
        </div>
        <div className='col-2'>

          <h2>Some Question? Here You find answers.</h2>
          <Accordion
            sx={{
              border: '1px solid #f0f0f0',
              boxShadow:'none'
            }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '300px', flexShrink: 0 }}>
                How can I sell my old Camera ?
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'text.secondary' }}>
                You can direct call us or can make a request for get call from us by processing easy steps.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion  sx={{
             border: '1px solid #f0f0f0',
              boxShadow:'none'
            }}  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: '300px', flexShrink: 0 }}>What do you do with old camera ?</Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'text.secondary' }}>
                We repair and touchup the camera and sell to the person who needed 2nd hand camera in best price.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion  sx={{
             border: '1px solid #f0f0f0',
              boxShadow:'none'
            }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '300px', flexShrink: 0 }}>
                Do you buy damage cameras ?
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
           </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'text.secondary' }}>
                Yes, We buy any camera with Physically Damaged, Dead or any kind of functional issue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion  sx={{
             border: '1px solid #f0f0f0',
              boxShadow:'none'
            }}  expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: '300px', flexShrink: 0 }}>In how many days you pickup camera ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'text.secondary' }}>
                We try to reach you as soon as possible, However we reach you within 3 bussiness days.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion  sx={{
             border: '1px solid #f0f0f0',
              boxShadow:'none'
            }} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: '300px', flexShrink: 0 }}>How We calculate the Value of Camera?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'text.secondary' }}>
                We value your emotional touch with your camera. So, You can choose to follow our suggested price or set your own. Consider factors like the age,
                condition, and demand for your camera when determining the price.

              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion  sx={{
              border: '1px solid #f0f0f0',
              boxShadow:'none'
            }} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: '300px', flexShrink: 0 }}> Can I sell other photography-related items on your platform?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'text.secondary' }}>
                While our focus is on cameras, you may have the option to sell photography accessories and related equipment.
                Please review our guidelines or contact our support team for clarification on specific items.

              </Typography>
            </AccordionDetails>
          </Accordion>


        </div>
      </div>
    </div>
  );
}