import { ChartContextProvider } from "@/context/chart-context";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helios Task",
  description: "Developed by Renan Fayad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex h-screen flex-col px-8 py-4`}>
        <ChartContextProvider>{children}</ChartContextProvider>
      </body>
    </html>
  );
}
