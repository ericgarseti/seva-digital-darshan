
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CameraAccess = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Live Camera Access</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Transparency in action - View our facilities in real-time
            </p>
          </div>
        </div>
      </section>

      {/* Camera Access Notice */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-2xl">🔒</span>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-blue-800">Access Information</h3>
                <p className="mt-2 text-blue-700">
                  Our live camera feeds are available for authorized personnel and the public during specific hours 
                  to ensure transparency while maintaining privacy and security.
                </p>
              </div>
            </div>
          </div>
          
          {/* Camera Feeds */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Building Camera */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-800 text-white p-4">
                <h3 className="text-lg font-semibold">Main Building - Karla</h3>
                <p className="text-sm opacity-75">Live Feed • Building Entrance</p>
              </div>
              <div className="relative bg-gray-200 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📹</span>
                  </div>
                  <p className="text-gray-600 mb-2">Camera Feed Placeholder</p>
                  <p className="text-sm text-gray-500">Live streaming will be implemented with proper CCTV integration</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Status: Active</span>
                  <span className="text-sm text-green-600">● Live</span>
                </div>
              </div>
            </div>

            {/* Siddhi IRCA Camera */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-800 text-white p-4">
                <h3 className="text-lg font-semibold">Siddhi IRCA - Pathrot</h3>
                <p className="text-sm opacity-75">Live Feed • Facility Entrance</p>
              </div>
              <div className="relative bg-gray-200 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📹</span>
                  </div>
                  <p className="text-gray-600 mb-2">Camera Feed Placeholder</p>
                  <p className="text-sm text-gray-500">Live streaming will be implemented with proper CCTV integration</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Status: Active</span>
                  <span className="text-sm text-green-600">● Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Access Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Public Access Hours</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>• Saturday: 9:00 AM - 4:00 PM</li>
                <li>• Sunday: Limited access</li>
                <li>• Public holidays: Restricted</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy Protection</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Patient areas are not monitored</li>
                <li>• Only public spaces are visible</li>
                <li>• Compliance with privacy laws</li>
                <li>• Secure transmission protocols</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Requirements</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Modern web browser required</li>
                <li>• Stable internet connection</li>
                <li>• JavaScript enabled</li>
                <li>• Mobile device compatible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Statement */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to Transparency</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            We believe in complete transparency in our operations. These live camera feeds demonstrate 
            our commitment to accountability and allow stakeholders to witness our work firsthand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Open Operations</h3>
              <p className="text-sm opacity-90">
                All our activities are conducted with complete transparency and accountability.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Community Trust</h3>
              <p className="text-sm opacity-90">
                Building trust through openness and allowing public oversight of our facilities.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Stakeholder Access</h3>
              <p className="text-sm opacity-90">
                Providing donors, partners, and community members direct visibility into our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CameraAccess;
