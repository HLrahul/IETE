import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

export default function About() {
    return (
      <div className="min-h-screen w-full">
        <Navbar />

        <div className="mt-[20vh] h-auto w-[90%] md:w-[70%] m-auto flex-col">
          <h1 className="text-4xl font-bold">About Us</h1>

          <div className="h-auto w-full flex-col mt-[3rem]">
            <h1 className="text-3xl font-bold">IETE</h1>
            <p className="text-justify mt-5 md:mt-2 font-light">
              <b>
                Founded in 1953, the Institution of Electronics and
                Telecommunication Engineers (IETE)
              </b>{" "}
              is a leading professional society.<br></br>
              <br></br> Its vision is to reach the unreached and empower the
              youth through Technical Education and Skill development with a
              Mission for{" "}
              <b>
                Advancement of Electronics, Telecommunication, Information
                Technology & other related disciplines
              </b>
              ; to contribute in Nation&apos;s Human Resource & Infrastructure
              Development through our Engineers & Scientists.
              <br></br>
              <br></br>The Government of India, Ministry of Science and
              Technology, Department of Scientific & Industrial Research has
              recognized IETE as a{" "}
              <b>Scientific and Industrial Research Organization (SIRO)</b>. The
              Institution has also been notified as an Educational Institution
              of National Eminence by the Government of India. <br></br>
              <br></br>IETE is{" "}
              <b>
                governed by its elected Governing Council headed by an elected
                President
              </b>
              . It has on its roll the Secretary General – the head of IETE
              Secretariat as Chief Executive. The Institution is managed through
              various Committees and Boards nominated by the Governing Council.
              <br></br>
              <br></br>The 63 Centers are spread all over India to abroad and
              are managed by respective Executive Committees. To{" "}
              <b>
                keep pace with technological development and achieve the mission
              </b>
              , it organizes conferences, conventions, symposia, seminars,
              workshops, publications and brain storming sessions for continued
              knowledge upgradation of its members.
            </p>
          </div>

          <div className="h-auto w-full flex-col mt-[3rem]">
            <h1 className="text-3xl font-bold">Chennai Center</h1>
            <p className="text-justify mt-5 font-light">
              Chennai Centre of IETE is committed to attain commanding heights
              and achieve the status of <b>“Centre of Excellence”</b> in
              Technical, Engineering & Management education by harnessing the
              best practices in educational innovation and through its concerted
              endeavors like quality teaching, industrial consultancy and
              <b>raining to the aspirants including corporate training.</b>
            </p>
            <p className="text-justify mt-3 font-light">
              The Centre assigns top priority to the basic need for
              &apos;education transformation&apos; in keeping pace with time,
              and aims at to develop the highest quality of manpower to cater to
              the needs & expectations of industry, R&D and educational
              institutions, with{" "}
              <b>higher degree of employability for today and tomorrow.</b>
            </p>
          </div>
        </div>

        <div className="h-[50vh]"></div>
        <Footer />
      </div>
    );
}
