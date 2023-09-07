"use client";

import "../app/globals.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { CollegeCard } from "./CollegeCard";

const colleges = [
  {
    avatarSrc: "",
    collegeName: "Sri Venkateswara College of Engineering, Sriperambadur",
  },
  { avatarSrc: "", collegeName: "Panimalar Institute of Technology" },
  { avatarSrc: "", collegeName: "Easwari Engineering College" },
  { avatarSrc: "", collegeName: "Veltech Multi Engineering College" },
  { avatarSrc: "", collegeName: "SRM Institute of Science and Technology" },
  { avatarSrc: "", collegeName: "Jeppiar Institute of Technology" },
  { avatarSrc: "", collegeName: "RMK College of Engineering and Technology" },
  { avatarSrc: "", collegeName: "Velammal Engineering College" },
  { avatarSrc: "", collegeName: "KCG College of Technology" },
  { avatarSrc: "", collegeName: "Dr Rangarajan Dr Sakunthala Engg College" },
  { avatarSrc: "", collegeName: "Saveetha Engineering College" },
  { avatarSrc: "", collegeName: "Dr. M G R Educational & Research Institute" },
  { avatarSrc: "", collegeName: "DMI College of Engineering" },
  {
    avatarSrc: "",
    collegeName: "MISRIMAL NAVAJEE MUNOTH JAIN ENGINEERING COLLEGE",
  },
];

export default function Colleges() {

  const collegesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (collegesRef.current) {
      const divWidth = collegesRef.current.offsetWidth;
      const contentWidth = collegesRef.current.scrollWidth;
      const duration = (contentWidth - divWidth) / 50;
      gsap.to(collegesRef.current, {
        scrollLeft: contentWidth - divWidth,
        duration: duration,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
   <div className="h-auto mt-[3rem] mb-[5rem] w-full flex-col items-center justify-center">
    <h1 className="font-bold text-xl md:text-3xl w-[90%] m-auto p-5">Colleges</h1>

     <div
      draggable="true"
      id="collegePan"
      className="h-auto mt-[3rem] w-[90%] m-auto p-10 flex items-center gap-5 overflow-y-scroll"
    >
      {colleges.map((college) => (
        <CollegeCard
          avatarSrc={college.avatarSrc}
          collegeName={college.collegeName}
        />
      ))}
    </div>
   </div>
  );
}
