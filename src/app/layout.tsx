import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Empire",
  description: "By ReddyPro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><script src="path/to/dist/feather.js"></script></head>
      <body>
        {children}
      </body>
    </html>
  );
}
