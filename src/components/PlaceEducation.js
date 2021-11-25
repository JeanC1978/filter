import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Sin Estudios"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Primaria incompleta"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Primaria completa"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Secundaria incompleta"
        />
                <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Secundaria completa"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Técnico superior incompl."
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Técnico superior completo"
        />
      </FormGroup>
    </FormControl>
  );
}
