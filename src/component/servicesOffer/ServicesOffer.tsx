import React from 'react';
import { FaTools, FaCar, FaOilCan} from 'react-icons/fa';

const services = [
  {
    icon: <FaTools />,
    title: "Engine Repair",
    description: "Professional diagnostics and repair for all engine issues"
  },
  {
    icon: <FaOilCan />,
    title: "Oil Change",
    description: "Premium oil change services with quality lubricants"
  },
  {
    icon: <FaCar />,
    title: "Brake Service",
    description: "Complete brake inspection and repair services"
  }
];

const ServicesOffer = () => {
    return (
        <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
};

export default ServicesOffer;