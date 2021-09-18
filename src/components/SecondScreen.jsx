import  React ,{useState}from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


export default function RowRadioButtonsGroup() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);

  const canBeSubmitted = () => {
    return checked ? setIsDisabled(true) : setIsDisabled(false);
  };

  const onCheckboxClick = () => {
    setChecked(!checked);
    return canBeSubmitted();
  };
  return (
    <div >
    <FormControl component="fieldset">
      <FormLabel component="legend">Welcome <br/>Select your interest</FormLabel>
     
        <FormControlLabel value="female" control={<Checkbox />} label="Female"  onClick={onCheckboxClick} />
        <FormControlLabel value="male" control={<Checkbox />} label="Male"  onClick={onCheckboxClick}/>
        <FormControlLabel value="other" control={<Checkbox />} label="Other"  onClick={onCheckboxClick}/>
       
        <Button variant="contained" color="primary" style={{width:300}} 
     disabled={isDisabled}>
       Jump In
     </Button>
    </FormControl>
    
     </div>
  );
}