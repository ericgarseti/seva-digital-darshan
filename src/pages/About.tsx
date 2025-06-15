
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Learn about our journey, mission, and commitment to serving society since 1995
            </p>
          </div>
        </div>
      </section>

      {/* Organization Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Dharmasamanway Maharshi Shri Sant Gulabrao Maharaj Warkari Vikas Va Shikshan Sanstha 
                was established on 7th December 1995 with a vision to serve humanity and create a 
                better society for all.
              </p>
              <p className="text-gray-600 mb-6">
                Located in Karla, Ta. Anjangaon Surji, Dist. Amravati, Maharashtra, our organization 
                operates as a registered NGO, Trust, and Society, committed to the principle 
                "Service to Man is Service to God."
              </p>
              <p className="text-gray-600">
                Over the years, we have expanded our reach to serve the most vulnerable communities, 
                particularly in tribal areas of Melghat, providing essential services in education, 
                healthcare, and social rehabilitation.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop"
                alt="Community Service"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Legal Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Society Registration</h3>
              <p className="text-gray-600 mb-2">Registration No: Mah./5246/Amravati</p>
              <p className="text-gray-600">Date: 07/12/1995</p>
              <p className="text-sm text-gray-500 mt-2">Under Societies Registration Act, 1860</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust Registration</h3>
              <p className="text-gray-600 mb-2">Registration No: F-5357 (Amravati)</p>
              <p className="text-gray-600">Date: 25/01/1996</p>
              <p className="text-sm text-gray-500 mt-2">Under Bombay Public Trust Act, 1950</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Government Recognition</h3>
              <p className="text-gray-600 mb-2">Niti Aayog ID: MH/2009/0015482</p>
              <p className="text-gray-600 mb-2">NGO ID: MH/00003361</p>
              <p className="text-sm text-gray-500 mt-2">Recognized by Ministry of Social Justice & Empowerment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">29+</h3>
              <p className="text-lg opacity-90">Years of Dedicated Service</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">10,000+</h3>
              <p className="text-lg opacity-90">IPD Patients Treated</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">80,000+</h3>
              <p className="text-lg opacity-90">OPD Patients Served</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">1440+</h3>
              <p className="text-lg opacity-90">Individual Counseling Sessions</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
