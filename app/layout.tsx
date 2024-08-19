import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/NavbarComponents/Navbar";
import AnimatedCursor from "react-animated-cursor"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "SEOIT",
  description: "The startup template from Magic UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <AnimatedCursor
          color='255, 255, 255' // Cursor color in RGB format
          innerSize={8} // Size of the inner cursor
          outerSize={0} // Size of the outer cursor
          outerAlpha={0.3} // Opacity of the outer cursor
          innerScale={10} // Scale of the inner cursor
          outerScale={10} // Scale of the outer cursor
          clickables={['button', 'a']} // Elements that trigger cursor animations
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <SiteHeader />
          {/* <NavbarDemo /> */}
          {children}
          <SiteFooter />

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}


