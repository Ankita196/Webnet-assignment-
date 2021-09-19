import React,{useState} from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

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
  option: {
    border: 'block',
    borderColor: 'blue',
    color: 'blue',
  },
}));

 

export default function Options({option,onCheckboxClick}) {
  const classes = useStyles();
  
  return (
    <Grid xs={12} className={classes.paper}>
    <Paper component="form" className={classes.option} variant="outlined">
      <Typography>
        <Checkbox
          style={{
            color: 'blue',
          }}
          color="primary"
          onClick={onCheckboxClick}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        {option}
      </Typography>
    </Paper>
  </Grid>
  );
}
