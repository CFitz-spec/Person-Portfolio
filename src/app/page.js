"use client"; //Why is this here? Next.js renders on server side by default. This means all js is rendered on client side
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PricingPlans from "@/components/PricingPlans";
import Projects from "@/components/Projects";
import Questions from "@/components/Questions";
import Reviews from "@/components/Reviews";
import Skills from "@/components/Skills";
import Load from "@/components/sub/Load";
import Toggle from "@/components/sub/Toggle";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [id, setId] = useState(0);
  const compRef = useRef(null);

  /**
   * UseEffect purpose.
   * What this does is
   * observer is a new IntersectionObserver(this monitors changes of intersection with elements) with has two paras
   * A cb that iterates for each entry (intersection)
   * then if the intersection is intersecting with another element
   * setId to that target id element.
   *
   * options para threshold means that there must be 30% of the element is intersecting for it to trigger
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersection = entry.isIntersecting;
          if (intersection) {
            setId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    /**
     * This part converts the useRef compRef into an array
     * iterates through the array of setting each element to be observered by the observer const created above.
     */
    const compArray = Array.from(compRef.current.children);
    compArray.forEach((comp) => {
      observer.observe(comp);
    });
  }, []);
  return (
    <>
      <Load />
      <Toggle>
        <Navbar id={id} />
        <div className="w-min" ref={compRef}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Reviews />
          <Projects />
          <PricingPlans />
          <Contact />
          <Questions />
        </div>
      </Toggle>
    </>
  );
}
