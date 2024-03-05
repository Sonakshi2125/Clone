import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./Values.css"
const Values = () => {
    return (
        <div className='pt-40 w-full h-[80vh]'>
     
            <div className="upper-section h-[30vh] flex justify-center items-center flex-col"><h1 className='text-4xl font-extrabold'>This is What We Care About</h1><br /><p className='text-xl font-medium mx-40 text-center my-3'>Our success is not only due to the quality of our work; it's down to attitude, our approach and  <br />the way we treat our users. Here are the values that inspire our decisions and actions.</p></div>
            <div className="lower-section  h-[50vh] flex flex-wrap justify-start gap-5 ml-[300px] items-center">
               <div className='w-1/3 mx-[1rem] accordion'><Accordion className='bg-inherit'>
                    <AccordionSummary
                    className='accordion'
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>Integrity</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Be Candid, Assume Good IntentWe believe in being Clear, Honest and Transparent, with sensitivity and genuine support to our users & team - and with everyone we interact with. We courageously act with uncompromising honesty and integrity in everything we do.
                        </Typography>
                    </AccordionDetails>
                </Accordion> </div>
               <div className='w-1/3 m-[1rem] accordion'><Accordion className='bg-inherit'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>Collaboration</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Leverage collective genius.We truly believe in the collective power of all of us. Competition makes us faster, collaboration makes us better. We value everyone and treat people with dignity and respect. All in all, it is all about you, People!
                        </Typography>
                    </AccordionDetails>
                </Accordion> </div>
               <div className='w-1/3 m-[1rem] accordion'><Accordion className='bg-inherit'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>Trust and Relationships</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Business based on trust is always sustainableWe believe that business is won because of relationships & trust, while price etc. are just excuses. This can't be more true in international business. We build trust with our users through responsible actions and honest relationships.
                        </Typography>
                    </AccordionDetails>
                </Accordion> </div>
               <div className='w-1/3 m-[1rem] accordion'><Accordion className='bg-inherit'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>Excellence</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Good just isn’t good enough.We operate with highest standards as our baseline. We don’t settle for anything less than excellence in every endeavour, and we have the self-honesty to admit when we’re wrong and the courage to change.
                        </Typography>
                    </AccordionDetails>
                </Accordion> </div>
               <div className='w-1/3 m-[1rem] accordion'><Accordion className='bg-inherit'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>User Delight</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Focus on the user and all else will follow.We strive to not just satisfy, but absolutely delight our Customers. Our users are the lifeblood of our business, and we are obsessed with providing most secure and the best user experience.
                        </Typography>
                    </AccordionDetails>
                </Accordion> </div>
               
            </div>

        </div>
    )
}

export default Values