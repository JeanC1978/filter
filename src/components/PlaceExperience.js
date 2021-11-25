import * as React from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import PlaceExperiencetwo from './PlaceExperiencetwo';



export default function IndeterminateCheckbox() {
  const [checked, setChecked] = React.useState([false, false, false, false]);
  const [checkedWhitoutExpe, setCheckedWhitoutExpe] = React.useState([false, false, false, false, false]);

  const handleChange1 = (event) => {
    const checked = event.target.checked
    setChecked([checked, checked, checked, checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1], checked[2], checked[3]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked,  checked[2], checked[3]]);
  };

  const handleChange4 = (event) => {
    setChecked([checked[0], checked[1], event.target.checked, checked[3]]);
  };

  const handleChange5 = (event) => {
    setChecked([checked[0], checked[1], checked[2], event.target.checked]);
  };


  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Menos de 6 meses"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="1 año"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
        <FormControlLabel
        label="2 años"
        control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
      />
        <FormControlLabel
        label="3 años a más"
        control={<Checkbox checked={checked[3]} onChange={handleChange5} />}
      />
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label="Con experiencia"
        control={
          <Checkbox
            checked={checked[0] && checked[1] && checked[2] && checked[3]}
            // indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
<br/>
     <PlaceExperiencetwo/>

    </div> 
    
  );
}
