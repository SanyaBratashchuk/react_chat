import { Avatar, Box, Button, Container, Grid, TextField } from '@mui/material';
import React, { useState, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../..';
import { collection, addDoc, query, orderBy } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
export const Chat = () => {

  const { auth, db } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');
  const [messages, loading] = useCollectionData(query(collection(db, 'messages'), orderBy('createdAt')));

  const sendMessage = async () => {
    try {
      await addDoc(collection(db, 'messages'), {
        userId: user?.uid,
        displayName: user?.displayName,
        photoUrl: user?.photoURL,
        text: value,
        createdAt: serverTimestamp(),
      });
      setValue('');
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <Container>
      <Grid
        container
        style={{
          height: window.innerHeight - 50,
        }}
        justifyContent='center'
        alignItems='center'
      >
        <Box sx={{
          width: '60%',
          height: '70vh',
          border: '1px solid gray',
          overFlowY: 'auto'
        }}>
          {messages?.map(message => (
            <Grid 
              key={message.id} 
              container
              direction='column'
              alignSelf={message.userId === user?.uid ? 'flex-end' : 'flex-start'}
            >
              <Grid container>
                <Avatar src={message.photoUrl} />
                <div>{message.displayName}</div>
              </Grid>
              <div>
                {message.text}
              </div>
            </Grid>
          ))}
        </Box>
        <Grid
          container
          direction='column'
          alignItems='flex-end'
          width='60%'
        >
          <TextField
            variant='outlined'
            fullWidth
            maxRows={2}
            style={{
              marginTop: '-20px',
              marginBottom: '5px',
            }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            variant='outlined'
            onClick={sendMessage}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};