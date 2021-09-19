import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

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
  option :{
border:"block",
borderColor:"blue",
color:"blue"

  }
}));

export default function App() {
  const classes = useStyles();
  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);

  const canBeSubmitted = () => {
    // return checked ? setIsDisabled(true) : setIsDisabled(false);
    if (checked==true){
      return setIsDisabled(true)
    }else{
      return setIsDisabled(false)
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

        <Grid xs={12} className={classes.paper}>
          <Paper component="form"  className={classes.option} variant="outlined">
            <Typography>
            
              <Checkbox  style ={{
                  color: "blue",
                }}
                color="primary"
               
                onClick={onCheckboxClick}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                
              />
              Business 
            </Typography>
          </Paper>
        </Grid>
        <Grid xs={12} className={classes.paper}>
          <Paper component="form"  className={classes.option} variant="outlined">
            <Typography>
            
              <Checkbox  style ={{
                  color: "blue",
                }}
                color="primary"
               
                onClick={onCheckboxClick}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                
              />
             Technology
            </Typography>
          </Paper>
        </Grid>
        <Grid xs={12} className={classes.paper}>
          <Paper component="form" className={classes.option} variant="outlined">
            <Typography>
             
              <Checkbox
                color="primary"
                onClick={onCheckboxClick}
                style ={{
                  color: "blue",
                }}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            Creative
            </Typography>
          </Paper>
        </Grid>

        <Grid>
          <br/><br/><br/><br/><br/>
          <Button variant="contained" color="primary" style={{width:300}} 
          disabled={isDisabled}>
            Jump In
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
