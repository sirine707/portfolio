import "./CTA.css";
import { Button } from "../../components/Buttons/Buttons";

import { useRef } from "react";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import { SlideInUp } from "../../transitions/Slide";
import { FadeIn } from "../../transitions/Fade";

function CTA() {
  const ctaRef = useRef();
  const ctaTimeline = useRef();

  useGSAP(
    () => {
      ctaTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 50%",
          // markers: true,
          toggleActions: "play none none none",
        },
      });

      ctaTimeline.current
        .add(SlideInUp(ctaRef.current.querySelectorAll(".slide-in-up")))
        .add(
          FadeIn(ctaRef.current.querySelectorAll(".fade-in"), {
            duration: 0.4,
          }),
        );

      return () => {
        ctaTimeline.current.kill();
      };
    },
    {
      scope: ctaRef, // Limits selector to children of container
      dependencies: [], // Run once after mount
      revertOnUpdate: false, // optional
    },
  );

  return (
    <section id="cta" className="section px-0!" ref={ctaRef}>
      <div className="slide-in-up container mx-auto flex max-w-[var(--container-width)] flex-col gap-12">
        <div className="cta min-h-25 rounded-3xl px-6 py-14 text-center">
          <h2 className="fade-in mx-auto mb-4 max-w-60 text-2xl leading-tight font-semibold tracking-tight text-white md:max-w-xl lg:text-3xl">
            You want to Build & Monetize your AI Business?
          </h2>
          <p className="fade-in mx-auto mb-7 max-w-lg text-base font-light text-stone-200">
            Need a developer who speaks both AI and product ? I build smart
            systems that are as intuitive as they are powerful — let’s talk. ✨
          </p>
          <div className="fade-in">
            <Button
              type="secondary"
              href="https://cal.com/sirinejnayeh"
              newtab="true"
            >
              Book a Free Call
            </Button>
          </div>
          <p className="fade-in mx-auto mt-7 max-w-lg text-base font-light text-stone-200">
            or send me an email at: <a href="mailto:contact@sirinejnayeh.com" className="text-primary-blue underline">contact@sirinejnayeh.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTA;
