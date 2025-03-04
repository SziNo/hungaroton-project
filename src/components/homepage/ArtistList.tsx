'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Pagination from '@mui/material/Pagination'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import ErrorDisplay from '@/components/ErrorDisplay'
import { IArtistListProps } from '@/types/artist'

const ArtistList: React.FC<IArtistListProps> = ({ artists, pagination }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('search') || 'Szabo')
  const [page, setPage] = useState(
    parseInt(searchParams.get('page') || '1', 10)
  )
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams()
        if (search) params.set('search', search)
        if (page > 1) params.set('page', page.toString())
        router.push(`?${params.toString()}`)
        setError(null)
      } catch (error) {
        console.error('Error updating URL:', error)
        setError('An error occurred. Please retry.')
      }
    }
    fetchData()
  }, [search, page, router])

  const handleRetry = () => {
    setError(null)
    router.refresh()
  }

  if (error || artists.length === 0) {
    return (
      <ErrorDisplay
        message={
          error ||
          'An error occurred. Please retry. (You might need to retry more than once)'
        }
        onRetry={handleRetry}
      />
    )
  }

  const handleSearchChange = (e: SelectChangeEvent<string>) => {
    setSearch(e.target.value as string)
    setPage(1)
  }

  return (
    <>
      {/* Filtering */}
      <FormControl
        sx={{
          my: 2,
          width: {
            xs: '100%',
            sm: '45%',
            md: '25%',
          },
        }}
      >
        <InputLabel>Search by Name</InputLabel>
        <Select
          value={search}
          onChange={handleSearchChange}
          label='Search by Name'
        >
          <MenuItem value='Szabo'>Szabo</MenuItem>
          <MenuItem value='Kovacs'>Kovacs</MenuItem>
          <MenuItem value='Nagy'>Nagy</MenuItem>
          <MenuItem value='Toth'>Toth</MenuItem>
          <MenuItem value='Horvath'>Horvath</MenuItem>
        </Select>
      </FormControl>

      {/* List */}
      <Grid container spacing={4} justifyContent='flex-start'>
        {artists.map((artist) => (
          <Grid item xs={12} sm={6} md={4} key={artist.id}>
            <ListItem
              alignItems='flex-start'
              sx={{
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                padding: '16px',
                height: '100%',
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt={artist.name}
                  src={artist.portrait}
                  sx={{ width: '80px', height: '80px' }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={artist.name}
                secondary={`Album Count: ${artist.albumCount}`}
                sx={{ marginLeft: '16px', color: '#333' }}
                secondaryTypographyProps={{ sx: { color: '#555' } }}
              />
            </ListItem>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Pagination
        count={pagination.total_pages}
        page={page}
        onChange={(e, value) => setPage(value)}
        sx={{ my: 3, display: 'flex', justifyContent: 'center' }}
      />
    </>
  )
}

export default ArtistList
