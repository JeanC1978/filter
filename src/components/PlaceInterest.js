import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Produccion y Operaciones"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Mantenimiento y Limpieza"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Call center y Ventas"
        />
                <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Motorizados y Courier"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Construccion y Obras"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Almacén y Transporte"
        />
      </FormGroup>
    </FormControl>
  );
}

