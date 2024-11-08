import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata: Metadata = {
	title: "Camilo Lagos - Full Stack Developer",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
