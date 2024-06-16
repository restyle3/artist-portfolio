import { getProjects } from "@/sanity/sanity-utils";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const flashes = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-5xl font-extrabold">
        Hello! I&apos;m{" "}
        <span className="bg-gradient-to-r from-forest-green via-moss-green to-mint-green bg-clip-text text-transparent">
        Maria
        </span>
        !
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Welcome to my portfolio! Here you can find my flashes!
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Flashes</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {flashes.map((flash) => (
          <Link href={`/flashes/${flash.slug}`} key={flash._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-forest-green transition">
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
