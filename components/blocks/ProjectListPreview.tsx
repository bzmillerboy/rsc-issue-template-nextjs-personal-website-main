'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { projectsQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { ProjectPayload } from '@/types'

import ProjectList from './ProjectList'

type Props = {
  initial: QueryResponseInitial<ProjectPayload[] | null>
}

export default function ProjectListPreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<ProjectPayload[] | null>(
    projectsQuery,
    {},
    { initial },
  )

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  return <ProjectList data={data} encodeDataAttribute={encodeDataAttribute} />
}
