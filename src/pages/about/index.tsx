import React, { useEffect } from "react";
import AboutHero from "../../components/about-hero";
import AboutPost from "../../components/about-post";
import Team from "../../components/team";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AboutHero />
      <AboutPost />
      <Team />
    </>
  );
};

export default About;
