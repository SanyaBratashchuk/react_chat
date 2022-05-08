import { Box, Container, Grid, Button } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { Context } from '../..';
import './Login.scss';

export const Login = () => {

  const { auth } = useContext(Context);

  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      }).catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };
  
  return (
    <Container>
      <Grid
        style={{
          height: window.innerHeight - 50,
        }}
        container
        justifyContent='center'
        alignItems='center'
      >
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          sx={{
            width: 400,
            height: 400,
            bgcolor: '#313e40',
            borderRadius: 20
          }}>
          <Box p={5}>
            <Button variant='outlined' onClick={login}>
              Log in with Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};