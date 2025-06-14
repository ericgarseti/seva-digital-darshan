
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Placeholder gallery images with descriptions
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      title: "Team Meeting",
      description: "Our dedicated team discussing community outreach strategies"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      title: "IRCA Center Building",
      description: "Modern infrastructure at our Siddhi IRCA center in Pathrot"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
      title: "Educational Facility",
      description: "Shri Swami Gajanan Madhyamik Vidyalay building"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=600&h=400&fit=crop",
      title: "Counseling Hall",
      description: "Peaceful environment for group counseling sessions"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop",
      title: "Community Center",
      description: "Traditional architecture of our community outreach center"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=600&h=400&fit=crop",
      title: "Tribal Area Outreach",
      description: "Mobile healthcare unit serving remote tribal communities"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=600&h=400&fit=crop",
      title: "Melghat Region",
      description: "Beautiful landscape of Melghat where we serve tribal communities"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=600&h=400&fit=crop",
      title: "Rural Healthcare",
      description: "Providing healthcare services in remote rural areas"
    }
  ];

  const categories = [
    { name: "All", count: galleryImages.length },
    { name: "Infrastructure", count: 3 },
    { name: "Team & Events", count: 2 },
    { name: "Community Work", count: 3 }
  ];

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
                className="px-6 py-2 bg-white border border-gray-300 rounded-full hover:bg-purple-100 hover:border-purple-300 transition-colors"
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
            {galleryImages.map((image) => (
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
