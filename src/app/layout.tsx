import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/header";
import RivieraLogo from "../../public/RivieraLogo.png";
import RivieraLogoFooter from "../../public/RivieraLogo.png";

import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Riviera Resorts",
  description: "Riviera Resorts"
};

const HeaderData = {
  logo: {
    src: RivieraLogo,
    alt: "RivieraLogo",
  },
  contact: {
    label: "916398421691",
    href: "+916398421691",
  },
  links: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Rooms",
      href: "/rooms",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Wedding",
      href: "/wedding",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ],
};


const FooterData = {
  logo: {
    src: RivieraLogoFooter,
    alt: "wabi-sabi-logo",
  },
  description: "Highest Rated Resort In Rishikesh, India.",
  getInTouch: {
    address: {
      label:
        "Rattanpani, Neelkanth Road, Rishikesh, India",
      href: "https://www.google.com/maps/place/Wabi-Sabi+Resort/@19.852701,73.638693,16z/data=!4m9!3m8!1s0x3bdd8d3a9975f549:0x43e791e38e708b2!5m2!4m1!1i2!8m2!3d19.8527005!4d73.6386926!16s%2Fg%2F11hf9gpmdq?hl=en&entry=ttu",
    },
    contact1: {
      label: "+916398421691",
      href: "+916398421691",
    },
    contact2: {
      label: "+917817897700",
      href: "+917817897700",
    },
    mail: {
      label: "info@rivieraresortrishikesh.com",
      href: "info@rivieraresortrishikesh.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/public/images/Logo.png"
          type="image/png"
          sizes="any"
        /> */}
      </head>
      <body className={inter.className} suppressHydrationWarning={true} >
        {/* <LenisLayout> */}
        <Header {...HeaderData} />
        {children}
        <Footer {...FooterData} />
        {/* </LenisLayout> */}
      </body>
    </html>
  );
}
