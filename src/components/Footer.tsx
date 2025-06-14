
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              Dharmasamanway Maharshi Shri Sant Gulabrao Maharaj Warkari Vikas Va Shikshan Sanstha
            </h3>
            <p className="text-gray-300 mb-4">
              "Service to Man is Service to God"
            </p>
            <p className="text-sm text-gray-400">
              Established: 7th December 1995<br />
              Registered NGO, Trust, Society
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/mission" className="text-gray-300 hover:text-white transition-colors">Mission & Vision</Link></li>
              <li><Link to="/activities" className="text-gray-300 hover:text-white transition-colors">Our Activities</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="text-gray-300 space-y-2">
              <p className="text-sm">At Post Karla, Ta Anjangaon Surji</p>
              <p className="text-sm">Dist. Amravati (MS) 444705</p>
              <p className="text-sm">Phone: 9423133906</p>
              <p className="text-sm">Email: dskd12@rediffmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 DSSGM Sanstha. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <p className="text-xs text-gray-400">Niti Aayog ID: MH/2009/0015482</p>
              <p className="text-xs text-gray-400">NGO ID: MH/00003361</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
