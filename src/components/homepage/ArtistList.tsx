'use client'

import React from 'react'
import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import { IArtist } from '@/types/artist'

interface ArtistListProps {
  artists: IArtist[]
}

const ArtistList: React.FC<ArtistListProps> = ({ artists }) => {
  if (artists.length === 0) {
    return <p>No artists found</p>
  }

  return (
    <Grid container spacing={4} justifyContent='flex-start'>
      {artists.map((artist) => (
        <Grid item xs={12} sm={6} md={4} key={artist.id}>
          <ListItem
            alignItems='flex-start'
            style={{
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
                style={{ width: '80px', height: '80px' }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={artist.name}
              secondary={`Album Count: ${artist.albumCount}`}
              style={{ marginLeft: '16px', color: '#333' }}
              secondaryTypographyProps={{ style: { color: '#555' } }}
            />
          </ListItem>
        </Grid>
      ))}
    </Grid>
  )
}

export default ArtistList
