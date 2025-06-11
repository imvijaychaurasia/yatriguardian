import React, { useState } from 'react';
import { Calendar, Clock, Users, Check } from 'lucide-react';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

const AppointmentScheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [participantCount, setParticipantCount] = useState<number>(1);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  // Generate dates for the next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date.toISOString().split('T')[0];
  });
  
  // Generate time slots
  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const startHour = 9;
    const endHour = 17;
    const interval = 60; // minutes
    
    for (let hour = startHour; hour < endHour; hour++) {
      const time = `${hour}:00`;
      slots.push({
        id: `slot-${hour}-00`,
        time,
        available: Math.random() > 0.3 // Randomly make some slots unavailable
      });
      
      if (interval === 30) {
        slots.push({
          id: `slot-${hour}-30`,
          time: `${hour}:30`,
          available: Math.random() > 0.3
        });
      }
    }
    
    return slots;
  };
  
  const timeSlots = generateTimeSlots();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirming(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      setIsConfirmed(true);
      setIsConfirming(false);
    }, 1500);
  };
  
  const handleReset = () => {
    setIsConfirmed(false);
    setSelectedDate('');
    setSelectedService('');
    setSelectedTime('');
    setParticipantCount(1);
  };
  
  if (isConfirmed) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-success-50 p-4 rounded-full">
              <Check size={36} className="text-success-500" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-3">Appointment Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your appointment has been scheduled successfully.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg max-w-sm mx-auto">
            <div className="flex items-center mb-4">
              <Calendar size={20} className="text-primary-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <Clock size={20} className="text-primary-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Time</p>
                <p className="font-medium">{selectedTime}</p>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <Users size={20} className="text-primary-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Participants</p>
                <p className="font-medium">{participantCount}</p>
              </div>
            </div>
            
            <div className="pt-2 border-t border-gray-200">
              <p className="text-sm text-gray-500">Service</p>
              <p className="font-medium">{selectedService}</p>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-gray-600 mb-4">
              A confirmation email with all details has been sent to your registered email address.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-primary"
            >
              Schedule Another Appointment
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-semibold mb-6">Schedule an Appointment</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Type
          </label>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="select"
            required
          >
            <option value="" disabled>Select a service</option>
            <option value="Visa Consultation">Visa Consultation</option>
            <option value="Document Submission">Document Submission</option>
            <option value="Passport Services">Passport Services</option>
            <option value="Travel Planning">Travel Planning</option>
            <option value="Application Review">Application Review</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Date
          </label>
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="select"
            required
          >
            <option value="" disabled>Select a date</option>
            {dates.map((date) => (
              <option key={date} value={date}>
                {new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </option>
            ))}
          </select>
        </div>
        
        {selectedDate && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Time
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => setSelectedTime(slot.time)}
                  disabled={!slot.available}
                  className={`p-3 rounded-md transition-colors ${
                    selectedTime === slot.time
                      ? 'bg-primary-600 text-white'
                      : slot.available
                      ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Participants
          </label>
          <select
            value={participantCount}
            onChange={(e) => setParticipantCount(parseInt(e.target.value))}
            className="select"
            required
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">
            Please indicate how many people will be attending this appointment.
          </p>
        </div>
        
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isConfirming || !selectedDate || !selectedService || !selectedTime}
        >
          {isConfirming ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Confirming Appointment...
            </>
          ) : (
            'Confirm Appointment'
          )}
        </button>
      </form>
    </div>
  );
};

export default AppointmentScheduler;