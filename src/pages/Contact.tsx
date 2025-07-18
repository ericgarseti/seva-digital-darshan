
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const contactInfo = [
    {
      type: "Main Office",
      address: "C/o Umatai Gajanan Dalu, President",
      location: "At Post Karla, Ta Anjangaon Surji, Dist. Amravati (MS) 444705",
      phones: ["9423133906", "9403303971", "9096197173"],
      email: "dskd12@rediffmail.com",
      hours: "Monday - Saturday: 9:00 AM - 6:00 PM"
    }
  ];

  const registrationDetails = [
    { label: "Society Registration", value: "Mah./5246/Amravati", date: "07/12/1995" },
    { label: "Trust Registration", value: "F-5357 (Amravati)", date: "25/01/1996" },
    { label: "Niti Aayog Unique ID", value: "MH/2009/0015482", date: "Active" },
    { label: "NGO Darpan ID", value: "MH/00003361", date: "Active" }
  ];

  const seoData = {
    title: "Contact DSSGM Sanstha - De-addiction NGO in Amravati, Maharashtra",
    description: "Contact DSSGM Sanstha for de-addiction services, tribal education programs, and social empowerment initiatives. Located in Karla, Amravati. Phone: 9423133906, Email: dskd12@rediffmail.com",
    keywords: "contact DSSGM Sanstha, de-addiction center contact Amravati, NGO contact Maharashtra, addiction treatment center contact",
    canonicalUrl: "https://dssgm-sanstha.org/contact",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "NGO",
        "name": "DSSGM Sanstha",
        "telephone": "+91-9423133906",
        "email": "dskd12@rediffmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "At Post Karla, Ta Anjangaon Surji",
          "addressLocality": "Amravati",
          "addressRegion": "Maharashtra",
          "postalCode": "444705",
          "addressCountry": "IN"
        },
        "openingHours": "Mo-Sa 09:00-18:00"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead {...seoData} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get in touch with us to learn more about our programs, volunteer opportunities, or partnership possibilities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Location */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Get In Touch */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>
              
              {contactInfo.map((contact, index) => (
                <Card key={index} className="mb-6 border-l-4 border-l-emerald-500">
                  <CardHeader>
                    <CardTitle className="text-xl text-emerald-800">{contact.type}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                      <p className="text-gray-700">{contact.address}</p>
                      <p className="text-gray-700">{contact.location}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Phone Numbers</h4>
                      <div className="space-y-1">
                        {contact.phones.map((phone, phoneIndex) => (
                          <p key={phoneIndex} className="text-gray-700">
                            <a href={`tel:${phone}`} className="hover:text-emerald-600 transition-colors">
                              {phone}
                            </a>
                          </p>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                      <p className="text-gray-700">
                        <a href={`mailto:${contact.email}`} className="hover:text-emerald-600 transition-colors">
                          {contact.email}
                        </a>
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Office Hours</h4>
                      <p className="text-gray-700">{contact.hours}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 text-center">Quick Actions</h3>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <a href="tel:9423133906" className="flex items-center">
                      📞 Call Now
                    </a>
                  </Button>
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    <a href="mailto:dskd12@rediffmail.com" className="flex items-center">
                      ✉️ Send Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Find Us */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Us</h2>
              <p className="text-lg text-gray-600 text-center mb-8">
                Located in Karla, Ta. Anjangaon Surji, Dist. Amravati, Maharashtra
              </p>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.915022197546!2d77.1822512!3d21.153430200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd71d0036a4b48d%3A0x9aa935b10d0fc29!2sSankalp%20Vyasanmukti%20Kendra(%20IRCA)Karla%20TQ.Anjangaon%20surji%20Dist.Amravati!5e1!3m2!1sen!2sin!4v1749989732971!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="DSSGM Sanstha Location Map - De-addiction Center in Karla, Amravati"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Registration Details</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our organization is fully registered and recognized under various legal frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {registrationDetails.map((detail, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-sm text-emerald-800">{detail.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900 mb-1">{detail.value}</p>
                  <Badge variant="secondary" className="text-xs">{detail.date}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Legal Info */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Legal Framework</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Registered Under</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Societies Registration Act, 1860</li>
                  <li>Bombay Public Trust Act, 1950</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Government Recognition</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Ministry of Social Justice & Empowerment, GoI</li>
                  <li>NAPDDR Scheme Recognition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
