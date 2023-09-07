import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import React from "react";
import Image from "next/image";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
    const members = [
      {
        fullname: "Dr.N.Venkateswaran",
        designation: "Chairman",
        department: "Professor,Dept. of ECE",
        college: "Sri Siva Subramaniya Nadar College Of Engineering",
        email: "venkateswaran.iete@gmail.com",
        linkedin: "http://ietechennai.in/trainers.html",
        src: "/6.jpg",
      },
      {
        fullname: "Dr. Tata Sudhakar",
        designation: "Immd Post Chairman",
        department: "",
        college: "",
        email: "tatasudhakar@gmail.com",
        linkedin: "",
        src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      },
      {
        fullname: "Mr. Shakthi Murugan",
        designation: "Honarary Secretary",
        department: "Assistant Professor / ECE",
        college: "Jeppiaar Maamallan Engineering College",
        email: "shakthimuruganece@gmail.com",
        linkedin: "",
        src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      },
      {
        fullname: "Mrs T J Jeyaprabha",
        designation: "Honarary Treasurer",
        department: "Assistant Professor / ECE",
        college: "Sri Venkateswara College of Engineering",
        email: "jprabha@svce.ac.in",
        linkedin: "",
        src: "/4.jpg",
      },
      {
        fullname: "Dr C Udayakumar",
        designation: "EC Member",
        department: "",
        college: "",
        email: "cukumar@gmail.com",
        linkedin: "",
        src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      },
      {
        fullname: "Dr V Thulasibai",
        designation: "EC Member",
        department: "",
        college: "",
        email: "thulasi9840@gmail.com",
        linkedin: "",
        src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      },
      {
        fullname: "Mr D Vijendrababu",
        designation: "EC Member",
        department: "",
        college: "",
        email: "dvijendrababu@gmail.com",
        linkedin: "",
        src: "/5.jpg",
      },
      {
        fullname: "Shri Ganapathy Suresh",
        designation: "EC Member",
        department: "",
        college: "",
        email: "lovechennai@yahoo.com",
        linkedin: "",
        src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      },
      {
        fullname: "Shri S Arun Kumar",
        designation: "EC Member",
        department: "",
        college: "",
        email: "arunsundar.s@cvrde.drdo.in",
        linkedin: "",
        src: "/arunkumar.jpeg",
      },
      {
        fullname: "Shri S Madivaanan",
        designation: "EC Member",
        department: "",
        college: "",
        email: "madivaanan.s@gmail.com",
        linkedin: "",
        src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      },
      {
        fullname: "Dr Vaishali D",
        designation: "Co-opted Member",
        department: "",
        college: "",
        email: "vaishali.b@vdp.srmuniv.ac.in",
        linkedin: "",
        src: "/dr_vaishali.jpg",
      },
      {
        fullname: "Mr Arun",
        designation: "Co-opted Member",
        department: "",
        college: "",
        email: "snatarajan1967@gmail.com",
        linkedin: "",
        src: "/arun.jpeg",
      },
      {
        fullname: "Dr. K. Sumathi",
        designation: "Co-opted Member",
        department: "",
        college: "",
        email: "sumathi.ece@sairam.edu.in",
        linkedin: "",
        src: "/sumathi.jpeg",
      },
    ];

    return (
        <div className="min-h-screen w-full">
            <Navbar />

            <h1 className="w-[80%] m-auto mt-[20vh] text-3xl md:text-4xl font-bold">Commitee Executives</h1>
            <div className="mt-[1.5rem] mb-[20vh] h-auto w-[90%] md:w-[80%] m-auto grid gap-[2rem] grid-rows-13 md:grid-rows-auto grid-cols-1 md:grid-cols-3">
                {members.map((member, index) => (
                    <Card key={index} className="sm:w-[250px] w-[350px] sm:h-auto h-[400px]">
                        <CardHeader>
                            <CardTitle className="text-center font-bold sm:text-xl text-2xl tracking-wide mt-1">
                                {member.designation}
                            </CardTitle>
                            <CardContent>
                                <div className="flex justify-center items-center">
                                    <Avatar className="h-[5rem] w-[5rem]">
                                        <AvatarImage src={member.src} className="object-center object-cover" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <h5 className="text-center mt-4 font-semibold text-lg">
                                    {member.fullname}
                                </h5>
                                <CardDescription className="text-center mt-2">
                                    {member.department}
                                    <br />
                                    {member.college}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="flex justify-center items-center">
                                <a href={`mailto:${member.email}`}>
                                    <Image
                                        width={25}
                                        height={25}
                                        src="https://img.icons8.com/material-outlined/24/{bg-primary/100}/mail.png"
                                        alt="mail"
                                        style={{ marginRight: "5px" }}
                                    />
                                </a>
                                <a href={member.linkedin}>
                                    <Image
                                        width={23}
                                        height={23}
                                        src="https://img.icons8.com/ios-filled/50/{bg-current}/linkedin.png"
                                        alt="mail"
                                        style={{ marginLeft: "5px" }}
                                    />
                                </a>
                            </CardFooter>
                        </CardHeader>
                    </Card>
                ))}
            </div>
            <Footer />
        </div>
    );
}
