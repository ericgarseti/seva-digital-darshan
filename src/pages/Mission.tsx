
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Mission = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mission, Vision & Values</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our guiding principles that drive every action and decision we make
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Card className="max-w-4xl mx-auto border-none shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-3xl font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <blockquote className="text-3xl font-bold text-gray-800 mb-4">
                  "Service to Man is Service to God"
                </blockquote>
                <p className="text-lg text-gray-600">
                  This profound mission statement embodies our core belief that serving humanity, 
                  especially those in need, is our highest calling and spiritual duty.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Vision */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-3xl">🚫</div>
                  </div>
                  <CardTitle className="text-xl text-blue-800">Addiction-Free Society</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Creating communities free from the grip of addiction through comprehensive 
                    treatment, rehabilitation, and prevention programs.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-3xl">📚</div>
                  </div>
                  <CardTitle className="text-xl text-green-600">Education for All</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Providing quality education to underprivileged children in tribal areas, 
                    especially in the Melghat region, to break cycles of poverty.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-3xl">🤝</div>
                  </div>
                  <CardTitle className="text-xl text-orange-600">Helping the Helpless</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Empowering marginalized communities and individuals through social support, 
                    healthcare, and opportunities for growth and development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Core Values</h2>
            <div className="text-center">
              <Card className="max-w-2xl mx-auto border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-800">Service is the Highest Religion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    We believe that selfless service to humanity is the noblest path one can take. 
                    This principle guides our every action and shapes our organizational culture.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Strategic Objectives */}
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Strategic Objectives</h2>
            
            <div className="space-y-8">
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-xl text-red-700 flex items-center">
                    <span className="text-2xl mr-3">🎯</span>
                    Objective 1: Addiction-Free Society
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Establish comprehensive de-addiction programs that address both physical and psychological 
                    aspects of addiction recovery.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Operate specialized IRCA (Integrated Rehabilitation Centers for Addicts)</li>
                    <li>Provide individual, family, and group counseling services</li>
                    <li>Conduct community awareness and prevention programs</li>
                    <li>Support long-term recovery through follow-up care</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700 flex items-center">
                    <span className="text-2xl mr-3">📖</span>
                    Objective 2: Education for Tribal Poor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Bridge the educational gap in tribal communities by establishing and maintaining 
                    quality educational institutions.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Run secondary schools in remote tribal areas</li>
                    <li>Provide educational resources and infrastructure</li>
                    <li>Support student development through comprehensive programs</li>
                    <li>Create pathways for higher education opportunities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700 flex items-center">
                    <span className="text-2xl mr-3">💪</span>
                    Objective 3: Social Empowerment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Empower marginalized individuals and communities through comprehensive social support systems.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Provide healthcare access and medical support</li>
                    <li>Organize skill development and livelihood programs</li>
                    <li>Conduct community awareness campaigns</li>
                    <li>Facilitate access to government schemes and resources</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission;
