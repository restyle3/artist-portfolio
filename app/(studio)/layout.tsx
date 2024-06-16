import "../globals.css";

export const metadata = {
  title: "Fairies and Goblins",
  description: "Maria's portfolio!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
