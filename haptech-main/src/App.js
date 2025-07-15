import React, { useState } from "react";
import Hero from "./sections/Hero";
import Header from "./sections/Header";
import NavMobile from "./components/NavMobile";
import About from "./sections/About";
import Video from "./components/Video";
import Feature from "./sections/Feature";
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
      <Video />
      <Feature />
    </div>
  );
};

export default App;
