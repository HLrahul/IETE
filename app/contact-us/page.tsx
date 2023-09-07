import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactUs () {
    return (
        <div className="min-h-screen w-full">
            <Navbar />

            <div className="h-screen w-full p-10 flex items-center justify-center">
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Us</CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                        
                    </CardContent>

                    <CardFooter>

                    </CardFooter>
                </Card>
            </div>

            <Footer />
        </div>
    )
}