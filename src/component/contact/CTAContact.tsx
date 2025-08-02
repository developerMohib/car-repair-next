import React from 'react';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const CTAContact = () => {
    return (
         <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-start mb-6">
                <FaMapMarkerAlt className="text-2xl mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Our Location</h3>
                  <p>123 Auto Repair Street, Garage City</p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <FaPhoneAlt className="text-2xl mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                  <p>(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaClock className="text-2xl mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Working Hours</h3>
                  <p>Mon-Fri: 8AM - 6PM</p>
                  <p>Sat: 9AM - 4PM</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg text-gray-800">
              <form>
                <div className="mb-4">
                  <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
                </div>
                <div className="mb-4">
                  <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
                </div>
                <div className="mb-4">
                  <textarea placeholder="Your Message" rows={4} className="w-full p-3 border rounded-lg"></textarea>
                </div>
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CTAContact;