import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support
import './Modal.scss';
import googleIcon from "../../assets/google-plus.svg"
import facebookIcon from "../../assets/facebook.svg"


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
                  <a className="Modal__btn-container Modal__btn-container--google" href="/auth/google">
                    <img src={googleIcon} className="Modal__icon"/>
                     <span>Sign in with Google</span>
                  </a>
                  <a className="Modal__btn-container Modal__btn-container--facebook" href="/auth/facebook">
                    <img src={facebookIcon} className="Modal__icon Modal__icon--facebook"/>
                     <span>Sign in with Facebook</span>
                  </a>
              </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
