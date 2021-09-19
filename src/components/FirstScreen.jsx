import React, { useState } from 'react';
import Options from './Option';
import LandingPage from './landingPage';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

//styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: 'black',
    width: 300,
    fontSize: 16,
    fontFamily: 'Verdana,sans-serif',
  },
  DisabledLink :{
    pointerEvents: "none",
  },
  
}));

export default function FirstScreen() {
  const classes = useStyles();
  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);

  const canBeSubmitted = () => {
    // return checked ? setIsDisabled(true) : setIsDisabled(false);
    if (checked == true) {
      return setIsDisabled(true);
    } else {
      return setIsDisabled(false);
    }
  };

  const onCheckboxClick = () => {
    setChecked(!checked);
    return canBeSubmitted();
  };
  return (
    <div style={{ display: 'block', marginTop: 80 }}>
      <Grid container spacing={5} className={classes.root}>
        <Grid
          item
          xs={12}
          className={classes.paper}
          style={{ textAlign: 'left' }}
        >
          Welcome
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.paper}
          style={{ textAlign: 'left' }}
        >
          Select Your interest
        </Grid>

        <Options option="Business" onCheckboxClick={onCheckboxClick} />
        <Options option="Technology" onCheckboxClick={onCheckboxClick} />
        <Options option="Creative" onCheckboxClick={onCheckboxClick} />

        <Grid>
          <br />
          <br />
          <br />
          <br />
          <br />
           <Link to="/landing" style={{textDecoration:"none"
}} > 
            <Button
              variant="contained"
              color="primary"
              style={{ width: 300 }}
              disabled={isDisabled}
              
            >
              Jump In
            </Button>
           </Link> 
        </Grid>
      </Grid>
    </div>
  );
}
