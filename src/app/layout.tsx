import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waggle: CxD Leadership Comms",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <div className="">
        <Navbar/>
        </div>
        <div className=" md:px-8 px-4 lg:px-16 xl:px-32 2xl:px-64">
        <ClerkLoading>
                    <div className=" animate-spin ">
                    🐝

                    </div>
                 
                </ClerkLoading>
        {children}
        </div>
        </body>
    </html>
    </ClerkProvider>
  );

}