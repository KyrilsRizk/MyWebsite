"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion,  } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
 const { ref } = useSectionInView("About" , 0.65);

  return (
  <motion.section 
  ref={ref}
  className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-32"
    initial = {{ opacity: 0 , y: 100}}
    animate = {{opacity: 1 , y:0}}
    transition={{delay:0.175}}
      id='about'>
    <SectionHeading>About Me</SectionHeading>

     <p className="mb-3">
     As a fresh graduate, with a degree in{" "}
        <span className="font-medium">computer Science</span>, and a hunger for learning to any endeavor. Armed with a recently acquired degree, I am poised to embark on a journey of exploration and growth as {" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="font-medium">As I step into this new chapter of my life, I am driven by a sense of purpose and the desire to make meaningful contributions to society.</span>
        learning about
        </p>
  </motion.section>
  )
}
