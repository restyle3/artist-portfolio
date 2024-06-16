'use server'

import { getProjects } from "@/sanity/sanity-utils";
import "../../globals.css";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const flashes = await getProjects();

  return (
    <div className="max-w-5xl mx-auto ">
      <h2 className="font-bold text-gray-700 text-3xl">My Flashes</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {flashes.map((flash) => (
          <Link href={`/flashes-portfolio/flashes/${flash.slug}`} key={flash._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-forest-green transition">
          {flash.image && (
            <Image
              src={flash.image}
              alt={flash.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {flash.name}
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
}
