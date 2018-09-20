import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from "react-redux";

const styles = {
  root: {
    flexGrow: 1,
  },
};

const mapStateToProps = state => {
  return { isLoading: state.isLoading };
};

const Spinner = ({ isLoading, classes }) => 
    <div className={classes.root}>
        { isLoading && <LinearProgress /> }
    </div>
;

const connectedList = connect(mapStateToProps)(Spinner);

export default withStyles(styles)(connectedList);