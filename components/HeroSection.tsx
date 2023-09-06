import Torus from "./Torus";

export default function Hero() {
    return (
        <div className="h-screen w-full p-10 flex items-center justify-center">
            <div className="h-[90%] w-[90%]">
                <Torus />
            </div>
        </div>
    );
}
