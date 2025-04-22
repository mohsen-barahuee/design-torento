import React from "react";
import About from "../../modules/about/About";
import ClientMessages from "../../modules/client-messages/ClientMessages";
import OurTeam from "../../modules/our-team/OurTeam";

export default function AboutPage() {
  return (
    <>
      <About />
      <OurTeam />
      <ClientMessages />
    </>
  );
}
