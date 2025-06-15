
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Activities = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Key Activities & Projects</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Comprehensive programs designed to create lasting positive change in communities
            </p>
          </div>
        </div>
      </section>

      {/* IRCA Centers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              IRCA De-addiction Centers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Integrated Rehabilitation Centers for Addicts providing comprehensive treatment and recovery support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-blue-800">Siddhi IRCA, Pathrot</CardTitle>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <CardDescription>Comprehensive de-addiction facility</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">Services Provided:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mt-2">
                      <li>In-patient detoxification programs</li>
                      <li>Medical supervision and care</li>
                      <li>Psychological counseling sessions</li>
                      <li>Yoga and meditation programs</li>
                      <li>Family counseling and support</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-green-800">Sankalp IRCA, Karla</CardTitle>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <CardDescription>Community-based rehabilitation center</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">Services Provided:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mt-2">
                      <li>Out-patient treatment programs</li>
                      <li>Group therapy sessions</li>
                      <li>Community outreach programs</li>
                      <li>Prevention and awareness campaigns</li>
                      <li>Follow-up and aftercare support</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Treatment Impact */}
          <div className="bg-blue-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-center text-blue-800 mb-6">Treatment Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">9,000-10,000</div>
                <div className="text-lg text-gray-700">IPD Patients Treated</div>
                <div className="text-sm text-gray-600 mt-1">Comprehensive in-patient care</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">70,000-80,000</div>
                <div className="text-lg text-gray-700">OPD Consultations</div>
                <div className="text-sm text-gray-600 mt-1">Out-patient support services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Institutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Educational Institutions in Tribal Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Providing quality education to underprivileged children in the Melghat tribal region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-xl text-orange-800">
                  Shri Swami Gajanan Madhyamik Vidyalay
                </CardTitle>
                <CardDescription>Located in Garajdari, Melghat</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">Educational Services:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mt-2">
                      <li>Secondary education (Classes 1-10)</li>
                      <li>Qualified teaching staff</li>
                      <li>Modern educational resources</li>
                      <li>Extracurricular activities</li>
                      <li>Student development programs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">
                  Shri Swami Samarth Madhyamik Vidyalay
                </CardTitle>
                <CardDescription>Located in Morgad, Melghat</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">Educational Services:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mt-2">
                      <li>Primary and secondary education</li>
                      <li>Computer literacy programs</li>
                      <li>Sports and cultural activities</li>
                      <li>Scholarship assistance</li>
                      <li>Career guidance and counseling</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Counseling Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Counseling & Support Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive psychological support and therapeutic interventions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">👤</div>
                </div>
                <CardTitle className="text-lg text-blue-800">Individual Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-2">1,440</div>
                <div className="text-sm text-gray-600">Sessions Conducted</div>
                <p className="text-sm text-gray-700 mt-3">
                  One-on-one therapeutic sessions addressing personal challenges and recovery goals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">👨‍👩‍👧‍👦</div>
                </div>
                <CardTitle className="text-lg text-green-800">Family Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">Active</div>
                <div className="text-sm text-gray-600">Ongoing Program</div>
                <p className="text-sm text-gray-700 mt-3">
                  Supporting families affected by addiction through therapy and education programs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">👥</div>
                </div>
                <CardTitle className="text-lg text-orange-800">Group Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-600 mb-2">Regular</div>
                <div className="text-sm text-gray-600">Sessions</div>
                <p className="text-sm text-gray-700 mt-3">
                  Peer support groups fostering community healing and shared recovery experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outreach Activities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Community Outreach & Awareness
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Extending our reach through education and prevention programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">School Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Conducting awareness sessions in schools about the dangers of addiction 
                  and promoting healthy lifestyle choices among students.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">College Seminars</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Educational seminars in colleges focusing on addiction prevention, 
                  mental health awareness, and career guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-lg text-orange-800">Gram Panchayat Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Community-level awareness programs conducted at Gram Panchayats 
                  to reach rural populations with vital health and social messages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;
