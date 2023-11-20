import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import ProjectList from '@/components/blocks/ProjectList'
import { loadProjects } from '@/sanity/loader/loadQuery'
const ProjectListPreview = dynamic(
  () => import('@/components/blocks/ProjectListPreview'),
)

export default async function ProjectListLoader() {
  const initial = await loadProjects()
  //   console.log('ProjectListLoader:', initial)

  if (draftMode().isEnabled) {
    return <ProjectListPreview initial={initial} />
  }

  if (!initial) {
    notFound()
  }

  return <ProjectList data={initial.data} />
}
