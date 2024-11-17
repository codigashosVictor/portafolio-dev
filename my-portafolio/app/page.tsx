import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import React from "react";
import BackgroundAnimation from "../components/BackgroundAnimation";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundAnimation />
      <Header />
      <Hero />
      <main className="relative z-10">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
