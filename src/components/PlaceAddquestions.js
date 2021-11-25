import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FormControlLabelPosition() {
  return (
    <div>
   <h4> El postulante manifiesta: </h4>
   <br/>
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Viajaría al interior del país"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Trabajar en horarios rotativos"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Trabajar horas extras"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Trabajar fines de semana?"
        />

      </FormGroup>
    </FormControl>
    </div>
  );
}
