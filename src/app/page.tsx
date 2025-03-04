import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ArtistList from '@/components/homepage/ArtistList'
import { fetchArtists } from '@/services/fetchArtists'
import { IPageProps } from '@/types'

const HomePage: React.FC<IPageProps> = async ({ searchParams }) => {
  const { search, page, type, letter } = await searchParams

  const searchValue = search || 'Szabo'
  const pageValue = parseInt(page || '1', 10)
  const typeValue = type || undefined
  const letterValue = letter || undefined

  let artistsResponse

  try {
    artistsResponse = await fetchArtists(
      searchValue,
      pageValue,
      typeValue,
      letterValue
    )
  } catch (error) {
    console.error('Error fetching artists:', error)
    artistsResponse = {
      artists: [],
      pagination: {
        current_page: 1,
        total_pages: 1,
        per_page: 50,
        total_items: 0,
      },
      isError: true,
    }
  }

  const { artists, pagination, isError } = artistsResponse

  return (
    <Container
      maxWidth='lg'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box sx={{ flexGrow: 1, width: '100%', textAlign: 'left' }}>
        <Typography
          variant='h1'
          gutterBottom
          sx={{
            fontSize: {
              xs: '1rem',
              sm: '2rem',
              md: '3rem',
            },
            textAlign: 'center',
            pt: 2,
          }}
        >
          Welcome to Hungaroton Project
        </Typography>
        <ArtistList
          artists={artists}
          pagination={pagination}
          isError={isError}
        />
      </Box>
    </Container>
  )
}

export default HomePage
