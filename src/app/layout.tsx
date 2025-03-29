import { Providers } from "@/components";
import { cn } from "@/lib/utils";
import { base, heading } from "@/lib/font";
import "@/styles/globals.css";
import { ColorSchemeScript } from '@mantine/core';
import "@mantine/core/styles.css";
import { Inter } from "next/font/google";
import Head from "./head";
import { Navbar } from "@/components/navbar";

const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <ColorSchemeScript />
                <Head />
                <link
                    rel="preload"
                    href="/images/photo.png"
                    as="image"
                />
            </head>
            <body className={cn(
                "min-h-screen bg-background text-foreground antialiased font-heading relative",
                heading.variable,
                base.variable,
            )}>
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
};
