import { FaInstagram, FaLinkedin } from "react-icons/fa";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="flex-col md:gap-[1rem] mb-[-1rem] bg-primary/5">

      <div className="h-auto w-[100%] md:w-[80%] m-auto p-10 flex-col md:flex">
        
        <div className="flex-col w-[100%] md:w-[50%]">
            <h1 className="text-4xl font-bold mb-0">IETE Chennai</h1>
            <p className="text-sm font-light">
              IETE Chennai centre, No: 37, Tamil Nadu 600086 Conran Smith Road
              Entrance Peters Road, Gopalapuram,Chennai.
            </p>

            <div className="mt-10 md:mt-12">
              <h3 className="inline font-bold text-sm">Phone: </h3>
              <p className="inline text-sm">044 2835 0773</p>
              <br></br>
              <h3 className="inline font-bold text-sm">Email: </h3>
              <p className="inline text-sm">ietechennai@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex-col w-[100%] md:w-[50%] mt-10 md:mt-0">
          <div>
            <h1 className="font-bold">Useful Links</h1>
            <ul className="w-[50%]">
              <li className="text-sm font-light cursor-pointer text-gray-500 hover:text-primary/80">
                Home
              </li>
              <li className="text-sm font-light cursor-pointer text-gray-500 hover:text-primary/80">
                Intro
              </li>
              <li className="text-sm font-light cursor-pointer text-gray-500 hover:text-primary/80">
                Events
              </li>
              <li className="text-sm font-light cursor-pointer text-gray-500 hover:text-primary/80">
                Commitee Executive
              </li>
              <li className="text-sm font-light cursor-pointer text-gray-500 hover:text-primary/80">
                Contact Us
              </li>
            </ul>
          </div>

          <div className="mt-10 md:mt-5">
            <h1 className="font-bold text-bg">Subscribe to Newsletter</h1>
            <div className="flex w-full items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit" className="cursor-pointer">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] md:w-[80%] m-auto flex p-10 justify-between align-center">
        <p>
          &copy; Copyright reserved <b>IETE CHENNAI</b> 2023
        </p>

        <div className="flex gap-2 items-center">
          <a href="#" className="cursor-pointer">
            <FaInstagram size={24} />
          </a>

          <a href="#" className="cursor-pointer">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      <div className="relative p-0 mt-[-1.5rem] mb-[-1rem] border-b-2 border-b-primary/10">
        <p className="text-2xl md:text-6xl w-full mb-[-8px] text-primary/10 flex justify-center">IETE CHENNAI</p>
      </div>
    </div>
  );
}
