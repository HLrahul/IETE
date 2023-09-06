"use client";

import HollowTriangle from "./HollowTriangle";
import Torus from "./Torus";

export default function Hero() {
    return (
        <div className="h-[125vh] mb-[4rem] w-full p-10 flex-col items-center justify-center gap-[2rem]">
            <div className="h-[80%] w-[80%] m-auto flex items-center justify-center">
                <HollowTriangle />
                {/* <Torus /> */}
            </div>

            <div className="h-[25%] w-full flex items-center justify-center">
                <h1 className="text-2xl md:text-4xl font-bold">
                    Learning Today, <br></br>
                    Leading Tomorrow.
                </h1>
            </div>
        </div>
    );
}
