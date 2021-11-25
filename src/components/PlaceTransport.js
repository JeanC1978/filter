import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
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

const name = ["Si", "No", "Indistinto"];

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
      <h5>El postulante declara que tiene facilidad para acceder a medios de transporte público o dispone de uno privado.</h5>
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
