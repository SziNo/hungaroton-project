interface IArtist {
  id: number
  name: string
  albumCount: number
  portrait: string
}

export interface IArtistListProps {
  artists: IArtist[]
  pagination: {
    current_page: number
    total_pages: number
    per_page: number
    total_items: number
  }
  isError: boolean
}

export interface IFetchArtistsResponse {
  artists: IArtist[]
  pagination: {
    current_page: number
    total_pages: number
    per_page: number
    total_items: number
  }
}
