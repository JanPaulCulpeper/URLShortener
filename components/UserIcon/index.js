import React from 'react';

import {
  Avatar,
  MenuItem,
  Popper,
  IconButton,
  Paper,
  MenuList,
  Grow,
  ClickAwayListener
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  paper: {
    marginRight: theme.spacing(2)
  },
  avatar: {
    backgroundColor: purple[500]
  }
}));

const UserIcon = ({ Letter, Actions }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Avatar className={classes.avatar}>{Letter}</Avatar>
      </IconButton>
      <div className={classes.root}>
        <div>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom'
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      {Actions.map((action) => {
                        return (
                          <MenuItem
                            onClick={(e) => {
                              action.act();
                              handleClose(e);
                            }}
                          >
                            {action.name}
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    </>
  );
};

UserIcon.propTypes = {
  Letter: PropTypes.arrayOf(Object),
  Actions: PropTypes.arrayOf(Object)
};

UserIcon.defaultProps = {
  Letter: 'E',
  Actions: [{ name: 'ex1' }, { name: 'ex2' }, { name: 'ex3' }]
};

export default UserIcon;
