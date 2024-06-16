import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"

type Props = {
  params: { flash: string }
}

export default async function Flash({ params }: Props) {
  const slug = params.flash;
  const flash = await getProject(slug);

  return <div>
    <header className="flex items-center justify-between">
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{flash.name}</h1>
      <a href={flash.url} title="View Project" target="_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition">
        Book with me!
      </a>
    </header>

    <div className="text-lg text-gray-700 mt-5">
      <PortableText value={flash.content} />
    </div>

    <Image src={flash.image} alt={flash.name} width={1920} height={1080} className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />
  </div>
} 