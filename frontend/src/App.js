import React from 'react';
import Header from './components/Header';
import Collection from './components/Collection';
import {Container, Typography} from '@mui/material'

function App() {
  return (
    <Container sx={{height: '100vh', bgcolor:'#ced5a8'}}>
      <Typography variant="h1">Vinyl App</Typography>
    </Container>
  );
}

export default App;