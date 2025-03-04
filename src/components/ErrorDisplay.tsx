'use client'

import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { IErrorDisplayProps } from '@/types'

const ErrorDisplay: React.FC<IErrorDisplayProps> = ({ message, onRetry }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        mt: 4,
      }}
    >
      <Typography variant='h6' gutterBottom>
        {message}
      </Typography>
      <Button
        variant='outlined'
        onClick={onRetry}
        sx={{
          mt: 2,
          color: 'red',
          borderColor: 'red',
          '&:hover': {
            borderColor: 'darkred',
            backgroundColor: 'rgba(255, 0, 0, 0.04)',
          },
        }}
      >
        Retry
      </Button>
    </Box>
  )
}

export default ErrorDisplay
