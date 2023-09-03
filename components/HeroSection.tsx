import Torus from "./Torus";

export default function Hero() {
    return (
        <div className="h-screen w-full p-10 flex items-center justify-center">
            <div className="h-[50%] w-[50%]">
                <Torus />
            </div>
        </div>
    );
}
