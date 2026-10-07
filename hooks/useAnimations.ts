"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function useAnimations(
  root: RefObject<HTMLDivElement | null>,
  cursor: RefObject<HTMLDivElement | null>,
  cursorDot: RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: false, lerp: 0.085 });

    const raf = (time: number) => {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    };
    const rafId = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
      intro
        .set(".reveal-item", { y: 70, opacity: 0 })
        .set(".hero-photo", { scale: 1.18, opacity: 0, x: 70 })
        .set(".hero-word", { yPercent: 110 })
        .to(".loader-line", { scaleX: 1, duration: 0.9, ease: "power3.inOut" })
        .to(".loader", { yPercent: -100, duration: 0.9, delay: 0.2, ease: "power4.inOut" })
        .to(".hero-photo", { scale: 1, opacity: 1, x: 0, duration: 1.35 }, "-=0.35")
        .to(".hero-word", { yPercent: 0, duration: 1.1, stagger: 0.08 }, "-=0.95")
        .to(".reveal-item", { y: 0, opacity: 1, duration: 0.9, stagger: 0.07 }, "-=0.7")
        .fromTo(".hero-orb", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4 }, "-=1.0");

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(el, { y: 75, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true }
        });
      });

      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, i) => {
        gsap.fromTo(card, { x: i % 2 ? 90 : -90, opacity: 0, rotate: i % 2 ? 2 : -2 }, {
          x: 0, opacity: 1, rotate: 0, duration: 1.05, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 84%", once: true }
        });
      });

      gsap.utils.toArray<HTMLElement>(".skill-row").forEach((row) => {
        const bar = row.querySelector(".skill-fill");
        gsap.fromTo(bar, { scaleX: 0 }, {
          scaleX: 1, duration: 1.25, ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 90%", once: true }
        });
      });

      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 24,
        repeat: -1,
        ease: "none"
      });

      gsap.to(".hero-photo", {
        y: -38,
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.2 }
      });

      gsap.to(".hero-copy", {
        y: 110,
        opacity: 0.55,
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 }
      });
    }, root);

    const mouse = (e: MouseEvent) => {
      if (!cursor.current || !cursorDot.current) return;
      gsap.to(cursor.current, { x: e.clientX, y: e.clientY, duration: 0.45, ease: "power3.out" });
      gsap.to(cursorDot.current, { x: e.clientX, y: e.clientY, duration: 0.08 });
    };
    window.addEventListener("mousemove", mouse);

    const interactive = document.querySelectorAll("a, button, input, textarea");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", () => gsap.to(cursor.current, { scale: 2.2, duration: 0.25 }));
      el.addEventListener("mouseleave", () => gsap.to(cursor.current, { scale: 1, duration: 0.25 }));
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", mouse);
      interactive.forEach((el) => {
        el.replaceWith(el.cloneNode(true));
      });
      ctx.revert();
      lenis.destroy();
    };
  }, [root, cursor, cursorDot]);
}
