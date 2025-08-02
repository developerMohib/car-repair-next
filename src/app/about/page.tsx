import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About | AutoFix Garage</title>
                <meta name="description" content="Learn about AutoFix Garage - trusted car repair experts." />
            </Head>
            <main className="py-16 px-6 text-gray-800">
                {/* Header */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">About AutoFix Garage</h1>
                    <p className="text-lg max-w-2xl mx-auto text-gray-600">
                        Trusted by car owners since 2010 — We provide expert vehicle repair & maintenance services to keep you moving safely.
                    </p>
                </section>

                {/* About content */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                        <p className="mb-4 text-gray-700">
                            AutoFix Garage is a team of certified mechanics and auto enthusiasts
                            dedicated to providing honest, reliable, and efficient car repair
                            services. We specialize in diagnostics, engine repair, brake service, oil changes, and more.
                        </p>
                        <p className="text-gray-700">
                            With over 10 years of experience, we’ve built a reputation for quality work, transparency, and unbeatable service.
                        </p>
                    </div>
                    <div>
                        <Image
                            src="https://www.shutterstock.com/image-vector/why-choose-us-symbol-text-260nw-2396164945.jpg"  // Replace with your local or external image
                            alt="AutoFix Garage"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </section>

                {/* Mission & Values */}
                <section className="mt-20">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Our Mission & Values</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-xl font-bold mb-2">Customer First</h3>
                            <p className="text-gray-600">We treat every vehicle like our own and ensure complete transparency.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-xl font-bold mb-2">Quality Work</h3>
                            <p className="text-gray-600">Certified technicians and genuine parts — no compromises.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
                            <p className="text-gray-600">We value your time. Most repairs are done same-day.</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center mt-24">
                    <h2 className="text-3xl font-bold mb-4">Ready to Experience the Best Car Service?</h2>
                    <p className="text-lg mb-6 text-gray-700">Contact us today and book your appointment online or by phone.</p>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold">
                        Book Now
                    </button>
                </section>
            </main>
        </>
    );
};

export default AboutPage;