
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera } from "lucide-react";

const CameraAccess = () => {
  const cameraFeeds = [
    {
      id: 1,
      name: "Main Building - Entrance",
      location: "Karla Main Office",
      status: "Live",
      description: "View of main entrance and reception area"
    },
    {
      id: 2,
      name: "IRCA Center - Common Area",
      location: "Sankalp IRCA, Karla",
      status: "Live",
      description: "Common area and counseling center"
    },
    {
      id: 3,
      name: "Administrative Block",
      location: "Main Campus",
      status: "Live", 
      description: "Administrative offices and meeting rooms"
    },
    {
      id: 4,
      name: "Community Hall",
      location: "Karla Campus",
      status: "Live",
      description: "Community events and group activities"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-700 to-violet-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Camera className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Live Camera Access</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Promoting transparency through real-time access to our facilities and operations
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Transparency</h2>
            <Card className="max-w-4xl mx-auto border-l-4 border-l-violet-500">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-4">
                  In line with our principle of "Service to Man is Service to God," we believe in complete 
                  transparency in our operations. These live camera feeds allow the public, donors, 
                  beneficiaries, and oversight bodies to witness our day-to-day activities and ensure 
                  accountability in our service delivery.
                </p>
                <p className="text-gray-600">
                  This initiative demonstrates our commitment to ethical practices and builds trust 
                  with the communities we serve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Camera Feeds */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Live Camera Feeds</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real-time views of our facilities ensuring transparency and accountability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cameraFeeds.map((feed) => (
              <Card key={feed.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{feed.name}</CardTitle>
                      <CardDescription className="text-violet-600">{feed.location}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      🔴 {feed.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Camera Feed Placeholder */}
                  <div className="bg-gray-800 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Camera className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm opacity-75">Live Feed</p>
                      <p className="text-xs opacity-50">Camera feed will be available soon</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4">{feed.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-500">
                      Last updated: {new Date().toLocaleTimeString()}
                    </div>
                    <Button size="sm" variant="outline" className="border-violet-300 text-violet-700 hover:bg-violet-50">
                      View Fullscreen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Access Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Access Guidelines</h2>
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-blue-800">Public Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Camera feeds are available 24/7 for public viewing</li>
                    <li>No registration required for basic viewing access</li>
                    <li>Feeds focus on common areas and public spaces</li>
                    <li>Privacy of patients and beneficiaries is strictly maintained</li>
                    <li>Recording or screenshots are not permitted</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy & Ethics</h2>
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-green-800">Our Privacy Commitment</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Patient and client privacy is our top priority</li>
                    <li>Cameras are positioned only in public areas</li>
                    <li>No audio recording to protect confidentiality</li>
                    <li>Counseling and treatment rooms are not monitored</li>
                    <li>All feeds comply with privacy regulations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Information</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Details about our camera system and viewing requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">📹</span>
                </div>
                <CardTitle className="text-lg">HD Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  High-definition cameras providing clear visibility of all monitored areas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔄</span>
                </div>
                <CardTitle className="text-lg">24/7 Streaming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Continuous live streaming available around the clock for maximum transparency.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔒</span>
                </div>
                <CardTitle className="text-lg">Secure Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Secure streaming technology ensuring authorized access while maintaining system integrity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Information */}
      <section className="py-16 bg-violet-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help with Camera Access?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            If you're experiencing technical difficulties or have questions about our transparency initiative, 
            we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              Contact Technical Support
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-800 px-8 py-3">
              View FAQ
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-6">
            Support available: Monday - Saturday, 9:00 AM - 6:00 PM
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CameraAccess;
