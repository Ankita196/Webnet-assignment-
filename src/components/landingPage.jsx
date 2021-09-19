import React from 'react';
import Feeds from './SecondScreen';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Grid from '@material-ui/core/Grid';

//Styles
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
    width: 400,
    fontSize: 16,
    fontFamily: 'Verdana,sans-serif',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  roots: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    width: 300,
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div style={{ display: 'block', margin: 40 }}>
      <Grid container spacing={3} className={classes.root}>
        <Grid
          item
          xs={12}
          className={classes.paper}
          style={{ textAlign: 'left', display: 'flex' }}
        >
          <Paper
            component="form"
            className={classes.root}
            style={{ width: 300, marginRight: 10 }}
          >
            {/* For Display search bar  */}
            <InputBase
              className={classes.input}
              placeholder="Search "
              inputProps={{ 'aria-label': 'search google maps' }}
            />
          </Paper>

          {/* For Display Notification Icon */}
          <Avatar style={{ backgroundColor: '#283593' }}>
            <NotificationsIcon />
          </Avatar>
        </Grid>

        {/* For Display buttons like All, Business, Technology */}

        <div style={{ display: 'flex' }}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            style={{ marginRight: 10 }}
          >
            All
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            style={{ marginRight: 10 }}
          >
            Business
          </Button>
          <Button size="small" variant="outlined" color="primary">
            Technology
          </Button>
        </div>
        <br />
      </Grid>

      {/* For Dsplay Feed */}
      <Feeds title="Feed" buttonName="See More" />
      <br />

      {/* For Dsplay live classes */}
      <Feeds title=" Free Live Classes" buttonName="Attend" />
    </div>
  );
}
