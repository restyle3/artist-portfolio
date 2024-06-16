import { getProjects } from "@/sanity/sanity-utils";
import "../globals.css";
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
    </div>
  );
}
