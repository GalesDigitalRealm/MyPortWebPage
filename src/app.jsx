import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/Navbar";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer"; 
import Portfolio from "./components/portfolio/portfolio";
// import Services from "./components/services/services";
// import Testemonials from "./components/testemonials/testemonials";

const app = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      { <Portfolio /> }
      {/* <Testemonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default app;
