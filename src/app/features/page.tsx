import Image from 'next/image';
import React from 'react';

const FeaturePage = () => {
    return (
        <>
            <main className="py-16 px-6 text-gray-800">
                {/* 1. Hero Banner */}
                <section className="text-center mb-20">
                    <h1 className="text-4xl font-bold mb-4">Our Features</h1>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto">
                        Discover why AutoFix Garage is the most trusted car repair service in town.
                    </p>
                </section>

                {/* 2. Why Choose Us */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Why Choose AutoFix Garage?</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li>✅ Certified and experienced mechanics</li>
                            <li>✅ Same-day repair service</li>
                            <li>✅ Warranty-backed repairs</li>
                            <li>✅ Affordable pricing with transparency</li>
                            <li>✅ 24/7 emergency hotline</li>
                        </ul>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <Image src="https://www.shutterstock.com/image-vector/why-choose-us-symbol-text-260nw-2396164945.jpg"
                            alt="Mechanic working on car"
                            className="rounded-lg w-full h-auto" width={300} height={300} />
                    </div>
                </section>

                {/* 3. Core Features */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Core Services We Provide</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: '🔧 Engine Diagnostics',
                                desc: 'We use advanced tools to identify and fix engine issues fast.',
                            },
                            {
                                title: '🛠 Brake Repair',
                                desc: 'We ensure your brakes are responsive and reliable.',
                            },
                            {
                                title: '🔋 Battery Replacement',
                                desc: 'Quick and safe battery checks and replacements.',
                            },
                            {
                                title: '🚗 AC Servicing',
                                desc: 'Beat the heat with our expert AC servicing.',
                            },
                            {
                                title: '🛞 Wheel Alignment',
                                desc: 'Smooth rides with our precision wheel alignment.',
                            },
                            {
                                title: '🧽 Car Wash & Detailing',
                                desc: 'Make your car shine like new with full-body cleaning.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. Testimonials */}
                <section className="mb-20 bg-gray-100 py-12 rounded-lg">
                    <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                name: 'Hasan A.',
                                feedback:
                                    'Excellent service and quick turnaround. My car runs smoother than ever!',
                            },
                            {
                                name: 'Sadia M.',
                                feedback: 'They treated me with respect and explained everything clearly.',
                            },
                            {
                                name: 'Rafiq I.',
                                feedback: 'Affordable and reliable! AutoFix is now my go-to garage.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg shadow">
                                <p className="text-gray-700 italic">“{item.feedback}”</p>
                                <p className="mt-4 font-semibold text-red-600">– {item.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. Call to Action */}
                <section className="text-center py-12 px-6 bg-gray-900 text-white rounded-xl shadow-lg max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Ready to Book Your Service?</h2>
                    <p className="text-lg mb-6">Let’s get your car back on the road – fast and safe.</p>
                    <a
                        href="/contact"
                        className="bg-white text-red-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
                    >
                        📞 Contact Us
                    </a>
                </section>
            </main>
        </>
    );
};

export default FeaturePage;