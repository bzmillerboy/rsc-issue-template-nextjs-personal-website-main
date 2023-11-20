import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { HomePage } from '@/components/pages/home/HomePage'
import { studioUrl } from '@/sanity/lib/api'
import { loadHomePage } from '@/sanity/loader/loadQuery'
// Comment this out to disable the preview component (client component) and the
// child component (server component) ProjectListLoader will work as expected.

const HomePagePreview = dynamic(
  () => import('@/components/pages/home/HomePagePreview'),
)

export default async function IndexRoute() {
  const initial = await loadHomePage()

  // Comment this out to disable the preview component (client component) and the
  // child component (server component) ProjectListLoader will work as expected.
  if (draftMode().isEnabled) {
    return <>HomepagePreview Component</>
    // return <HomePagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className="text-center">
        You don&rsquo;t have a homepage yet,{' '}
        <Link href={`${studioUrl}/desk/home`} className="underline">
          create one now
        </Link>
        !
      </div>
    )
  }

  return <HomePage data={initial.data} />
}
