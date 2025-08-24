import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    subService: '',
    contactMethod: '',
    urgency: '',
    message: '',
    acceptPolicy: false
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const serviceOptions = {
    'visa': ['Tourist Visa', 'Business Visa', 'Student Visa', 'Work Visa', 'Immigration Visa'],
    'passport': ['New Application', 'Renewal', 'Emergency Service', 'Lost Passport', 'Document Authentication'],
    'travel': ['Flight Booking', 'Hotel Reservation', 'Travel Insurance', 'Package Tour', 'Other Services']
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, we would send the form data to a server
    console.log(formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        subService: '',
        contactMethod: '',
        urgency: '',
        message: '',
        acceptPolicy: false
      });
    }, 5000);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
      
      {submitted ? (
        <div className="bg-success-50 text-success-700 p-4 rounded-lg flex items-start">
          <CheckCircle2 className="mr-2 flex-shrink-0 mt-1" size={20} />
          <div>
            <h4 className="font-semibold">Message Sent Successfully!</h4>
            <p>Thank you for contacting us. Our team will get back to you within 24 hours.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                Service Type *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="select"
                required
              >
                <option value="" disabled>Select a service</option>
                <option value="visa">Visa Services</option>
                <option value="passport">Passport Services</option>
                <option value="travel">Travel Services</option>
              </select>
            </div>
            
            {formData.serviceType && (
              <div>
                <label htmlFor="subService" className="block text-sm font-medium text-gray-700 mb-1">
                  Specific Service *
                </label>
                <select
                  id="subService"
                  name="subService"
                  value={formData.subService}
                  onChange={handleChange}
                  className="select"
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
            
            <div>
              <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Contact Method
              </label>
              <select
                id="contactMethod"
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="select"
              >
                <option value="" disabled>Select contact method</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
                Urgency Level
              </label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="select"
              >
                <option value="" disabled>Select urgency</option>
                <option value="low">Low - Within 30 days</option>
                <option value="medium">Medium - Within 14 days</option>
                <option value="high">High - Within 7 days</option>
                <option value="urgent">Urgent - Within 48 hours</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="input resize-none"
              required
            ></textarea>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="acceptPolicy"
                name="acceptPolicy"
                type="checkbox"
                checked={formData.acceptPolicy}
                onChange={handleChange}
                className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="acceptPolicy" className="text-gray-700">
                I agree to the <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a> and consent to the processing of my personal data.
              </label>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Submit Request
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;