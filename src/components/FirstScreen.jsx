import React from 'react';
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
    textAlign: 'center',
    color: 'black',
    width: 300,
    fontSize: 16,
    fontFamily: 'Verdana,sans-serif',
  },
}));

export default function App() {
  const classes = useStyles();
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
          <Paper component="form">
            <Typography>
            
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              Business 
            </Typography>
          </Paper>
        </Grid>
        <Grid xs={12} className={classes.paper}>
          <Paper component="form">
            <Typography>
            
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              Business 
            </Typography>
          </Paper>
        </Grid>
        <Grid xs={12} className={classes.paper}>
          <Paper component="form">
            <Typography>
             
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              Business 
            </Typography>
          </Paper>
        </Grid>

        <Grid>
          <Button variant="contained" color="primary">
            Jump DOwn
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
