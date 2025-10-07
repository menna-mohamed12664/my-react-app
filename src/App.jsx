import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimoials from "./components/testimoials/testimoials";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import VedioPlayer from "./components/folderPlayer/VedioPlayer";

function App({ subTitle, title}) {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="Whats We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="GALLERY" title="Campus photo" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What student says" />
        <Testimoials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VedioPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
