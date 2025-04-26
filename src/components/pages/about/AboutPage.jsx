import React from "react";
import About from "../../modules/about/About";
import ClientMessages from "../../modules/client-messages/ClientMessages";
import OurTeam from "../../modules/our-team/OurTeam";
import Banner from "../../modules/banner/banner";

export default function AboutPage() {
  return (
    <div >
      <Banner />
      <About />
      <OurTeam />
      <ClientMessages />
    </div>
  );
}
