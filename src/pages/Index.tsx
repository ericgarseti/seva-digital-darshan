
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Camera, Contact } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Dharmasamanway Maharshi Shri Sant Gulabrao Maharaj
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Warkari Vikas Va Shikshan Sanstha
            </h2>
            <p className="text-xl md:text-2xl mb-8 font-light">
              "Service to Man is Service to God"
            </p>
            <p className="text-lg mb-8 opacity-90">
              Serving the community since 1995 • De-addiction • Tribal Education • Social Empowerment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  Learn About Our Mission
                </Button>
              </Link>
              <Link to="/camera-access">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3">
                  <Camera className="w-5 h-5 mr-2" />
                  Live Transparency
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-800 mb-2">29+</div>
              <div className="text-lg text-gray-600">Years of Service</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-500 mb-2">80,000+</div>
              <div className="text-lg text-gray-600">Lives Impacted</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">Multiple</div>
              <div className="text-lg text-gray-600">Programs Running</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work tirelessly in three core areas to create lasting positive change in our communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🚫</div>
                </div>
                <CardTitle className="text-xl text-blue-800">De-addiction Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Creating an addiction-free society through our IRCA centers and comprehensive counseling programs.
                </CardDescription>
                <ul className="mt-4 text-sm text-gray-600 space-y-1">
                  <li>• Siddhi IRCA, Pathrot</li>
                  <li>• Sankalp IRCA, Karla</li>
                  <li>• Individual & Group Counseling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">📚</div>
                </div>
                <CardTitle className="text-xl text-orange-600">Tribal Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Providing quality education to underprivileged children in tribal areas of Melghat.
                </CardDescription>
                <ul className="mt-4 text-sm text-gray-600 space-y-1">
                  <li>• Shri Swami Gajanan Madhyamik Vidyalay</li>
                  <li>• Shri Swami Samarth Madhyamik Vidyalay</li>
                  <li>• Educational Support Programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🤝</div>
                </div>
                <CardTitle className="text-xl text-green-600">Social Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Helping the helpless and empowering communities through various social welfare programs.
                </CardDescription>
                <ul className="mt-4 text-sm text-gray-600 space-y-1">
                  <li>• Community Awareness Programs</li>
                  <li>• Family Support Services</li>
                  <li>• Healthcare Initiatives</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Together, we can create an addiction-free society, provide education to tribal communities, 
            and empower the helpless. Every effort counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/activities">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                <Users className="w-5 h-5 mr-2" />
                Explore Our Programs
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3">
                <Contact className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
