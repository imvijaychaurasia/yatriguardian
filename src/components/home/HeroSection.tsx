import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-primary-800 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Landmarks around the world" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Journey Begins with Expert Visa Assistance
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
              Premier visa and travel consultancy services to make your international travel seamless and stress-free.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Link to="/requirement-checker" className="btn bg-accent-500 hover:bg-accent-600 text-white">
                Check Visa Requirements
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/contact" className="btn bg-transparent border border-white text-white hover:bg-white hover:text-primary-800">
                Contact an Expert
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <CheckCircle2 size={20} className="text-accent-400 mr-2" />
                <span>100+ Countries</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 size={20} className="text-accent-400 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 size={20} className="text-accent-400 mr-2" />
                <span>95% Success Rate</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="bg-white rounded-lg shadow-xl p-6">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Find Visa Requirements</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-600 mb-2 text-sm">Your Nationality</label>
                  <select className="select bg-gray-50 text-gray-800">
                    <option value="" disabled selected>Select your country</option>
                    <option value="in">India</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 mb-2 text-sm">Destination Country</label>
                  <select className="select bg-gray-50 text-gray-800">
                    <option value="" disabled selected>Select destination</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="au">Australia</option>
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 mb-2 text-sm">Purpose of Visit</label>
                  <select className="select bg-gray-50 text-gray-800">
                    <option value="" disabled selected>Select purpose</option>
                    <option value="tourism">Tourism</option>
                    <option value="business">Business</option>
                    <option value="study">Study</option>
                    <option value="work">Work</option>
                    <option value="immigration">Immigration</option>
                  </select>
                </div>
                <button 
                  type="button" 
                  className="btn bg-primary-600 hover:bg-primary-700 text-white w-full"
                >
                  Check Requirements
                </button>
              </form>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-500 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-secondary-500 rounded-full z-[-1]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;