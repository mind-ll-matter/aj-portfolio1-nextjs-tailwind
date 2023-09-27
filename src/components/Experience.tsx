import { type } from "os";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

type DetailsType = {
  position: string;
  company?: string;
  companyLink?: string;
  time?: string;
  address?: string;
  work?: string;
};

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: DetailsType) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
      md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
            | {time}
            {address ? " | " : ""}
            {address}
          </span>
          <br />
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Bartender"
            company="Schapiro's Sports Bar & Restaurant"
            companyLink="https://www.schapirossportsbar.co.nz"
            time="2023"
            work="Collaborating and working in a fast-paced, high-pressure evironment, while giving customers the best experience possible."
          />
          <Details
            position="Founder"
            company="SI'I Outreach Project"
            companyLink="https://www.spiesuoa.co.nz/outreach.html"
            time="2020 - 2021"
            work="Co-founded the Si’i Outreach project to help inform Māori and Pacific year 9 to 11 students about Engineering. Planned project layout, goals and team governance. Communicated with schools and the University before delivering in-school presentations and activities. The lesser-known, but most important goal was to achieve continuity so that the project would continue once we left."
          />
          <Details
            position="Co-President & Treasurer"
            company="SPIES UOA"
            companyLink="https://www.spiesuoa.co.nz/"
            time="2019 - 2021"
            work="I was significantly involved in the South Pacific Indigenous Engineering Students Association at the University of Auckland - taking on the roles of treasurer (2019-2020) and Co-President (2020-2021). As the leader of a team of 12, my primary objective was to revamp the association, ensuring its resilience and optimizing its potential. This endeavor encompassed various initiatives such as automating processes, enhancing the brand and community engagement, establishing a dedicated website, and fostering stronger ties with the university."
          />
          <Details
            position="Junior Product Analyst"
            company="Network for Learning"
            companyLink="https://www.n4l.co.nz/"
            time="2021"
            work="Contributed to redesign of the website and launch of a customer engagement strategy. Involved with company road mapping and strategic planning."
          />
          <Details
            position="Founder"
            company="2Marquee"
            companyLink=""
            time="2019 - 2021"
            work="A small business hiring out equipment for events. Managed finances, digital presence and customer relations."
          />
          <Details
            position="Research Intern"
            company="Auckland Bioengineering Institute"
            companyLink="https://www.auckland.ac.nz/en/abi.html"
            time="2019 - 2020"
            work="As a research assistant, I conducted a literature review on methods for finding bone thickness and improved a programme, using Python, to find the cortical thickness of the femur of children with cerebral palsy.
                        "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
