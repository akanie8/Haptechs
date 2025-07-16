import React, { useState } from "react";
import Hero from "./sections/Hero";
import Header from "./sections/Header";
import NavMobile from "./components/NavMobile";
import About from "./sections/About";
import Feature from "./sections/Feature";
import Footer from "./components/Footer";
import Contact from "sections/Contact";
const App = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <div className="relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex">
      <Header setNavMobile={setNavMobile} />
      <Hero />
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <About />
      <Feature />
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
