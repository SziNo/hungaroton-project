'use client'

import dynamic from 'next/dynamic'
import { IArtistListProps } from '@/types/artist'
import Typography from '@mui/material/Typography'

const ArtistList = dynamic(() => import('./ArtistList'), {
  ssr: false,
  loading: () => <Typography>Loading...</Typography>,
})

const ArtistListLoader: React.FC<IArtistListProps> = (props) => {
  return <ArtistList {...props} />
}

export default ArtistListLoader
