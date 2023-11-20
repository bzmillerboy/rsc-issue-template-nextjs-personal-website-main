import type { EncodeDataAttributeCallback } from '@sanity/react-loader/rsc'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { resolveHref } from '@/sanity/lib/utils'
import type { ProjectPayload, ShowcaseProject } from '@/types'

export interface ProjectListProps {
  data: any[] | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function ProjectList({ data, encodeDataAttribute }: ProjectListProps) {
  // Default to an empty object to allow previews on non-existent documents
  console.log('ProjectList:', data)

  return (
    <>
      {data && data.length > 0 && (
        <div className="mx-auto max-w-[100rem] rounded-md border">
          {data.map((project, key) => {
            const href = resolveHref(project._type, project.slug)
            if (!href) {
              return null
            }
            return (
              <Link
                key={key}
                href={href}
                data-sanity={encodeDataAttribute?.([
                  'showcaseProjects',
                  key,
                  'slug',
                ])}
              >
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}

export default ProjectList
