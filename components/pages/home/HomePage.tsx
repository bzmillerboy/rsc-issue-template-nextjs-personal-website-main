import type { EncodeDataAttributeCallback } from '@sanity/react-loader/rsc'
import { Suspense } from 'react'

import ProjectListLoader from '@/components/blocks/ProjectListLoader'
import { Header } from '@/components/shared/Header'
import type { HomePagePayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], showcaseProjects = [], title = '' } = data ?? {}

  return (
    <div className="space-y-20">
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
      {/* All projects */}
      <Suspense>
        <ProjectListLoader />
      </Suspense>
    </div>
  )
}

export default HomePage
