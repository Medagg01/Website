import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/home/Navbar';
import Treatmentnavbar from '../components/home/Treatmentnavbar';
import About_herosection from '../components/About_us/About_herosection';
import About_Founder from '../components/About_us/About_Founder';
import Type_of_paients_about from '../components/About_us/Type_of_paients_about';
import What_We_Do_Differently from '../components/About_us/What_We_Do_Differently';
import The_Story_of_Our_Transformation from '../components/About_us/The_Story_of_Our_Transformation';
import Trusted_by_Patients_Across_India from '../components/About_us/Trusted_by_Patients_Across_India';

const About = () => (
  <div className='min-h-screen bg-pink-50 p-8'>
    <Navbar />
    <Treatmentnavbar />
    <div className='max-w-4xl mx-auto'>
      <h1 className='text-4xl font-bold text-gray-800 mb-8'>About Medagg</h1>

      <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Our Mission</h2>
        <p className='text-gray-600 mb-6'>
          At Medagg, we are dedicated to providing high-quality healthcare services with compassion and excellence.
          Our mission is to make healthcare accessible and affordable for everyone.
        </p>

        <h2 className='text-2xl font-semibold text-gray-800 mb-4 mt-8'>Our Team</h2>
        <p className='text-gray-600 mb-6'>
          Our team consists of experienced healthcare professionals who are committed to delivering the best
          possible care to our patients. We believe in a patient-centered approach to healthcare.
        </p>

        <div className='mt-8'>
          <Link
            to='/'
            className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300'
          >
            Back to Home
          </Link>
        </div>
      </div>
      <About_herosection />
      <About_Founder />
      <Type_of_paients_about />
      <What_We_Do_Differently />
      <The_Story_of_Our_Transformation />
      <Trusted_by_Patients_Across_India />
    </div>
  </div>
);

export default About;
