import Image from "next/image";

const AboutUs = () => {
    return (
        <section id="about" className="bg-gray-100 py-12 container px-4">
            <div className="md:grid grid-cols-2 gap-8">
                <div className="relative">
                    <Image src="https://www.shutterstock.com/image-vector/why-choose-us-symbol-text-260nw-2396164945.jpg"
                        alt="Mechanic working on car"
                        className="rounded-lg w-full h-auto" width={300}
                        height={300} />
                    <Image src="https://flowbite.com/docs/images/products/apple-watch.png"
                        alt="Mechanic working on car"
                        className="rounded-lg absolute bottom-0 -right-5 border-2 border-gray-300 p-2 bg-white" width={280} height={280} />
                </div>
                <div className="mx-auto">
                    <article className="bg-white p-8 rounded-xl">
                        <h1 className="text-red-600" >About Us</h1>
                        <h2 className="text-4xl font-semibold text-gray-800 mb-4">AutoFix Garage are qualified and experienced of this field</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            At <strong>AutoFix Garage</strong> — your trusted partner for reliable, affordable, and professional vehicle care. Since journey began, we&apos;ve been committed to delivering top-quality auto repair and maintenance services with a focus on honesty, transparency, and customer satisfaction.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            We treat every vehicle like our own. Whether it&apos;s a quick oil change, engine diagnostics, brake service, or full-body repair — our certified mechanics are equipped with the latest tools and expertise to get you back on the road, safely and smoothly.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            We believe in building long-term relationships with our customers through consistent service, fair pricing, and a friendly approach.
                        </p>
                        <button className="button mt-3">
                            <span className="label p-2 border border-gray-400 rounded-md cursor-pointer bg-red-500 hover:bg-white">Get More Info</span>
                            <span className="gradient-container">
                                <span className="gradient" />
                            </span>
                        </button>
                    </article>
                </div>
            </div>

        </section>
    );
};

export default AboutUs;