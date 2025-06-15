
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Team = () => {
  const teamMembers = [
    {
      name: "Smt. Umatai Gajanan Dalu",
      position: "President",
      image: "https://images.unsplash.com/photo-1494790108755-2616c768bd47?w=300&h=300&fit=crop",
      bio: "Leading the organization with dedication and vision for over two decades."
    },
    {
      name: "Mahadev Manohar Bhambere",
      position: "Secretary",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      bio: "Managing organizational operations and ensuring smooth functioning of all programs."
    },
    {
      name: "Dnyandeep Yadukarrao Yewale",
      position: "Trustee",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      bio: "Providing strategic guidance and oversight for the organization's mission and activities."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Meet the dedicated individuals who lead our mission to serve humanity
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Leadership Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Our team is built on the foundation of servant leadership, where each member is 
              committed to serving the community and empowering others to create positive change.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vision-Driven</h3>
              <p className="text-gray-600">
                Our leaders maintain a clear focus on our mission and vision, 
                ensuring every decision aligns with our core values.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community-Focused</h3>
              <p className="text-gray-600">
                Every team member is deeply connected to the communities we serve, 
                understanding their needs and challenges firsthand.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Results-Oriented</h3>
              <p className="text-gray-600">
                Our leadership team is committed to measurable outcomes and 
                continuous improvement in all our programs and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We are always looking for dedicated individuals who share our passion for 
            serving humanity and creating positive change in society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-indigo-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/activities"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-800 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn About Our Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
