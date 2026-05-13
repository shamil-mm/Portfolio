import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <>
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Image src={assets.my_photo} alt="" className="rounded-full w-32" />
        </motion.div>
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-end gap-2 text-xl md:text-2xl mb-3"
        >
          Hi I'm Muhammed T{" "}
          <Image src={assets.hand_icon} alt="" className="w-5" />{" "}
        </motion.h3>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-6xl lg:text-[66px]"
        >
          Mern Stack Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          I am a full stack developer from India{" "}
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className="group relative z-10 w-fit overflow-hidden rounded-full bg-black px-10 py-3 text-white flex items-center gap-2 cursor-pointer "
          >
            {/* Animated text */}
            <span className="relative inline-flex overflow-hidden  tracking-wide">
              <span className="translate-y-0 skew-y-0 transition duration-600 group-hover:-translate-y-[160%] group-hover:skew-y-12">
                contact me
              </span>
              <span className="absolute translate-y-[164%] skew-y-12 transition duration-600 group-hover:translate-y-0 group-hover:skew-y-0">
                contact me
              </span>
            </span>
          </motion.a>
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="/CVResume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group relative z-10 w-fit overflow-hidden rounded-full border  px-10 py-3 text-black flex items-center gap-2 cursor-pointer "
          >
            {/* Animated text */}
            <span className="relative inline-flex overflow-hidden   tracking-wide">
              <span className="translate-y-0 skew-y-0 transition duration-600 group-hover:-translate-y-[160%] group-hover:skew-y-12">
                my resume
              </span>
              <span className="absolute translate-y-[164%] skew-y-12 transition duration-600 group-hover:translate-y-0 group-hover:skew-y-0">
                my resume
              </span>
            </span>
          </motion.a>
        </div>
      </div>
    </>
  );
};

export default Header;
