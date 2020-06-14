// @flow

import React, { useState, useContext, useEffect } from 'react';
import {
  DIJKSTRA,
  BELLMAN_FORD,
  A_STAR,
  DFS,
  BFS,
  DELAY_SLOWEST,
  DELAY_SLOW,
  DELAY_NORMAL,
  DELAY_FAST,
  DELAY_FASTEST,
} from 'constants.js';
import { Context } from 'Provider';
import PathFinder from 'algorithms/index';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import PauseOutlinedIcon from '@material-ui/icons/PauseOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SplitButton from './DropDownButton';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  alighRight: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();
  const [type, setType] = useState(DIJKSTRA);
  const [pause, setPause] = useState(false);
  const context = useContext(Context);
  const {
    begin,
    end,
    updateItem,
    delay,
    pathFinder,
    clear,
    clearPath,
    board,
    isVisualized,
    setIsPathExist,
    setIsVisualized,
    setIsHelped,
  } = context;

  const [options, setOptions] = useState([
    'DIJKSTRA',
    'BELLMAN_FORD',
    'BFS',
    'DFS',
    'A_STAR',
  ]);

  const [speed, setSpeed] = useState([
    'SLOWEST',
    'SLOW',
    'NORMAL',
    'FAST',
    'FASTEST',
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [delayIndex, setDelayIndex] = useState(2);

  const onAlgoChange = e => {
    setType(e.target.value);
  };

  useEffect(() => {
    setType(options[selectedIndex]);
  }, [selectedIndex]);

  useEffect(() => {
    switch (speed[delayIndex]) {
      case 'SLOWEST':
        delay.current = Number(DELAY_SLOWEST);
        break;
      case 'SLOW':
        delay.current = Number(DELAY_SLOW);
        break;
      case 'NORMAL':
        delay.current = Number(DELAY_NORMAL);
        break;
      case 'FAST':
        delay.current = Number(DELAY_FAST);
        break;
      case 'FASTEST':
        delay.current = Number(DELAY_FASTEST);
        break;
      default:
        break;
    }
  }, [delayIndex]);

  const onDelayChange = e => {
    console.log(Number(e.target.value));
    delay.current = Number(e);
  };

  const onVisualize = () => {
    if (isVisualized) return;
    clearPath();
    setIsVisualized(true);

    pathFinder.current = new PathFinder[type]({
      begin: begin.current,
      end: end.current,
      updateItem,
      board: board.current,
    });
    const isPossiblePath = pathFinder.current.execute();
    setIsPathExist(isPossiblePath);
  };

  const onClearAll = () => {
    if (isVisualized && !pause) return;
    if (pause) setPause(false);
    setIsVisualized(false);

    clear();
  };

  const onClearPath = () => {
    if (isVisualized && !pause) return;
    if (pause) setPause(false);
    setIsVisualized(false);

    clearPath();
  };

  const onPause = () => {
    if (pause) {
      setPause(false);
      pathFinder.current.resumeTimers();
    } else {
      setPause(true);
      pathFinder.current.stopTimers();
    }
  };

  const onHelp = () => {
    setIsHelped(true);
  };

  return (
    <div className="content-header">
      <CssBaseline />
      <Grid
        container
        className={classes.root}
        alignItems="center"
        justify="flex-end"
        direction="row"
        marginLeft= "auto"
      >

      <SplitButton
        options={options}
        selectedIndex={selectedIndex}
        disabled={isVisualized}
        setSelectedIndex={setSelectedIndex}
        onChange={onAlgoChange}
        onVisualize={onVisualize}
      ></SplitButton>

      <SplitButton
        options={speed}
        selectedIndex={delayIndex}
        disabled={isVisualized}
        setSelectedIndex={setDelayIndex}
        onChange={onDelayChange}
      ></SplitButton>

      <Button
        variant="contained"
        color="secondary"
        onClick={onVisualize}
        disabled={isVisualized}
      >
        Visualize
      </Button>

      <Button
        variant="contained"
        color={!pause || !isVisualized ? 'primary' : 'secondary'}
        onClick={onClearAll}
        disabled={isVisualized && !pause}
      >
        Clear All
      </Button>
      <Button
        variant="contained"
        color={!pause || !isVisualized ? 'primary' : 'secondary'}
        onClick={onClearPath}
        disabled={isVisualized && !pause}
      >
        Clear Path
      </Button>

      <Button
        variant="contained"
        color={pause ? 'primary' : 'secondary'}
        className={classes.button}
        onClick={onPause}
        disabled={!isVisualized}
      >
        {pause ? <PlayArrowOutlinedIcon /> : <PauseOutlinedIcon />}
      </Button>

      <Button
        variant="contained"
        style={{ backgroundColor: 'rgb(102,176,50)' }}
        onClick={onHelp}
        disabled={isVisualized && !pause}
        type="button"
      >
        {<HelpOutlineOutlinedIcon></HelpOutlineOutlinedIcon>}
      </Button>
      </Grid>
    </div>
  );
};

export default Header;
