import instance from '@/shared/instance';
import Image from 'next/image';
import React from 'react';
import { FaCar } from 'react-icons/fa';
interface Benefits {
  title: string, description: string
}
const WhyChooseUs = async () => {
  const { data } = await instance.get('/componentsdata/benefits');
  const benefits = data?.data as Benefits[]
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-red-600 text-center" >Services</h1>
        <h2 className="text-3xl font-bold text-center my-6">Why Choose AutoFix?</h2>
        <h1 className="text-slate-800 text-center mb-8 w-[55%] mx-auto" >our company To convince potential customers Unique selling points (USP), Benefits customers get, Fast Delivery & Affordable Pricing, Dedicated Support, Trusted by Industry Leaders</h1>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <ul className="space-y-4">
              {benefits?.map((benefit, index) => (
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
              className="rounded-lg w-full h-auto" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;