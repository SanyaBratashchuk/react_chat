import React from 'react';
import { NavLink } from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../../routes/utils/constants';
import { AppBar, Toolbar, Grid, Button } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../..';

export const Navigation = () => {
  const {auth} = React.useContext(Context);
  const [user] = useAuthState(auth);
  
  const isAuth = user;

  return (
    <AppBar position='static' color='primary' >
      <Toolbar variant='dense'>
        <Grid container justifyContent='flex-end'>
          {isAuth ? (
            <NavLink to={LOGIN_ROUTE}>
              <Button
                variant='outlined'
                color='secondary'
                onClick={() => auth.signOut()}
              >
                sign out
              </Button>
            </NavLink>
          ) : (
            <NavLink to={CHAT_ROUTE}>
              <Button
                variant='outlined' color='secondary'
              >
                Log in
              </Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};