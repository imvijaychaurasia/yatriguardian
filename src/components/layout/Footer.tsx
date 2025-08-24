import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="/yatrivisaconsultant-logo.png" 
                alt="Yatri Visa Consultant Logo" 
                className="h-6 md:h-8 w-auto"
              />
              <div>
                <div className="text-lg md:text-xl font-bold text-white">Yatri</div>
                <div className="text-xs md:text-sm text-accent-400 -mt-1">Visa Consultant</div>
              </div>
            </Link>
            <p className="text-sm md:text-base text-gray-300 mb-6">
              Yatri Visa Consultant offers comprehensive visa and passport consultancy services to make your international journey smooth and hassle-free.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-base md:text-lg font-semibold mb-6">Quick Links</h5>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/visa-services" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">Visa Services</Link></li>
              <li><Link to="/passport-services" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">Passport Services</Link></li>
              <li><Link to="/contact" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-base md:text-lg font-semibold mb-6">Popular Destinations</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">USA</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">Canada</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">UK</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">Australia</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">Schengen Countries</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">UAE</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-base md:text-lg font-semibold mb-6">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={16} className="mr-2 md:mr-3 text-accent-400 flex-shrink-0 mt-1" />
                <span className="text-xs md:text-sm text-gray-300">1501, 2B Paradise Heights CHS, MHADA Complex, Opp. Witty International School, Chikuwadi, Borivali West, Mumbai 400067</span>
              </li>
              <li className="flex">
                <Phone size={16} className="mr-2 md:mr-3 text-accent-400 flex-shrink-0 mt-1" />
                <a href="tel:+919920928938" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors">+91 9920-928-938</a>
              </li>
              <li className="flex">
                <Mail size={16} className="mr-2 md:mr-3 text-accent-400 flex-shrink-0 mt-1" />
                <a href="mailto:yatrivisaconsultant@gmail.com" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors">yatrivisaconsultant@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-primary-700">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Yatri Visa Consultant. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 mt-4 md:mt-0 text-xs md:text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;