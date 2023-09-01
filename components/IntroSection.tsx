import { Button } from "./ui/button";

export default function Intro() {
    return (
      <div className="h-screen w-[100%] px-10">
        
      <div className="h-[50%] w-[70%] m-auto flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-justify">
            INNOVATION FOR THE PEOPLE AND BY THE PEOPLE IS THE REACTION OF OUR
            NEW INDIA
          </h1>
          <h4 className="font-light flex justify-end">
            - NARENDRA MODI, HON’BLE PRIME MINISTER OF INDIA.
          </h4>
        </div>

        <div className="h-[50%] w-[70%] flex-col m-auto">
          <p className="text-justify">
            Chennai Centre of IETE is committed to attain commanding heights and
            achieve the status of “Centre of Excellence” in Technical,
            Engineering & Management education by harnessing the best practices
            in educational innovation and through its concerted endeavors like
            quality teaching, industrial consultancy and training to the
            aspirants including corporate training.
          </p>
          <Button className="rounded-3xl">Read more</Button>
        </div>

      </div>
    );
}