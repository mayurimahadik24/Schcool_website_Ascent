
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import Abt from './Abt';

import StayConnected from './StayCoonected';

import ServiceDetails2 from './ServiceDetails2';
import ServiceDetails1 from './ServiceDetails';


const ServiceDetail = () => {
  return (
    <div>
     <Navbar/>
     <Abt/>
     <ServiceDetails1/>
     <ServiceDetails2/>
     <StayConnected/>
    
     <Footer/>
    </div>
  );
}

export default ServiceDetail;