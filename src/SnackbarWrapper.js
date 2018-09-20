import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import {closeSnackbar} from "./actions/index"

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

const mapStateToProps = state => {
  return { isSnackbarOpen: state.isSnackbarOpen, snackbarMessage: state.snackbarMessage };
};

const mapDispatchToProps = dispatch => {
  return {
    closeSnackbar: () => dispatch(closeSnackbar()),
  };
};

const handleClose = (dispatch) => function(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    dispatch();
}

const SnackbarWrapper = ({ isSnackbarOpen, closeSnackbar, snackbarMessage }) => 
    <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={ isSnackbarOpen }
          autoHideDuration={4000}
          onClose={ handleClose(closeSnackbar) }
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{snackbarMessage}</span>}
        />
    </div>
;

const ConnectedSnackbar = connect(mapStateToProps, mapDispatchToProps)(SnackbarWrapper);

export default ConnectedSnackbar;