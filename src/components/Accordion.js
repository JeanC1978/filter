import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useForm} from "../hooks/useForm";
import { makeStyles } from "@material-ui/core/styles";

// Secciones Accordion
import PlaceResidence from './PlaceResidence';
import PlaceTransport from './PlaceTransport';
import PlaceExperience from './PlaceExperience';
import PlaceInterest from './PlaceInterest';
import PlaceJob from './PlaceJob';
import PlaceEconomi from './PlaceEconomi';
import PlaceSalary from './PlaceSalary';
import PlaceEducation from './PlaceEducation';
import PlaceAge from './PlaceAge';
import PlaceGender from './PlaceGender';
import PlaceAddquestions from './PlaceAddquestions';
import PlaceFamily from './PlaceFamily';
import PlaceHealth from './PlaceHealth';
import PlacePersonal from './PlacePersonal';

const  useStyles = makeStyles (theme => ({
  root: {
    boxShadow: "none",  
    color: "#5D5FEF",
    padding: "0rem 1rem 0rem 1rem",
  },
  details: {
    color: "black",   
  },
}))

const initialValues = {
  nombre: "",
  apellido: ""
}

export default function SimpleAccordion() {
  const classes = useStyles();
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    disabledButtonState,
} = useForm(initialValues, false);


  return (
    <div>
      {/* {JSON.stringify(values)} */}
      <Accordion className={classes.root} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <h4>Lugar de residencia</h4>
        </AccordionSummary>
        <AccordionDetails>
          <PlaceResidence />
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <h4 >Transporte</h4>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>   
          <PlaceTransport />
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <h4 >Experiencia</h4>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
        <PlaceExperience />
        </AccordionDetails>
        
      </Accordion>
      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <h4 >Rubro de Interés</h4>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
        <PlaceInterest />
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <h4 >Laboral</h4>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
        <h5>Conoce a tu postulante filtrando según lo que respondió en el cuestionario de registro:</h5>
        <PlaceJob />
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <h4 >Economía</h4>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
        <h5>Conoce a tu postulante filtrando según lo que respondió en el cuestionario de registro:</h5>
        <PlaceEconomi/>
        </AccordionDetails> 
      </Accordion>
      
      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <h4 >Expectativa Salarial</h4>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
        <PlaceSalary/>
        </AccordionDetails> 
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <h4 >Educación</h4>
        </AccordionSummary >
        <AccordionDetails className={classes.details}>
        <PlaceEducation/>
        </AccordionDetails> 
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <h4 >Edad</h4>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
        <PlaceAge/>
        </AccordionDetails> 
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <h4 >Género</h4>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
        <PlaceGender/>
        </AccordionDetails> 
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <h4 >Preguntas Adicionales</h4>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
        <PlaceAddquestions/>
        </AccordionDetails> 
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <h4 >Familia</h4>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
        <PlaceFamily/>
        </AccordionDetails> 
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <h4 >Salud</h4>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
        <PlaceHealth/>
        </AccordionDetails> 
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <h4 >Personal</h4>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
        <PlacePersonal/>
        </AccordionDetails> 
      </Accordion>
      
    </div>
  );
}
