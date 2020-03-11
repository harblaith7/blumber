import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support
import './Modal.scss';
import googleBtn from '../../assets/google-sign-in-btn.png'
import facebookBtn from '../../assets/facebook-sign-in-button.png'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const signInGoogle = () => {
    axios.get('https://github.com/Rob--W/cors-anywhere/localhost:8080/auth/google')
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        console.log(e)
      })
  }
  

  return (
    <div className="Modal">
      <button type="button" onClick={handleOpen} className="Modal__sign-in">
        Sign In
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="Modal__modal">
              <div className="Modal__heading-container">
                <h3 className="Modal__heading">
                  Sign in to 
                </h3>
                <h2 className="Modal__logo">
                  Blumber
                </h2>
              </div>
              <div className="Modal__description-container">
                <p className="Modal__description">
                  Log into Blumber to access your current courses or to buy new ones
                </p>
              </div>
              <div className="Modal__btns-container">
                  <div className="Modal__btn-container" onClick={signInGoogle}>
                    Sign In with Google
                  </div>
                  <div className="Modal__btn-container">
                    hi
                  </div>
              </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
