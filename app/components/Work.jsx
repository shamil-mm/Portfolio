"use client";

import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const showMoreRef = useRef(null);

  useLayoutEffect(() => {
    const cards = cardsRef.current;
    const container = containerRef.current;

    if (!container || cards.length === 0) return;

    // Clear previous ScrollTrigger instances
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Animate cards as they come into view
    cards.forEach((card, index) => {
      if (!card) return;

      // Entrance animation
      gsap.fromTo(
        card,
        {
          scale: 0.9,
          opacity: 0.7,
          y: 50,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Scale down effect when card gets pushed up
      if (index < cards.length - 1) {
        gsap.to(card, {
          scale: 0.95,
          opacity: 0.8,
          scrollTrigger: {
            trigger: cards[index + 1],
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        });
      }
    });

    // Parallax background effects
    gsap.to(".bg-float-1", {
      y: -200,
      rotation: 90,
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(".bg-float-2", {
      y: 200,
      rotation: -90,
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="bg-gradient-to-br  flex items-center justify-center py-20">
        <div className="text-center">
          <h4 className="text-center mb-2 text-lg">My portfolio</h4>
          <h2 className="text-center text-5xl">My latest work</h2>
          <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
            Welcome to my portfolio! Take a look at the projects I've built and
            discover my passion for crafting beautiful and functional web
            experiences.
          </p>
        </div>
      </div>

      {/* Cards Container */}
      <div ref={containerRef} className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b "></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="bg-float-1 absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="bg-float-2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
        </div>

        {/* Sticky Cards - Pure CSS Sticky */}
        <div className="relative">
          {workData.map((item, index) => (
            <div
              key={index}
              className="sticky top-0 h-screen flex items-center justify-center p-8 md:p-16 bg-white/80"
              style={{
                zIndex: index + 1, // Changed: Now later cards have higher z-index
              }}
            >
              <div
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="bg-white rounded-3xl p-6 md:p-10 max-w-6xl w-full mx-auto "
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  {/* Image */}
                  <div className="relative group ">
                    <div className="absolute inset-0  from-black to-black rounded-full  duration-300"></div>
                    <Image
                      src={
                        typeof item.bgImage === "string"
                          ? item.bgImage
                          : item.bgImage.src
                      }
                      alt={item.title}
                      width={600}
                      height={400}
                      className="relative w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-black space-y-6">
                    <h2 className="text-3xl md:text-3xl font-bold bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
                      {item.title}
                    </h2>
                    <p className="text-lg md:text-sm text-black leading-relaxed">
                      {item.category}
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <Link
                         href={`/work/${item.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative z-10 w-fit overflow-hidden rounded-full bg-gradient-to-r from-black to-black px-7 py-3 text-white cursor-pointer"
                      >
                        <span className="relative inline-flex overflow-hidden text-sm tracking-wide">
                          <span className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[160%] group-hover:skew-y-12">
                            View Project
                          </span>
                          <span className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                            View Project
                          </span>
                        </span>
                      </Link>

                      <div className="flex items-center gap-2 text-black">
                        <span className="text-sm">
                          Project {index + 1} of {workData.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacer */}
    </div>
  );
};

export default Work;
