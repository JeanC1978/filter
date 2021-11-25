import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {FormControl,RadioGroup,Radio, FormControlLabel} from "@material-ui/core";
import Grid from '@mui/material/Grid';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = ["Si", "No"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <Grid container marginTop={2} >
      <FormControl > 
      <h5>1. ¿Sufre de alguna alergia?</h5>
        <RadioGroup aria-label="option" name="option"  >
        <Grid alignItems="center">
          <FormControlLabel item xs="auto" value="a" control={<Radio />} label="Si" />
          <FormControlLabel item xs="auto" value="b" control={<Radio />} label="No" />
        </Grid>
        </RadioGroup> 
      </FormControl>
      </Grid>

      <Grid container marginTop={2} >
      <FormControl > 
      <h5>2. ¿Tiene alguna operación?</h5>
        <RadioGroup aria-label="option" name="option"  >
        <Grid alignItems="center">
          <FormControlLabel item xs="auto" value="a" control={<Radio />} label="Si" />
          <FormControlLabel item xs="auto" value="b" control={<Radio />} label="No" />
        </Grid>
        </RadioGroup> 
      </FormControl>
      </Grid>

      <Grid container marginTop={2} >
      <FormControl > 
      <h5>3. ¿Ha presentado problemas en la columna?</h5>
        <RadioGroup aria-label="option" name="option"  >
        <Grid alignItems="center">
          <FormControlLabel item xs="auto" value="a" control={<Radio />} label="Si" />
          <FormControlLabel item xs="auto" value="b" control={<Radio />} label="No" />
        </Grid>
        </RadioGroup> 
      </FormControl>
      </Grid>

      <Grid container marginTop={2} >
      <FormControl > 
      <h5>4. ¿Sufre de diabetes?</h5>
        <RadioGroup aria-label="option" name="option"  >
        <Grid alignItems="center">
          <FormControlLabel item xs="auto" value="a" control={<Radio />} label="Si" />
          <FormControlLabel item xs="auto" value="b" control={<Radio />} label="No" />
        </Grid>
        </RadioGroup> 
      </FormControl>
      </Grid>

      <Grid container marginTop={2} >
      <FormControl > 
      <h5>5. ¿Usa lentes?</h5>
        <RadioGroup aria-label="option" name="option"  >
        <Grid alignItems="center">
          <FormControlLabel item xs="auto" value="a" control={<Radio />} label="Si" />
          <FormControlLabel item xs="auto" value="b" control={<Radio />} label="No" />
        </Grid>
        </RadioGroup> 
      </FormControl>
      </Grid>

      <Grid container marginTop={2} >
      <FormControl > 
      <h5>6. ¿Ha tenido covid-19?</h5>
        <RadioGroup aria-label="option" name="option"  >
        <Grid alignItems="center">
          <FormControlLabel item xs="auto" value="a" control={<Radio />} label="Si" />
          <FormControlLabel item xs="auto" value="b" control={<Radio />} label="No" />
        </Grid>
        </RadioGroup> 
      </FormControl>
      </Grid>
    </div>
  );
}


{/* <FormControl component="fieldset"  sx={{ m: 0, width: 180, mt: 2 }}>
<Select
  multiple
  displayEmpty
  value={personName}
  onChange={handleChange}
  input={<OutlinedInput />}
  renderValue={(selected) => {
    if (selected.length === 0) {
      return <em>Seleccionar</em>;
    }

    return selected.join(", ");
  }}
  MenuProps={MenuProps}
  inputProps={{ "aria-label": "Without label" }}
>
  <MenuItem disabled value="">
    {/* <em>Seleccionar</em> */}
//   </MenuItem>
//   {names.map((name) => (
//     <MenuItem
//       key={name}
//       value={name}
//       style={getStyles(name, personName, theme)}>
//       {name}
//     </MenuItem>
//   ))}
// </Select>
// </FormControl> */}
