import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "./ui/card";

export default function Intro() {
    return (
      <div className="h-screen w-[100%] px-10 flex-col gap-10">
        <div>
          <h2 className="w-[50%] m-auto mb-2">Upcoming Event</h2>
          <Card className="h-auto w-[50%] m-auto px-4 mb-[25vh] cursor-pointer hover:bg-primary/10">
            <CardContent className="flex gap-10">
              <div className="flex-col gap-5">
                <h1 className="text-3xl">30</h1>
                <p className="text-xl">May</p>
              </div>

              <div className="flex-col gap-5">
                <h1 className="text-xl font-bold">Webinar on IOT Security</h1>
                <p className="text-[0.75rem] font-light">WISE-2022 Organized by SETS - Chennai & CDAC - Hyderabad in collaboration with ISAC.</p>
              </div>
            </CardContent>
          </Card>
        </div>

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
          <Button className="rounded-3xl mt-2">Read more</Button>
        </div>
      </div>
    );
}