import React from 'react';
const steps = [
    {
        id: 1,
        title: "Book Appointment",
        description: "Choose your service and time online or call us directly.",
    },
    {
        id: 2,
        title: "We Diagnose",
        description: "Our expert mechanics inspect and explain the issue clearly.",
    },
    {
        id: 3,
        title: "We Fix It",
        description: "Quick and quality repairs using genuine parts.",
    },
    {
        id: 4,
        title: "Drive Happy",
        description: "Get your car back — clean, repaired, and ready to go!",
    },
];

const HowWorks = () => {
    return (
        <section className="py-16 px-6 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                    >
                        <div className="text-red-600 text-4xl font-bold mb-4">{step.id}</div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default HowWorks;