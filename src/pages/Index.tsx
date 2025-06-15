
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Dharmasamanway Maharshi Shri Sant Gulabrao Maharaj
            </h1>
            <h2 className="text-xl md:text-2xl mb-8">
              Warkari Vikas Va Shikshan Sanstha
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              "Service to Man is Service to God"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn More
              </Link>
              <Link
                to="/camera-access"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Live Camera Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">29+</h3>
              <p className="text-gray-600">Years of Service</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">10,000+</h3>
              <p className="text-gray-600">IPD Patients Treated</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">80,000+</h3>
              <p className="text-gray-600">OPD Patients Served</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">2</h3>
              <p className="text-gray-600">IRCA Centers</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Organization</h2>
              <p className="text-gray-600 mb-6">
                Established on 7th December 1995, our organization has been dedicated to creating an addiction-free society 
                and providing education to underprivileged communities in tribal areas, particularly in Melghat.
              </p>
              <p className="text-gray-600 mb-8">
                We operate under the principle "Service to Man is Service to God" and work tirelessly to help the helpless 
                through our various programs and initiatives.
              </p>
              <Link
                to="/about"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Read More
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
                alt="Community Service"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Key Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support through our de-addiction centers, educational institutions, 
              and community outreach programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">De-addiction Centers</h3>
              <p className="text-gray-600 mb-4">
                Operating Siddhi IRCA in Pathrot and Sankalp IRCA in Karla, providing comprehensive 
                rehabilitation services.
              </p>
              <Link to="/activities" className="text-orange-600 hover:text-orange-700 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Education for Tribal Areas</h3>
              <p className="text-gray-600 mb-4">
                Running schools in Garajdari and Morgad to provide quality education to 
                underprivileged children in tribal communities.
              </p>
              <Link to="/activities" className="text-orange-600 hover:text-orange-700 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Counseling & Support</h3>
              <p className="text-gray-600 mb-4">
                Providing individual, family, and group counseling services along with 
                yoga programs and follow-up care.
              </p>
              <Link to="/activities" className="text-orange-600 hover:text-orange-700 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join us in our mission to create a better society. Whether you want to volunteer, 
            learn more about our work, or visit our facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/camera-access"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Live Camera
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
