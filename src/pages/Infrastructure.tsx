
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Infrastructure = () => {
  const facilities = [
    {
      name: "Siddhi IRCA Center, Pathrot",
      type: "De-addiction Facility",
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&h=400&fit=crop",
      description: "Modern rehabilitation center with residential facilities, medical units, and counseling rooms."
    },
    {
      name: "Sankalp IRCA, Karla",
      type: "Community Center",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
      description: "Community-based center for outpatient services and local outreach programs."
    },
    {
      name: "Shri Swami Gajanan Madhyamik Vidyalay",
      type: "Educational Institution",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
      description: "Secondary school serving tribal children in Garajdari with modern educational facilities."
    },
    {
      name: "Shri Swami Samarth Madhyamik Vidyalay",
      type: "Educational Institution",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      description: "Another vital educational institution in Morgad providing quality education to tribal communities."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Infrastructure</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Modern facilities strategically located to serve communities across Amravati District and Melghat
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Facilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our infrastructure spans across both owned and rented properties, strategically positioned 
              to maximize our reach and impact in the communities we serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                      {facility.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{facility.name}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-teal-700 mb-3">Headquarters</h3>
              <p className="text-gray-600 text-sm mb-2">At Post Karla</p>
              <p className="text-gray-600 text-sm mb-2">Ta. Anjangaon Surji</p>
              <p className="text-gray-600 text-sm">Dist. Amravati (MS) 444705</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-teal-700 mb-3">Pathrot Center</h3>
              <p className="text-gray-600 text-sm mb-2">Siddhi IRCA</p>
              <p className="text-gray-600 text-sm mb-2">De-addiction Facility</p>
              <p className="text-gray-600 text-sm">Amravati District</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-teal-700 mb-3">Melghat Region</h3>
              <p className="text-gray-600 text-sm mb-2">Garajdari & Morgad</p>
              <p className="text-gray-600 text-sm mb-2">Educational Institutions</p>
              <p className="text-gray-600 text-sm">Tribal Area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Facility Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Medical Facilities</h3>
              <p className="text-gray-600 text-sm">Equipped with modern medical equipment for treatment and rehabilitation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Educational Spaces</h3>
              <p className="text-gray-600 text-sm">Classrooms and learning environments designed for effective education</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Residential Units</h3>
              <p className="text-gray-600 text-sm">Comfortable accommodation for patients undergoing treatment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Halls</h3>
              <p className="text-gray-600 text-sm">Spaces for group activities, meetings, and community gatherings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Development */}
      <section className="py-16 bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Future Development Plans</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We are continuously working to expand and improve our infrastructure to better serve 
            our communities and reach more people in need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-teal-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Expansion Plans</h3>
              <p className="text-sm opacity-90">
                Adding new facilities in underserved areas to increase our reach and impact.
              </p>
            </div>
            <div className="bg-teal-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Technology Integration</h3>
              <p className="text-sm opacity-90">
                Implementing modern technology for better patient care and educational delivery.
              </p>
            </div>
            <div className="bg-teal-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Sustainability</h3>
              <p className="text-sm opacity-90">
                Developing eco-friendly and sustainable infrastructure for long-term impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Infrastructure;
