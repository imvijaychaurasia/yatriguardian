import React from 'react';
import PageBanner from '../components/common/PageBanner';
import PassportServices from '../components/services/passport/PassportServices';
import CTASection from '../components/home/CTASection';

const PassportServicesPage: React.FC = () => {
  return (
    <>
      <PageBanner 
        title="Passport Services" 
        subtitle="Fast and reliable passport application assistance" 
        imageSrc="https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <PassportServices />
      <CTASection />
    </>
  );
};

export default PassportServicesPage;