import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function MemberShip () {
    return (
      <div className="min-h-screen w-full">
        <Navbar />

        <div className="h-screen w-full flex items-center justify-center">
          <Card className="h-auto w-[300px]">
            <CardHeader>
              <CardTitle>Check again Later</CardTitle>
            
            <CardDescription className="">
              Thank you for your patience, check again later for more updates.
            </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Footer />
      </div>
    );
}