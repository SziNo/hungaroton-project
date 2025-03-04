export interface IPageProps {
  searchParams: Promise<{
    search?: string
    page?: string
  }>
}
