'use client';

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
    return (
        <div className="h-[50vh] w-auto p-10 flex items-center overflow-y-auto gap-5">
            {
                colleges.map((college) => (
                    <CollegeCard avatarSrc={college.avatarSrc} collegeName={college.collegeName} />
                ))
            }
        </div>
    );
}
