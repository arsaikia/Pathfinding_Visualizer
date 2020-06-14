import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));

export default function BottomNavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        item
        xs={12}
        alignItems="center"
        justify="center"
        direction="row"
        margin="10px"
      >
        <a
          target="_blank"
          href="https://github.com/arsaikia"
          onclick="window.open('https://github.com/arsaikia')"
        >
          <GitHubIcon color="action" />
        </a>
        <Box mx="10px"></Box>
        <Typography variant='h6'>{'    Created by Arunabh Saikia   '}</Typography>
        <Box mx="10px"></Box>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/arsaikia/"
          onclick="window.open('https://www.linkedin.com/in/arsaikia/')"
        >
          <LinkedInIcon color="action" />
        </a>
      </Grid>
    </div>
  );
}
