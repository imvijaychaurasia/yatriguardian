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
    'visa': ['Tourist Visa', 'Student Visa', 'Immigration Visa'],
    'passport': ['New Application', 'Renewal', 'Emergency Service', 'Lost Passport', 'Document Authentication'],
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
    
    // Create WhatsApp message
    const whatsappMessage = `Hello, I'm ${formData.name}.
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.serviceType} - ${formData.subService}
Urgency: ${formData.urgency}
Message: ${formData.message}`;
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/919920928938?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setSubmitted(true);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
      
      {submitted ? (
        <div className="bg-success-50 text-success-700 p-4 rounded-lg flex items-start">
          <CheckCircle2 className="mr-2 flex-shrink-0 mt-1" size={20} />
          <div>
            <h4 className="font-semibold">Redirecting to WhatsApp!</h4>
            <p>Your message has been prepared and WhatsApp should open automatically. If it doesn't, please click the WhatsApp link that opened in a new tab.</p>
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
              className="btn btn-primary w-full flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Send via WhatsApp
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;