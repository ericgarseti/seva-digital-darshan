
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Mission = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mission & Vision</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our guiding principles and vision for creating a better society
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <div className="bg-green-100 p-8 rounded-lg max-w-4xl mx-auto">
              <p className="text-2xl text-green-800 font-semibold">
                "Service to Man is Service to God"
              </p>
              <p className="text-lg text-gray-700 mt-4">
                We believe that the highest form of devotion is serving humanity, 
                and through our work, we strive to embody this principle in every action we take.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Points */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚫</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Addiction-Free Society</h3>
              <p className="text-gray-600">
                Creating a society free from the harmful effects of substance abuse through 
                comprehensive rehabilitation and awareness programs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education for Tribal Areas</h3>
              <p className="text-gray-600">
                Providing quality education to underprivileged children in tribal areas, 
                particularly in Melghat, to break the cycle of poverty.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Helping the Helpless</h3>
              <p className="text-gray-600">
                Empowering the most vulnerable members of society through social support, 
                healthcare, and community development programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="bg-green-800 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Service is the Highest Religion</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              We believe that true spirituality is expressed through selfless service to others. 
              This principle guides all our actions and decisions as we work to create positive 
              change in the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-green-700 mb-4">1. Addiction-Free Society</h3>
              <p className="text-gray-600">
                Establish and operate rehabilitation centers to help individuals overcome addiction 
                and reintegrate into society as productive members.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-green-700 mb-4">2. Education for Tribal Poor</h3>
              <p className="text-gray-600">
                Provide accessible, quality education to children from tribal communities, 
                focusing on areas where educational infrastructure is lacking.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-green-700 mb-4">3. Social Empowerment</h3>
              <p className="text-gray-600">
                Empower marginalized communities through capacity building, skill development, 
                and social support programs that promote self-reliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission;
