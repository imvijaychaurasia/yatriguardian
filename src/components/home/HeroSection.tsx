import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    subService: '',
    message: ''
  });

  const serviceOptions = {
    'visa': ['Tourist Visa', 'Student Visa', 'Immigration Visa'],
    'passport': ['New Application', 'Renewal', 'Emergency Service', 'Lost Passport', 'Document Authentication'],
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset subService when serviceType changes
      ...(name === 'serviceType' ? { subService: '' } : {})
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hello, I'm ${formData.name}.
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.serviceType} - ${formData.subService}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/919920928938?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

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
              Premier visa and passport consultancy services to make your international journey seamless and stress-free.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
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
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Get in Touch</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-gray-600 mb-1 text-sm font-medium">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input bg-gray-50 text-gray-800" 
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 mb-1 text-sm font-medium">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input bg-gray-50 text-gray-800" 
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 mb-1 text-sm font-medium">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input bg-gray-50 text-gray-800" 
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 mb-1 text-sm font-medium">Service Type *</label>
                    <select 
                      name="serviceType" 
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="select bg-gray-50 text-gray-800" 
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="visa">Visa Services</option>
                      <option value="passport">Passport Services</option>
                    </select>
                  </div>
                  
                  {formData.serviceType && (
                    <div>
                      <label className="block text-gray-600 mb-1 text-sm font-medium">Specific Service *</label>
                      <select 
                        name="subService" 
                        value={formData.subService}
                        onChange={handleChange}
                        className="select bg-gray-50 text-gray-800" 
                        required
                      >
                        <option value="" disabled>Select specific service</option>
                        {serviceOptions[formData.serviceType as keyof typeof serviceOptions]?.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-600 mb-1 text-sm font-medium">Your Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="input bg-gray-50 text-gray-800 resize-none" 
                    rows={3}
                    placeholder="Tell us about your requirements"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="btn bg-primary-600 hover:bg-primary-700 text-white w-full flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                </div>
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