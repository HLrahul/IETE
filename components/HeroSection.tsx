import Torus from "./Torus";

export default function Hero() {
    return (
        <div className="h-screen w-full p-10 flex-col md:flex items-center justify-center gap-[2rem]">
            <div className="h-[90%] md:h-[60%] w-[90%] md:w-[60%]">
                <Torus />
            </div>

            <div>
                <h1 className="text-2xl md:text-4xl font-bold">
                    Learning Today, <br></br>
                    Leading Tomorrow.
                </h1>
            </div>
        </div>
    );
}
