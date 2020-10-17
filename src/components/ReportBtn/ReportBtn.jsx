import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
// import './ReportBtn.module.css';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    position: 'absolute',
    left: 0,
    top: '60px',
    // zIndex: 100,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtonSize() {
  const classes = useStyles();

  return (
    <Fab color="secondary" aria-label="add" className={classes.margin}>
      <ReportProblemIcon fontSize="large" />
    </Fab>
  );
}
