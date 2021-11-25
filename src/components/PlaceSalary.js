import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {TextField} from '@mui/material';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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

const names = ["Oliver Hansen", "Van Henry", "April Tucker"];

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
      

      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '14ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="Desde"
        // value={names}
        // onChange={handleChange}
        size="small"
        helperText="En soles Neto"
      />
      <TextField
        id="outlined-uncontrolled"
        label="Hasta"
        // value={names}
        // onChange={handleChange}
        size="small"
        helperText="En soles Neto"
      />

    </Box>
 

    </div>
  );
}

