import Image from 'next/image';
import React from 'react';
import { FaCar } from 'react-icons/fa';
const benefits = [
  {
    title: "Certified Technicians",
    description: "Our mechanics are certified and experienced"
  },
  {
    title: "Same Day Service",
    description: "Most repairs completed within 24 hours"
  },
  {
    title: "Warranty Included",
    description: "All repairs come with a 12-month warranty"
  },
  {
    title: "Free Diagnostics",
    description: "Complimentary diagnostics with any repair"
  }
];
const WhyChooseUs = () => {
    return (
        <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose AutoFix?</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <FaCar className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <Image src="https://www.shutterstock.com/image-vector/why-choose-us-symbol-text-260nw-2396164945.jpg" 
                alt="Mechanic working on car"
                className="rounded-lg w-full h-auto" width={300} height={300}/>              
            </div>
          </div>
        </div>
      </section>
    );
};

export default WhyChooseUs;