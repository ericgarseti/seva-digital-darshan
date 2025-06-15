
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Team = () => {
  const teamMembers = [
    {
      name: "Smt. Umatai Gajanan Dalu",
      position: "President",
      role: "Chief Executive & Strategic Leader",
      description: "Leading the organization with dedication and vision since its inception. Overseeing all major initiatives and ensuring the organization's mission is fulfilled."
    },
    {
      name: "Mahadev Manohar Bhambere",
      position: "Secretary",
      role: "Administrative Head & Operations Manager",
      description: "Managing day-to-day operations and ensuring smooth execution of all programs. Liaison with government agencies and partner organizations."
    },
    {
      name: "Dnyandeep Yadukarrao Yewale",
      position: "Trustee",
      role: "Program Development & Implementation",
      description: "Overseeing program development and implementation, with special focus on educational initiatives in tribal areas."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Meet the dedicated leaders who drive our mission of service and social transformation
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership Philosophy</h2>
            <Card className="max-w-4xl mx-auto border-l-4 border-l-teal-500">
              <CardContent className="p-8">
                <blockquote className="text-xl text-gray-700 italic mb-4">
                  "Our leadership is built on the foundation of selfless service, where every decision 
                  is guided by the principle that 'Service to Man is Service to God.' We believe in 
                  leading by example and empowering communities through dedicated action."
                </blockquote>
                <p className="text-gray-600 text-right">— The Leadership Team</p>
              </CardContent>
            </Card>
          </div>

          {/* Team Members - Vertical Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <div className="p-6 text-center h-full flex flex-col">
                  {/* Profile Section */}
                  <div className="mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <Badge variant="secondary" className="mb-2 text-sm">{member.position}</Badge>
                    <p className="text-teal-600 font-semibold mb-4">{member.role}</p>
                  </div>

                  {/* Description Section */}
                  <div className="flex-grow">
                    <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Organizational Structure</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our governance structure ensures transparent and effective management of all operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">👑</div>
                </div>
                <CardTitle className="text-blue-800">Executive Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Strategic oversight and organizational governance by the President and core leadership team.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-l-green-500">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">⚙️</div>
                </div>
                <CardTitle className="text-green-800">Operations Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Day-to-day operations managed by the Secretary and administrative team across all programs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🎯</div>
                </div>
                <CardTitle className="text-orange-800">Program Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Trustees and specialized teams focus on program development, implementation, and community outreach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            We're always looking for dedicated individuals who share our commitment to social service 
            and community development. Whether as volunteers, partners, or supporters, there's a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/activities"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-800 px-8 py-3 rounded-lg font-semibold transition-colors"
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
