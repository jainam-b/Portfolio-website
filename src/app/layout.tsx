import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export const metadata: Metadata = {
  title: "Jainam Bagrecha - Portfolio | Freelance Web Developer & Software Engineer",
  description:
    "Jainam Bagrecha is a freelance web developer and software engineer specializing in building modern web applications using Next.js, React, Tailwind CSS, and Prisma. Hire a professional freelance developer for your next project.",
    icons: {
      icon: "/favicon.ico", 
    },
  keywords: [
    "Jainam Bagrecha portfolio",
    "freelance web developer",
    "software engineer",
    "Next.js developer",
    "React developer",
    "Tailwind CSS developer",
    "Prisma developer",
    "fullstack developer",
    "web application developer",
    "website development services",
    "custom website design",
    "ecommerce website development",
    "responsive web design",
    "website maintenance services",
    "website redesign services",
    "professional website builder",
    "affordable web development",
    "business website creation",
    "website optimization services",
    "mobile-friendly website development"
  ],
  authors: [
    { name: "Jainam Bagrecha", url: "https://jainambagrecha.vercel.app" },
  ],
  openGraph: {
    title: "Jainam Bagrecha - Freelance Web Developer & Software Engineer",
    description:
      "Jainam Bagrecha is a freelance web developer and software engineer specializing in building modern web applications using Next.js, React, Tailwind CSS, and Prisma.",
    url: "https://jainambagrecha.vercel.app",
    siteName: "Jainam Bagrecha",
    images: [
      {
        url: "https://res.cloudinary.com/diyfjjyzv/image/upload/v1723961237/WhatsApp_Image_2024-08-08_at_22.08.49_ivotqx.jpg",
        width: 1200,
        height: 630,
        alt: "Jainam Bagrecha - Freelance Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jainam Bagrecha - Portfolio | Freelance Web Developer & Software Engineer",
    description:
      "Jainam Bagrecha is a freelance web developer and software engineer specializing in building modern web applications using Next.js, React, Tailwind CSS, and Prisma.",
    images: [
      "https://res.cloudinary.com/diyfjjyzv/image/upload/v1723961237/WhatsApp_Image_2024-08-08_at_22.08.49_ivotqx.jpg",
    ], // Replace with your actual Twitter image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="QAzYie04iOwrlkfgMs_BzN63xmlTako21rLWV_BhEx0"
        />
        <link rel="canonical" href="https://jainambagrecha.vercel.app" />
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="99232320-8826-4a1a-a497-78095df0329e"
          async
        ></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "q0xj42caeu");
            `,
          }}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Jainam Bagrecha Portfolio",
            description:
              "A collection of projects by Jainam Bagrecha, a freelance web developer and software engineer.",
            url: "https://jainambagrecha.vercel.app/portfolio",
            creator: {
              "@type": "Person",
              name: "Jainam Bagrecha",
              jobTitle: "Freelance Web Developer & Software Engineer",
              url: "https://jainambagrecha.vercel.app",
            },
            image:
              "https://res.cloudinary.com/diyfjjyzv/image/upload/v1723961237/WhatsApp_Image_2024-08-08_at_22.08.49_ivotqx.jpg",
            sameAs: [
              "https://github.com/jainam-b",
              "https://www.linkedin.com/in/jainam-bagrecha-connect/",
              "https://x.com/Jainambagr67095",
            ],
          })}
        </script>
      </head>
      <body className={(font.className, "p-3 relative")}>
        <Background />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          themes={["light", "dark", "system"]}
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(150,19,10,0.5),rgba(255,255,255,0))]" />
          <main className="max-w-2xl space-y-20 mx-auto py-24 pt-12 px-1">
            {children}
          </main>
          <Analytics />
          {/* <Navbar /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
const Background = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-gradient-to-t from-background from-25%  h-full w-full" />
      <div className="fixed inset-0 h-screen w-full -z-20 bg-[linear-gradient(to_right,#8080800a_2px,transparent_2px),linear-gradient(to_bottom,#8080800a_2px,transparent_2px)] bg-[size:12px_16px] dark:opacity-75" />
    </>
  );
};
