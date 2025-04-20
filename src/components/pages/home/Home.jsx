import React from "react";
import About from "../../modules/about/About";
import OurProjects from "../../modules/our-projects/OurProjects";
import OureService from "../../modules/our-service/OureService";

export default function Home() {
  return (
    <>
      <About />
      <OurProjects />
      <OureService />
    </>
  );
}
