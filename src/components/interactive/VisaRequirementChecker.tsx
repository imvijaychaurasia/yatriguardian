import React, { useState } from 'react';
import { Search, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

interface RequirementResult {
  country: string;
  visaRequired: boolean;
  processingTime: string;
  validity: string;
  fees: string;
  documents: string[];
  additionalInfo?: string;
}

const VisaRequirementChecker: React.FC = () => {
  const [nationality, setNationality] = useState('');
  const [destination, setDestination] = useState('');
  const [purpose, setPurpose] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<RequirementResult | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (nationality && destination && purpose) {
      setIsSearching(true);
      
      // Simulate API call with a timeout
      setTimeout(() => {
        // Mock results based on selected options
        const mockResults: RequirementResult = {
          country: destination,
          visaRequired: destination !== 'Thailand', // Just an example
          processingTime: '5-15 business days',
          validity: '90 days',
          fees: 'USD 160',
          documents: [
            'Valid passport with at least 6 months validity',
            'Completed visa application form',
            'Recent passport-sized photographs',
            'Proof of sufficient funds',
            'Travel itinerary/flight bookings',
            'Hotel reservations',
            'Travel insurance'
          ],
          additionalInfo: purpose === 'Business' ? 'Business invitation letter required' : undefined
        };
        
        setResult(mockResults);
        setIsSearching(false);
      }, 1500);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-semibold mb-6">Visa Requirement Checker</h2>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Nationality
            </label>
            <select
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="select"
              required
            >
              <option value="" disabled>Select your country</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Destination Country
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="select"
              required
            >
              <option value="" disabled>Select destination</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="Schengen">Schengen Countries</option>
              <option value="UAE">United Arab Emirates</option>
              <option value="Singapore">Singapore</option>
              <option value="Thailand">Thailand</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Purpose of Travel
            </label>
            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="select"
              required
            >
              <option value="" disabled>Select purpose</option>
              <option value="Tourism">Tourism</option>
              <option value="Business">Business</option>
              <option value="Study">Study</option>
              <option value="Work">Work</option>
              <option value="Family">Family Visit</option>
              <option value="Medical">Medical</option>
            </select>
          </div>
        </div>
        
        <button
          type="submit"
          className="btn btn-primary mt-6"
          disabled={isSearching || !nationality || !destination || !purpose}
        >
          {isSearching ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Checking Requirements...
            </>
          ) : (
            <>
              <Search size={18} className="mr-2" />
              Check Requirements
            </>
          )}
        </button>
      </form>
      
      {result && (
        <div className="border border-gray-200 rounded-lg p-6 mt-8 animate-slide-up">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Visa Requirements for {result.country}</h3>
            <div className="flex items-center">
              {result.visaRequired ? (
                <div className="flex items-center text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                  <AlertCircle size={16} className="mr-1" />
                  <span className="text-sm font-medium">Visa Required</span>
                </div>
              ) : (
                <div className="flex items-center text-success-700 bg-success-50 px-3 py-1 rounded-full">
                  <CheckCircle2 size={16} className="mr-1" />
                  <span className="text-sm font-medium">Visa-Free Entry</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Processing Time</h4>
              <p>{result.processingTime}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Validity</h4>
              <p>{result.validity}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Visa Fees</h4>
              <p>{result.fees}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-md font-medium mb-3">Required Documents</h4>
            <ul className="space-y-2">
              {result.documents.map((doc, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 size={18} className="text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {result.additionalInfo && (
            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded">
              <h4 className="text-md font-medium mb-1">Additional Information</h4>
              <p>{result.additionalInfo}</p>
            </div>
          )}
          
          <div className="mt-6 flex justify-between">
            <button
              className="btn btn-outline"
            >
              Download Requirements
            </button>
            <button
              className="btn btn-primary"
            >
              Apply for Visa
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaRequirementChecker;