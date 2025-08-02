import Head from 'next/head';
import React from 'react';
const services = [
    {
        id: 1,
        title: "Engine Diagnostics",
        description: "Advanced diagnostic tools to quickly find and fix engine issues.",
        icon: "🛠️",
    },
    {
        id: 2,
        title: "Oil Change",
        description: "Quick and affordable oil changes to keep your engine healthy.",
        icon: "🛢️",
    },
    {
        id: 3,
        title: "Brake Repair",
        description: "Expert brake inspection, replacement, and fluid refill.",
        icon: "🛑",
    },
    {
        id: 4,
        title: "Battery Replacement",
        description: "Fast and reliable battery testing and installation.",
        icon: "🔋",
    },
    {
        id: 5,
        title: "AC & Heating",
        description: "Stay cool or warm with full AC and heater servicing.",
        icon: "❄️",
    },
    {
        id: 6,
        title: "Tire Services",
        description: "Tire rotation, balancing, and replacement for safe driving.",
        icon: "🚗",
    },
];
const ServicesPage = () => {
    return (
        <>
            <Head>
                <title>Services | AutoFix Garage</title>
                <meta name="description" content="Learn about AutoFix Garage - trusted car repair experts." />
            </Head>
            <main className="py-16 px-6 text-gray-800">
                {/* Page Header */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                    <p className="text-lg max-w-xl mx-auto text-gray-600">
                        We offer a full range of car repair and maintenance services — handled by certified professionals.
                    </p>
                </section>

                {/* Services Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
                        >
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </section>

                {/* Call to Action */}
                <section className="text-center mt-20">
                    <h2 className="text-2xl font-bold mb-4">Need a Repair or Checkup?</h2>
                    <p className="mb-6 text-gray-700">
                        Book your service today and let our experts take care of your car!
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold">
                        Book Appointment
                    </button>
                </section>
            </main></>

    );
};

export default ServicesPage;