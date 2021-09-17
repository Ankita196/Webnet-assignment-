import React from 'react';
 import Checkbox from '@material-ui/core/Checkbox';
 import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function SecondScreen() {
  const [value, setValue] = React.useState('Buisness');

  const handleChange = (event) => {
    setValue(event.target.value);

  };

  return (
    <FormControl component="fieldset">
     <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="Buisness" control={<Checkbox />} label="Buisness" />
        <FormControlLabel value="Technology" control={<Checkbox />} label="Technology" />
        <FormControlLabel value="Creative" control={<Checkbox />} label="Creative" />
  
      </RadioGroup>
    </FormControl>
  );
}
