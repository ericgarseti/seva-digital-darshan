
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Real images from the uploaded folders
  const galleryImages = [
    // Awards
    {
      id: 1,
      src: "/src/img/Awards/WhatsApp Image 2025-06-12 at 19.01.42_3eb677ac.jpg",
      title: "Recognition Award",
      description: "Award ceremony recognizing our community service",
      category: "Awards"
    },
    {
      id: 2,
      src: "/src/img/Awards/WhatsApp Image 2025-06-12 at 19.02.28_0995d296.jpg",
      title: "Achievement Certificate",
      description: "Certificate of excellence in social work",
      category: "Awards"
    },
    {
      id: 3,
      src: "/src/img/Awards/WhatsApp Image 2025-06-12 at 19.02.28_a2f62f36.jpg",
      title: "Community Honor",
      description: "Honor received for tribal community development",
      category: "Awards"
    },
    {
      id: 4,
      src: "/src/img/Awards/WhatsApp Image 2025-06-12 at 19.02.29_3bdcedb9.jpg",
      title: "Service Award",
      description: "Award for outstanding service to society",
      category: "Awards"
    },
    {
      id: 5,
      src: "/src/img/Awards/WhatsApp Image 2025-06-12 at 19.02.30_15b5a08e.jpg",
      title: "Excellence Award",
      description: "Recognition for educational excellence",
      category: "Awards"
    },
    {
      id: 6,
      src: "/src/img/Awards/WhatsApp Image 2025-06-12 at 19.02.30_3e3f6795.jpg",
      title: "Social Impact Award",
      description: "Award for significant social impact",
      category: "Awards"
    },
    {
      id: 7,
      src: "/src/img/Awards/WhatsApp Image 2025-06-12 at 19.02.30_91f5ae8d.jpg",
      title: "Leadership Recognition",
      description: "Recognition for leadership in community development",
      category: "Awards"
    },
    {
      id: 8,
      src: "/src/img/Awards/WhatsApp Image 2025-06-12 at 19.02.31_d5f7a70b.jpg",
      title: "Appreciation Certificate",
      description: "Certificate of appreciation for dedicated service",
      category: "Awards"
    },
    
    // De-addiction
    {
      id: 9,
      src: "/src/img/De-addiction/WhatsApp Image 2025-06-12 at 19.01.37_70852ba8.jpg",
      title: "De-addiction Center",
      description: "Our modern de-addiction treatment facility",
      category: "De-addiction"
    },
    {
      id: 10,
      src: "/src/img/De-addiction/WhatsApp Image 2025-06-12 at 19.01.38_51f9e7f7.jpg",
      title: "Counseling Session",
      description: "Group counseling session for addiction recovery",
      category: "De-addiction"
    },
    {
      id: 11,
      src: "/src/img/De-addiction/WhatsApp Image 2025-06-12 at 19.01.38_f3e31f94.jpg",
      title: "Treatment Program",
      description: "Comprehensive treatment program activities",
      category: "De-addiction"
    },
    {
      id: 12,
      src: "/src/img/De-addiction/WhatsApp Image 2025-06-12 at 19.01.41_335e2bf9.jpg",
      title: "Recovery Center",
      description: "Peaceful environment for addiction recovery",
      category: "De-addiction"
    },
    {
      id: 13,
      src: "/src/img/De-addiction/WhatsApp Image 2025-06-12 at 19.01.41_b79651ba.jpg",
      title: "Rehabilitation Facility",
      description: "State-of-the-art rehabilitation facility",
      category: "De-addiction"
    },
    {
      id: 14,
      src: "/src/img/De-addiction/WhatsApp Image 2025-06-12 at 19.01.42_0458255b.jpg",
      title: "Therapeutic Activities",
      description: "Engaging therapeutic activities for patients",
      category: "De-addiction"
    },
    {
      id: 15,
      src: "/src/img/De-addiction/WhatsApp Image 2025-06-12 at 19.01.42_2b71ef42.jpg",
      title: "Support Group",
      description: "Peer support group meeting",
      category: "De-addiction"
    },
    {
      id: 16,
      src: "/src/img/De-addiction/WhatsApp Image 2025-06-12 at 19.01.42_c0042823.jpg",
      title: "Treatment Facilities",
      description: "Modern treatment facilities and equipment",
      category: "De-addiction"
    },
    {
      id: 17,
      src: "/src/img/De-addiction/WhatsApp Image 2025-06-12 at 19.02.58_9cd36949.jpg",
      title: "Recovery Journey",
      description: "Documenting the recovery journey of patients",
      category: "De-addiction"
    },
    {
      id: 18,
      src: "/src/img/De-addiction/WhatsApp Image 2025-06-12 at 19.02.58_ac667506.jpg",
      title: "Wellness Program",
      description: "Holistic wellness program for recovery",
      category: "De-addiction"
    },

    // Social Empowerment
    {
      id: 19,
      src: "/src/img/Social Empowerment/WhatsApp Image 2025-06-12 at 19.01.39_1480e0e1.jpg",
      title: "Community Outreach",
      description: "Community outreach and empowerment programs",
      category: "Social Empowerment"
    },
    {
      id: 20,
      src: "/src/img/Social Empowerment/WhatsApp Image 2025-06-12 at 19.01.40_fe12ae0c.jpg",
      title: "Women Empowerment",
      description: "Women empowerment and skill development program",
      category: "Social Empowerment"
    },
    {
      id: 21,
      src: "/src/img/Social Empowerment/WhatsApp Image 2025-06-12 at 19.01.41_04dcfd7b.jpg",
      title: "Skill Development",
      description: "Skill development workshops for community members",
      category: "Social Empowerment"
    },
    {
      id: 22,
      src: "/src/img/Social Empowerment/WhatsApp Image 2025-06-12 at 19.02.34_8319c097.jpg",
      title: "Community Programs",
      description: "Various community empowerment programs",
      category: "Social Empowerment"
    },
    {
      id: 23,
      src: "/src/img/Social Empowerment/WhatsApp Image 2025-06-12 at 19.02.34_a7c3d2d2.jpg",
      title: "Social Services",
      description: "Providing essential social services to communities",
      category: "Social Empowerment"
    },
    {
      id: 24,
      src: "/src/img/Social Empowerment/WhatsApp Image 2025-06-12 at 19.02.38_13497565.jpg",
      title: "Community Development",
      description: "Comprehensive community development initiatives",
      category: "Social Empowerment"
    },
    {
      id: 25,
      src: "/src/img/Social Empowerment/WhatsApp Image 2025-06-12 at 19.03.19_338c1011.jpg",
      title: "Empowerment Activities",
      description: "Various activities for social empowerment",
      category: "Social Empowerment"
    },

    // Tribal Education
    {
      id: 26,
      src: "/src/img/Tribal Education/WhatsApp Image 2025-06-12 at 19.02.46_4539d174.jpg",
      title: "Tribal School",
      description: "Educational facilities for tribal children",
      category: "Tribal Education"
    },
    {
      id: 27,
      src: "/src/img/Tribal Education/WhatsApp Image 2025-06-12 at 19.03.48_603f7863.jpg",
      title: "Classroom Activities",
      description: "Interactive classroom activities for tribal students",
      category: "Tribal Education"
    },
    {
      id: 28,
      src: "/src/img/Tribal Education/WhatsApp Image 2025-06-12 at 19.03.54_c8279a12.jpg",
      title: "Educational Programs",
      description: "Special educational programs for tribal communities",
      category: "Tribal Education"
    },
    {
      id: 29,
      src: "/src/img/Tribal Education/WhatsApp Image 2025-06-12 at 19.03.56_121dbf7d.jpg",
      title: "Learning Environment",
      description: "Creating conducive learning environment for tribal children",
      category: "Tribal Education"
    }
  ];

  const categories = [
    { name: "All", count: galleryImages.length },
    { name: "Awards", count: galleryImages.filter(img => img.category === "Awards").length },
    { name: "De-addiction", count: galleryImages.filter(img => img.category === "De-addiction").length },
    { name: "Social Empowerment", count: galleryImages.filter(img => img.category === "Social Empowerment").length },
    { name: "Tribal Education", count: galleryImages.filter(img => img.category === "Tribal Education").length }
  ];

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              A visual journey through our work, facilities, and the communities we serve
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-2 border rounded-full transition-colors ${
                  activeCategory === category.name
                    ? "bg-purple-600 text-white border-purple-600"
                    : "bg-white border-gray-300 hover:bg-purple-100 hover:border-purple-300"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card key={image.id} className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
          <p className="text-xl mb-8 opacity-90">
            Visit our facilities and witness our work firsthand. We welcome visitors, volunteers, and supporters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule a Visit
            </a>
            <a
              href="/camera-access"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-800 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Live Camera
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
