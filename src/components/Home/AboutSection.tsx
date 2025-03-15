"use client";

import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section id="#about" className="p-[20px] md:p-[80px] mx-auto">
        <div
          ref={ref}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="w-full md:w-[765px] max-w-full">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl"
            >
              Want to know about me?
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl font-bold"
            >
              A Journey from Hardship to Leadership
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Irfan Malik is a CEO, data scientist, and entrepreneur who has
              navigated life from every angle. Coming from a humble background
              in a remote area, he understands the challenges of breaking into
              the world of technology and business. Having faced these struggles
              firsthand, he has made it his mission to empower others on their
              journey to success.
              <br />
              <br />
              As the Founder & CEO of Xeven Solutions (LLC)—a
              multi-million-dollar company with offices in the UK, USA, UAE, and
              Pakistan—Malik has built his success by leveraging AI, data
              science, and emerging technologies to create real-world solutions.
              But for him, success isn&apos;t just about business; it&apos;s
              about impact.
              <br />
              <br />
              Driven by a passion for uplifting others, he is dedicated to
              mentoring youth, creating job opportunities, and supporting
              freelancers and entrepreneurs. He firmly believes that true
              success is not just about personal achievement—it&apos;s about
              helping others rise and shaping a better future for all.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Image
              src={"/assets/about.jpg"}
              alt="Irfan Malik"
              width={437}
              height={570}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
