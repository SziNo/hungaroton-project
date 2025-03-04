import axios from 'axios'
import { IArtist } from '@/types/artist'

export async function fetchArtists(): Promise<IArtist[]> {
  try {
    const res = await axios.get('https://exam.api.fotex.net/api/artists', {
      params: {
        include_image: true,
        search: 'Szabo',
        page: 1,
        per_page: 50,
      },
    })

    return res.data.data || []
  } catch (error: any) {
    if (error.response) {
      console.error(
        'Response error:',
        error.response.status,
        error.response.data
      )
    } else if (error.request) {
      console.error('No response received:', error.request)
    } else {
      console.error('Request setup error:', error.message)
    }
    return []
  }
}
