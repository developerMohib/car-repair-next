import Head from 'next/head';
import React from 'react';

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Contact | AutoFix Garage</title>
                <meta name="description" content="Learn about AutoFix Garage - trusted car repair experts." />
            </Head>
            <main className="py-16 px-6 text-gray-800">
                {/* Header */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-600">
                        Have questions or need help? Reach out — we&apos;re here for you!
                    </p>
                </section>

                {/* Contact Info + Form */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-1">📍 Garage Address</h3>
                            <p>123 Auto Lane, Dhaka, Bangladesh</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">📞 Phone</h3>
                            <p>+880 1234 567890</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">📧 Email</h3>
                            <p>support@autofixgarage.com</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">🕒 Working Hours</h3>
                            <p>Sat–Thu: 9AM – 8PM</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-6 bg-white p-6 rounded-xl shadow-md">
                        <div>
                            <label className="block font-medium mb-1">Your Name</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md px-4 py-2"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Email Address</label>
                            <input
                                type="email"
                                className="w-full border border-gray-300 rounded-md px-4 py-2"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Message</label>
                            <textarea
                                rows={4}
                                className="w-full border border-gray-300 rounded-md px-4 py-2"
                                placeholder="Write your message"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-red-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-red-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </section>

                {/* CTA Section */}
                <section className="mt-24 bg-gray-900 text-white text-center py-12 px-6 rounded-xl max-w-4xl mx-auto shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Need Quick Help?</h2>
                    <p className="text-lg mb-6">Call our hotline or message us directly to get immediate support.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="tel:+8801234567890"
                            className="bg-white text-red-600 px-6 py-3 font-semibold rounded-md hover:bg-gray-100 transition"
                        >
                            📞 Call Now
                        </a>
                        <a
                            href="mailto:support@autofixgarage.com"
                            className="bg-white text-red-600 px-6 py-3 font-semibold rounded-md hover:bg-gray-100 transition"
                        >
                            📧 Email Us
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ContactPage;