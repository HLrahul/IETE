import { EventDialog } from "./EventsDialog";

export default function FeaturedEvents() {
    return (
      <div className="h-screen w-full p-10 flex items-center justify-center">
        <div className="h-[70%] w-[100%] md:w-[70%] m-auto grid gap-5 sm:grid-rows-4 md:grid-rows-2 sm:grid-cols-1 md:grid-cols-2">
          <EventDialog
            title="Professional Resume Writing"
            date="17-10-2020"
            description="Mr.M.Vigneshwaran (Softskill Trainer/ e-learning developer) gave a guidance session on RESUME building in a Professional manner"
          />

          <EventDialog
            title="Evolution of Computing and Skill sets for future"
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