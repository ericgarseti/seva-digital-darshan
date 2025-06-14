
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Infrastructure = () => {
  const facilities = [
    {
      name: "Siddhi IRCA Center, Pathrot",
      type: "De-addiction Facility",
      status: "Operational",
      capacity: "50 beds",
      features: [
        "Medical facility with qualified doctors",
        "Counseling rooms for individual therapy",
        "Group therapy halls",
        "Recreation and yoga areas",
        "Kitchen and dining facilities",
        "Accommodation for long-term patients"
      ],
      location: "Pathrot, Amravati District"
    },
    {
      name: "Sankalp IRCA Center, Karla",
      type: "Community Rehabilitation Center",
      status: "Operational",
      capacity: "30 beds + OPD",
      features: [
        "Out-patient consultation rooms",
        "Community meeting hall",
        "Counseling and therapy rooms",
        "Administrative offices",
        "Library and resource center",
        "Computer training facility"
      ],
      location: "Karla, Ta. Anjangaon Surji"
    },
    {
      name: "Shri Swami Gajanan Madhyamik Vidyalay",
      type: "Educational Institution",
      status: "Operational",
      capacity: "300+ students",
      features: [
        "15 well-equipped classrooms",
        "Science and computer laboratories",
        "Library with 2000+ books",
        "Sports ground and playground",
        "Staff quarters",
        "Hostel facilities for tribal students"
      ],
      location: "Garajdari, Melghat"
    },
    {
      name: "Shri Swami Samarth Madhyamik Vidyalay",
      type: "Educational Institution",
      status: "Operational",
      capacity: "250+ students",
      features: [
        "12 modern classrooms",
        "Digital learning center",
        "Multipurpose hall",
        "Teacher training facility",
        "Student welfare center",
        "Transportation facility"
      ],
      location: "Morgad, Melghat"
    }
  ];

  const infrastructureStats = [
    { label: "Total Buildings", value: "8+", description: "Owned and rented facilities" },
    { label: "Bed Capacity", value: "80+", description: "In-patient treatment beds" },
    { label: "Educational Seats", value: "550+", description: "Student capacity across schools" },
    { label: "Service Areas", value: "2", description: "Amravati District & Melghat" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Facilities & Infrastructure</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Modern facilities and well-equipped infrastructure supporting our comprehensive programs
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Infrastructure Overview</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our infrastructure spans across Amravati District and the Melghat tribal area, 
              providing essential services through strategically located facilities.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {infrastructureStats.map((stat, index) => (
              <Card key={index} className="text-center border-l-4 border-l-indigo-500">
                <CardHeader>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                  <CardTitle className="text-lg text-gray-800">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed overview of our major facilities and their capabilities
            </p>
          </div>

          <div className="space-y-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">{facility.name}</CardTitle>
                      <CardDescription className="text-lg">{facility.type}</CardDescription>
                    </div>
                    <div className="flex gap-2 mt-2 sm:mt-0">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {facility.status}
                      </Badge>
                      <Badge variant="outline">{facility.capacity}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features & Amenities</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {facility.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Location</h4>
                      <p className="text-gray-600 text-sm mb-4">{facility.location}</p>
                      
                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                        <h5 className="font-semibold text-indigo-800 text-sm mb-2">Access Information</h5>
                        <p className="text-indigo-700 text-xs">
                          Facilities are accessible by road and public transport. 
                          Contact us for detailed directions and visiting arrangements.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Development */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Infrastructure Development</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to continuous improvement and expansion of facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">Owned Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    We own several key facilities that provide stability and long-term service delivery:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Main administrative building in Karla</li>
                    <li>Primary treatment facilities</li>
                    <li>Educational infrastructure in tribal areas</li>
                    <li>Staff accommodation quarters</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-xl text-green-800">Rented & Partnership Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Strategic partnerships and rental agreements expand our reach:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Additional treatment centers</li>
                    <li>Community outreach offices</li>
                    <li>Temporary program venues</li>
                    <li>Emergency accommodation facilities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16 bg-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Future Infrastructure Plans</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Expanding our infrastructure to serve more communities and enhance service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🏥</span>
                </div>
                <CardTitle>Enhanced Medical Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-sm">
                  Upgrading medical infrastructure with modern equipment and expanded capacity 
                  for better patient care and treatment outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🏫</span>
                </div>
                <CardTitle>Educational Expansion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-sm">
                  Building additional schools and upgrading existing educational facilities 
                  to reach more children in remote tribal areas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🌐</span>
                </div>
                <CardTitle>Digital Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-sm">
                  Implementing digital solutions for better service delivery, 
                  patient management, and educational technology integration.
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

export default Infrastructure;
