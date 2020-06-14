import React, { useEffect, useContext, useState } from 'react';

import Header from 'components/Header/Header';

import './Container.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ContainerContent from './Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Paper from '@material-ui/core/Paper';
import BottomNavBar from './BottomNavBar';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      overflow: 'hidden',
    },
  },
  alignRight: {
    margin: theme.spacing(1),
  },
  BottomNavigation: {
    width: 500,
  },
}));

export default function MainContainer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <AppBar position="relative" maxHeight="10vh">
          <Grid container>
            <Grid
              container
              item
              xs={4}
              alignItems="center"
              justify="flex-start"
              justifyContent="space-between"
              direction="row"
            >
              <Typography
                variant="h5"
                className={classes.title}
                style={{ paddingLeft: '20px' }}
              >
                Algorithm Visualizer
              </Typography>
            </Grid>

            <Grid
              container
              item
              xs={8}
              alignItems="center"
              justify="flex-end"
              direction="row"
            >
              <Header></Header>
            </Grid>
          </Grid>
        </AppBar>

        <ContainerContent></ContainerContent>
      </Container>
      <Grid
        container
        item
        xs={12}
        alignItems="center"
        justify="center"
        direction="row"
        margin="10px"
      >
        <BottomNavBar></BottomNavBar>
      </Grid>
    </React.Fragment>
  );
}
