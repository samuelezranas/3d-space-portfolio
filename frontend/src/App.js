import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import OtherPortfolio from "./components/OtherPortfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Work />
      <OtherPortfolio />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
