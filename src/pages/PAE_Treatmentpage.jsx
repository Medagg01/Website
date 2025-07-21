import React from 'react';
import Navbar from '../components/home/Navbar';
import Treatmentnavbar from '../components/home/Treatmentnavbar';
import PAE_Herosection from '../components/Treatment Pages/PAE_Herosection';
import WhyChoosePAE from '../components/Treatment Pages/whychoosePAE';
import HowPAEWork from '../components/Treatment Pages/HowPAEWork';
import Are_you_experience from '../components/Treatment Pages/Are_you_experience';
import Have_Postate from '../components/Treatment Pages/Have_Postate';
import Compare_treatment_option_PAE from '../components/Treatment Pages/Compare_treatment_option_PAE';
import What_happens_in_PAE from '../components/Treatment Pages/What_happens_in_PAE';
import OurDoctor from '../components/home/Ourdoctor';
import Consultourdoctor from '../components/home/Consultourdoctor';
import Footer from '../components/layout/Footer';

const PAE_Treatmentpage = () => (
  <>
    <Navbar />
    <Treatmentnavbar />
    <PAE_Herosection />
    <WhyChoosePAE />
    <HowPAEWork />
    <Are_you_experience />
    <Have_Postate />
    <Compare_treatment_option_PAE />
    <What_happens_in_PAE />
    <OurDoctor />
    <Consultourdoctor />
    <Footer />
  </>
); 

export default PAE_Treatmentpage;
