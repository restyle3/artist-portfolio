import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

export const metadata = {
  title: "Fairies and Goblins",
  description: "Maria's portfolio!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //get all pages
  const pages = await getPages();

  return (
    <html>
      <body>
        <div className="flex h-screen">
          <aside className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2">
            <nav className="mt-6">
              {pages.map((page) => (
                <Link key={page._id} href={`/${page.slug}`}>
                  <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    {page.title}
                  </div>
                </Link>
              ))}
            </nav>
          </aside>
            <main className="flex-1 p-10 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
