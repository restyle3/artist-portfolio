import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import '@/app/globals.css'

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div><h1 className="bg-gradient-to-r from-forest-green via-moss-green to-mint-green bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{page.title}</h1>
      <div className="text-lg text-gray-700 mt-10"><PortableText value={page.content} /></div>
    </div>
  )
}

