import React from 'react';

const HeroCTA = () => {
    return (
        <header className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Car Repair Services</h1>
          <p className="text-xl mb-8">Quality maintenance and repair for all vehicle makes and models</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
            Book an Appointment
          </button>
        </div>
      </header>
    );
};

export default HeroCTA;