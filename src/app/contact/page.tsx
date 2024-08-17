import React from "react";
import Banner from "@/components/banner/banner";
import ContactBackground from "../../../public/Photos/DSC01690_11zon.webp";
import ContactForm from "./components/contact-form";
import Makeroomforadventure from "../(home)/components/makeroomforadventure";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Contact us - Riviera Resorts",
  description: "",
};

const BannerData = {
  subtitle: "",
  title: "",
  image: {
    src: ContactBackground,
    alt: "event-bg-image",
  },
};

function page() {
  return (
    <section>
      <Banner {...BannerData} />

      <div className="py-12">
        <ContactForm />
      </div>

      <div className="py-12">
        <Makeroomforadventure />
      </div>
    </section>
  );
}

export default page;
