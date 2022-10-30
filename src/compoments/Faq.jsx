import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faq({currentTab}) {

  const accordionList=[
        {
            questionNo:1,
            question:'Here is a question ?',
            answer:'Here is a answer as Lores epsom. Lorem ipsum dolor sit  , consectetur   elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'

        },
        {
            questionNo:2,
            question:'Here is a question ?',
            answer:'Here is a answer as Lores epsom. Lorem ipsum dolor sit  , consectetur   elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'

        },
        {
            questionNo:3,
            question:'Here is a question ?',
            answer:'Here is a answer as Lores epsom. Lorem ipsum dolor sit  , consectetur   elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'

        },
        {
            questionNo:4,
            question:'Here is a question ?',
            answer:'Here is a answer as Lores epsom. Lorem ipsum dolor sit  , consectetur   elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'

        },
        {
            questionNo:5,
            question:'Here is a question ?',
            answer:'Here is a answer as Lores epsom. Lorem ipsum dolor sit  , consectetur   elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'

        },
        {
            questionNo:6,
            question:'Here is a question ?',
            answer:'Here is a answer as Lores epsom. Lorem ipsum dolor sit  , consectetur   elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'

        },
        {
            questionNo:7,
            question:'Here is a question ?',
            answer:'Here is a answer as Lores epsom. Lorem ipsum dolor sit  , consectetur   elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'

        },
        {
            questionNo:8,
            question:'Here is a question ?',
            answer:'Here is a answer as Lores epsom. Lorem ipsum dolor sit  , consectetur   elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'

        },
        {
            questionNo:9,
            question:'Here is a question ?',
            answer:'Here is a answer as Lores epsom. Lorem ipsum dolor sit  , consectetur   elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'

        },
  ]




  return (
    <div>

      {  accordionList.map((acc,index)=>{

        return (

       <Accordion key={index+123}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header" >
            <Typography> {'Category'+currentTab+", "} Question {acc.questionNo} : {acc.question}</Typography>
            </AccordionSummary>

            <AccordionDetails>
            <Typography>
                 {acc.answer}
            </Typography>
            </AccordionDetails>
      </Accordion>

        )
      })}

      

 
    </div>
  );
}
