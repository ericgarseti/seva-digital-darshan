
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Activities = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Activities</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Comprehensive programs designed to create lasting positive change in communities
            </p>
          </div>
        </div>
      </section>

      {/* IRCA Centers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">De-addiction Centers (IRCA)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Siddhi IRCA, Pathrot</h3>
              <p className="text-gray-600 mb-6">
                Our primary de-addiction center providing comprehensive rehabilitation services 
                including medical treatment, counseling, and life skills training.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Residential treatment programs</li>
                <li>• Medical detoxification</li>
                <li>• Individual and group therapy</li>
                <li>• Vocational training</li>
                <li>• Family counseling services</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Sankalp IRCA, Karla</h3>
              <p className="text-gray-600 mb-6">
                Our community-based center focusing on outpatient services and community 
                outreach programs for addiction prevention and recovery.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Outpatient counseling</li>
                <li>• Community awareness programs</li>
                <li>• Support group meetings</li>
                <li>• Relapse prevention programs</li>
                <li>• Family support services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Institutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Educational Institutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                Shri Swami Gajanan Madhyamik Vidyalay, Garajdari
              </h3>
              <p className="text-gray-600 mb-6">
                Secondary education facility serving the tribal community in Garajdari, 
                providing quality education to children who would otherwise have limited access to schooling.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-gray-700">Location:</strong>
                  <p className="text-gray-600">Garajdari, Melghat</p>
                </div>
                <div>
                  <strong className="text-gray-700">Focus:</strong>
                  <p className="text-gray-600">Tribal Education</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                Shri Swami Samarth Madhyamik Vidyalay, Morgad
              </h3>
              <p className="text-gray-600 mb-6">
                Another vital educational institution in the tribal belt, ensuring that 
                children in remote areas receive proper secondary education and opportunities for growth.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-gray-700">Location:</strong>
                  <p className="text-gray-600">Morgad, Melghat</p>
                </div>
                <div>
                  <strong className="text-gray-700">Focus:</strong>
                  <p className="text-gray-600">Rural Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counseling Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Counseling & Support Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Individual Counseling</h3>
              <p className="text-gray-600 mb-4">
                Personalized one-on-one counseling sessions addressing specific needs and challenges.
              </p>
              <div className="bg-purple-100 p-4 rounded-lg">
                <p className="text-2xl font-bold text-purple-700">1440+</p>
                <p className="text-sm text-gray-600">Sessions Conducted</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Counseling</h3>
              <p className="text-gray-600 mb-4">
                Support for families affected by addiction, helping rebuild relationships and trust.
              </p>
              <div className="bg-purple-100 p-4 rounded-lg">
                <p className="text-2xl font-bold text-purple-700">500+</p>
                <p className="text-sm text-gray-600">Families Helped</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Group Counseling</h3>
              <p className="text-gray-600 mb-4">
                Peer support groups fostering community healing and shared recovery experiences.
              </p>
              <div className="bg-purple-100 p-4 rounded-lg">
                <p className="text-2xl font-bold text-purple-700">200+</p>
                <p className="text-sm text-gray-600">Group Sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Additional Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Yoga Programs & Follow-Ups</h3>
              <p className="text-gray-600 mb-4">
                Holistic wellness programs incorporating yoga and meditation as part of the recovery process.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Daily yoga sessions</li>
                <li>• Meditation workshops</li>
                <li>• Breathing exercises</li>
                <li>• Stress management techniques</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Outreach Activities</h3>
              <p className="text-gray-600 mb-4">
                Community awareness and prevention programs conducted across various venues.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• School awareness programs</li>
                <li>• College workshops</li>
                <li>• Gram Panchayat meetings</li>
                <li>• Community health camps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;
