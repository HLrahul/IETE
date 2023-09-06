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
            src: "http://ietechennai.in/assets/img/trainers/6.jpg",
        },
        {
            fullname: "Dr. Tata Sudhakar",
            designation: "Immd Post Chairman",
            department: "",
            college: "",
            email: "tatasudhakar@gmail.com",
            linkedin: "",
            src: "http://ietechennai.in/assets/img/trainers/tata_sudhakar.jpeg",
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
            src: "http://ietechennai.in/assets/img/trainers/4.jpg",
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
            src: "http://ietechennai.in/assets/img/trainers/5.jpg",
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
            src: "http://ietechennai.in/assets/img/trainers/arunkumar.jpeg",
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
            src: "http://ietechennai.in/assets/img/trainers/dr_vaishali.jpg",
        },
        {
            fullname: "Mr Arun",
            designation: "Co-opted Member",
            department: "",
            college: "",
            email: "snatarajan1967@gmail.com",
            linkedin: "",
            src: "http://ietechennai.in/assets/img/trainers/arun.jpeg",
        },
        {
            fullname: "Dr. K. Sumathi",
            designation: "Co-opted Member",
            department: "",
            college: "",
            email: "sumathi.ece@sairam.edu.in",
            linkedin: "",
            src: "http://ietechennai.in/assets/img/trainers/sumathi.jpeg",
        },
    ];

    return (
        <div className="min-h-screen w-full">
            <Navbar />
            <div className="mt-[20vh] h-[80%] md:h-[60%] w-[90%] md:w-[70%] m-auto grid gap-3 sm:grid-cols-1 md:grid-cols-3">
                {members.map((member, index) => (
                    <Card key={index} className="w-[350px] h-[400px]">
                        <CardHeader>
                            <CardTitle className="text-center font-bold text-2xl tracking-wide mt-2">
                                {member.designation}
                            </CardTitle>
                            <CardContent>
                                <div className="flex justify-center items-center">
                                    <Avatar className="h-[100px] w-[100px]">
                                        <AvatarImage src={member.src} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <h5 className="text-center mt-5 font-semibold text-lg">
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
                                        src="https://img.icons8.com/material-outlined/24/{bg-current}/mail.png"
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
