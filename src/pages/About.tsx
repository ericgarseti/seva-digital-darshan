
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Sanstha</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Learn about our journey, our foundation, and our commitment to serving humanity
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Foundation</h2>
              <div className="prose prose-lg">
                <p className="text-gray-700 mb-4">
                  <strong>Dharmasamanway Maharshi Shri Sant Gulabrao Maharaj Warkari Vikas Va Shikshan Sanstha</strong> 
                  was established on <strong>7th December 1995</strong> with a noble mission: "Service to Man is Service to God."
                </p>
                <p className="text-gray-700 mb-4">
                  Located in Karla, Ta. Anjangaon Surji, Dist. Amravati, Maharashtra, our organization operates as a 
                  registered NGO, Trust, and Society, committed to creating positive change in the lives of those who need it most.
                </p>
                <p className="text-gray-700">
                  For nearly three decades, we have been working tirelessly to address critical social issues including 
                  addiction, lack of education in tribal areas, and social empowerment of the marginalized.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-orange-600">Core Belief</CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "Service is the highest religion"
                  </blockquote>
                  <p className="text-gray-600">
                    This fundamental principle guides every aspect of our work. We believe that by serving 
                    humanity, especially those in need, we serve the divine purpose of creating a better world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Registration Details */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Legal Recognition & Registration</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800 text-sm">Society Registration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">Mah./5246/Amravati</p>
                  <p className="text-sm text-gray-600">Date: 07/12/1995</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800 text-sm">Trust Registration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">F-5357 (Amravati)</p>
                  <p className="text-sm text-gray-600">Date: 25/01/1996</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800 text-sm">Niti Aayog ID</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">MH/2009/0015482</p>
                  <p className="text-sm text-gray-600">Unique Identifier</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800 text-sm">NGO Darpan ID</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">MH/00003361</p>
                  <p className="text-sm text-gray-600">Government Registry</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recognition */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Government Recognition</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <p className="text-lg text-green-800 mb-4">
                <strong>Officially Recognized & Subsidized by</strong>
              </p>
              <p className="text-xl font-semibold text-green-900 mb-2">
                Ministry of Social Justice & Empowerment, Government of India
              </p>
              <p className="text-green-700">
                Under the NAPDDR (National Action Plan for Drug Demand Reduction) Scheme
              </p>
            </div>
          </div>

          {/* Impact Numbers */}
          <div className="bg-blue-800 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-orange-300 mb-2">9,000-10,000</div>
                <div className="text-lg">IPD Patients Treated</div>
                <div className="text-sm opacity-80 mt-2">In-Patient De-addiction Services</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-300 mb-2">70,000-80,000</div>
                <div className="text-lg">OPD Patients Served</div>
                <div className="text-sm opacity-80 mt-2">Out-Patient Consultations & Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
