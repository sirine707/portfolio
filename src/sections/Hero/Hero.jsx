import { Button } from "../../components/buttons/Buttons";
import SocialButtons from "../../components/buttons/SocialButtons";
import { useRef } from "react";

import { SlideInUp, SlideInRight } from "../../transitions/Slide";
import { FadeIn } from "../../transitions/Fade";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroContainerRef = useRef();
  const heroTimeline = useRef();

  useGSAP(
    () => {
      heroTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: heroContainerRef.current,
          start: "top 50%",
          // markers: true,
          toggleActions: "play none none none",
        },
      });

      heroTimeline.current
        .add(
          [
            SlideInUp(
              heroContainerRef.current.querySelectorAll(".slide-in-up"),
            ),
            SlideInRight(
              heroContainerRef.current.querySelectorAll(".slide-in-right"),
            ),
          ],
          "<",
        )

        .add(FadeIn(heroContainerRef.current.querySelectorAll(".fade-in")));

      return () => heroTimeline.current.kill();
    },
    {
      scope: heroContainerRef, // Limits selector to children of container
      dependencies: [], // Run once after mount
    },
  );

  return (
    <section
      id="hero"
      className="px-[1rem] pt-[5rem] md:px-[2rem] lg:px-0"
      ref={heroContainerRef}
    >
      <div className="container mx-auto flex max-w-[var(--container-width)] flex-col gap-12">
        <div className="hero-content flex flex-col justify-between gap-12 text-center md:flex-row md:gap-8 md:text-start">
          <div className="flex basis-1/2 flex-col justify-center">
            <h1 className="slide-in-up text-4xl font-semibold tracking-tighter md:mb-1 md:text-5xl lg:text-6xl">
              Sirine Jnayeh
            </h1>
            <div className="slide-in-up mx-auto mb-3 flex md:mx-0">
              <p className="inline text-xl tracking-tight md:text-2xl lg:text-2xl">
                AI & Full-Stack Developer | Turning Ideas into Scalable
                Solutions
              </p>
            </div>

            <div className="slide-in-up mx-auto mb-9 max-w-[85%] text-[var(--primary-dark-blue)]/75 md:mx-0 md:max-w-[90%] md:text-lg lg:max-w-[90%]">
              <p className="inline leading-6 tracking-tight">
                I’ve been building smart, user-focused applications— now focused
                on GenAI, web scraping, and real-time data platforms.
              </p>
            </div>

            <div className="slide-in-up mx-auto inline-flex flex-wrap gap-2 md:mx-0">
              <Button
                type="primary"
                href="https://www.linkedin.com/in/sirine-jnayeh/"
                newtab="true"
                className="cursor-auto"
              >
                Hire Me
              </Button>
              <Button
                type="secondary"
                href="https://drive.google.com/file/d/1vPsWmFc3UhW2daQwCBuTUgyYeyYs5VSt/view?usp=sharing"
                newtab="true"
                className="cursor-auto"
              >
                Check My Resume
              </Button>
            </div>
          </div>

          <div className="slide-in-right hero-image flex basis-1/2 content-center md:justify-end">
            <img
              src="/sirine.jpg"
              alt="Portrait Image of Sirine."
              className="aspect-square w-full max-w-md rounded-full object-cover object-top p-5"
            />
          </div>
        </div>

        <div className="fade-in flex items-center gap-10 lg:gap-14">
          <hr className="flex-grow text-gray-300" />

          <div className="flex flex-col items-center gap-4 text-center text-base font-medium tracking-tight text-stone-500 capitalize">
            <p>Stay connected — follow me!</p>
            <SocialButtons
              size="lg:h-8 lg:w-8 h-7 w-7"
              classes="gap-0 md:gap-2"
            />
          </div>

          <hr className="flex-grow text-gray-300" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
