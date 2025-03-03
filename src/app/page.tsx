'use client'

import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const HomePage = () => {
  return (
    <Container
      maxWidth='sm'
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box sx={{ flexGrow: 1, width: '100%' }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Hungaroton Project
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1, width: '100%' }}>
        <Typography variant='h4' gutterBottom>
          Welcome to MUI + Next.js
        </Typography>
        <Button variant='contained' color='primary'>
          Get Started
        </Button>
      </Box>
    </Container>
  )
}

export default HomePage
