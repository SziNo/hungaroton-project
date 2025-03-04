import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ArtistList from '@/components/homepage/ArtistList'
import { fetchArtists } from '@/services/fetchArtists'
import { IArtist } from '@/types/artist'

const HomePage: React.FC = async () => {
  const artists: IArtist[] = await fetchArtists()

  return (
    <Container
      maxWidth='lg'
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box sx={{ flexGrow: 1, width: '100%', textAlign: 'left' }}>
        <Typography variant='h2' gutterBottom>
          Welcome to Hungaroton Project
        </Typography>
      </Box>

      <ArtistList artists={artists} />
    </Container>
  )
}

export default HomePage
