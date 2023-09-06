"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { EventDialog } from "./EventsDialog";

export default function FeaturedEvents() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
        timeline.from(container, { opacity: 0, y: 50, stagger: 0.2 });
    }, []);

    return (
        <div
            ref={containerRef}
            className="h-auto md:h-[120vh] w-[100%] m-auto p-10 md:flex flex-col justify-center items-center"
        >
            <h1 className="flex items-center justify-center text-[4rem] font-bold w-full m-auto mt-[4rem] mb-[1rem]">
                RECENT EVENTS
            </h1>

            <div className="h-[80%] md:h-[60%] w-[90%] md:w-[70%] m-auto grid gap-5 sm:grid-rows-4 md:grid-rows-2 sm:grid-cols-1 md:grid-cols-2">
                <EventDialog
                    title="Professional Resume Writing"
                    date="17-10-2020"
                    description="Mr.M.Vigneshwaran (Softskill Trainer/ e-learning developer) gave a guidance session on RESUME building in a Professional manner"
                />

                <EventDialog
                    title="Evolution of Computing"
                    date="17-10-2020"
                    description="Mr.MallikMahalingam (CEO,Springpath (CISCO)) commenced with the evolution of hardware and operating software"
                />

                <EventDialog
                    title="Ease the Error 1.0"
                    date="10-10-2020 & 11-10-2020"
                    description="24 Hour national level hackathon which challenged students to think out-of-the-box and offer innovative ideas"
                />

                <EventDialog
                    title="5G and its history"
                    date="17-10-2020"
                    description="Mr.SunderPalaniraj (Director IC-design, TDKInvenSense) gave a technical talk on communication networks"
                />
            </div>
        </div>
    );
}
