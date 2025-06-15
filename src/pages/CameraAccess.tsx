
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

const CameraAccess = () => {
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

      {/* Mobile App Access Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mobile App Access</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access live camera feeds on your mobile device using the iVMS-4500 app
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* QR Code Section */}
            <div className="text-center">
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Scan QR Code for Quick Setup</CardTitle>
                  <CardDescription>
                    Use your phone's camera to scan this QR code and add our camera system to your iVMS-4500 app
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <img 
                      src="/lovable-uploads/c3ddb4e9-3637-497a-a645-f07392c2dcdd.png" 
                      alt="QR Code for iVMS-4500 Setup"
                      className="w-64 h-64 object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Setup Instructions */}
            <div>
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-blue-800">Setup Instructions</CardTitle>
                  <CardDescription>Follow these steps to access our camera feeds</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <p className="font-semibold">Install iVMS-4500 App</p>
                        <p className="text-sm text-gray-600">Download from Google Play Store or App Store</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <p className="font-semibold">Open App & Access Device List</p>
                        <p className="text-sm text-gray-600">Look for "Device List" option in the top right</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <p className="font-semibold">Add Device</p>
                        <p className="text-sm text-gray-600">Click "Add device" and scan the QR code</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                      <div>
                        <p className="font-semibold">Scan QR Code</p>
                        <p className="text-sm text-gray-600">Use the QR code scanner in the iVMS app</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Login Credentials</h4>
                    <div className="space-y-1 text-sm">
                      <p><span className="font-medium">Username:</span> admin</p>
                      <p><span className="font-medium">Password:</span> pass@123</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
                    <li>Use provided credentials for mobile app access</li>
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
                  <span className="text-xl">📱</span>
                </div>
                <CardTitle className="text-lg">Mobile Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Access feeds through iVMS-4500 mobile app for convenient monitoring on the go.
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
