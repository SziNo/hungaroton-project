import axios from 'axios'
import { IFetchArtistsResponse } from '@/types/artist'

export async function fetchArtists(
  search: string = 'Szabo',
  page: number = 1
): Promise<IFetchArtistsResponse> {
  try {
    const res = await axios.get('https://exam.api.fotex.net/api/artists', {
      params: {
        include_image: true,
        search: search,
        page: page,
        per_page: 50,
      },
    })

    return {
      artists: res.data.data || [],
      pagination: res.data.pagination,
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
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
    } else {
      console.error('Unexpected error:', error)
    }

    // default fallback resp in case of error
    return {
      artists: [],
      pagination: {
        current_page: 1,
        total_pages: 1,
        per_page: 50,
        total_items: 0,
      },
    }
  }
}
