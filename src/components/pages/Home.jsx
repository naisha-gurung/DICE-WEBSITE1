import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import JoinCommunity from "../JoinCommunity";
import BlogSlider from "../BlogSlider";
import VideoIntro from "../videoIntro";
import OrgForYou from "../OrgForYou";
import AboutSec from "../AboutSec";
import FAQSection from "../FAQSection";
import Footer from "../Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSec />
      <BlogSlider />
      <OrgForYou />
      <VideoIntro />
      <FAQSection />
      <Footer />
      <JoinCommunity />
    </div>
  );
}
