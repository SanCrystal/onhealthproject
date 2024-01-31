import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Health",
  description: "One stop Online Health Consultation",
};

import { Inter, Familjen_Grotesk, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";

 const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter"
});
 const familgen = Familjen_Grotesk({
	subsets: ["latin"],
	variable: "--font-familgen"
});
 const manrope = Manrope({
	subsets: ["latin"],
	variable: "--font-manrope"
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<body
				className={`${inter.variable} ${manrope.variable} ${familgen.variable} font-body`}
			>
				<main className="flex flex-col min-h-screen relative">
					<Navbar/>
					<div className="flex-grow flex-1">	{children}
					</div>
				</main>
			</body>
		</html>
	);
}
