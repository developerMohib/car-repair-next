import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const services = [
  {
    title: "Apple Watch Series 7",
    description: "GPS, Aluminium Case, Starlight Sport",
    image: "https://flowbite.com/docs/images/products/apple-watch.png",
    rating: 4.5,
    price: 599
  },
  {
    title: "Samsung Galaxy Buds Pro",
    description: "Noise Cancelling Wireless Earbuds",
    image: "https://flowbite.com/docs/images/products/apple-watch.png",
    rating: 4.7,
    price: 199
  },
  {
    title: "Sony WH-1000XM5",
    description: "Wireless Industry Leading Noise Canceling Headphones",
    image: "https://flowbite.com/docs/images/products/apple-watch.png",
    rating: 4.8,
    price: 349
  },
  {
    title: "MacBook Pro 14-inch",
    description: "Apple M3 Chip, 16GB RAM, 512GB SSD",
    image: "https://flowbite.com/docs/images/products/apple-watch.png",
    rating: 4.9,
    price: 1999
  },
  {
    title: "iPhone 15 Pro Max",
    description: "256GB, Titanium Blue, 5G",
    image: "https://flowbite.com/docs/images/products/apple-watch.png",
    rating: 4.6,
    price: 1299
  },
  {
    title: "Logitech MX Master 3S",
    description: "Wireless Performance Mouse",
    image: "https://flowbite.com/docs/images/products/apple-watch.png",
    rating: 4.4,
    price: 99
  },
  {
    title: "ASUS ROG Gaming Laptop",
    description: "i9, RTX 4080, 32GB RAM, 1TB SSD",
    image: "https://flowbite.com/docs/images/products/apple-watch.png",
    rating: 4.7,
    price: 2799
  },
  {
    title: "Canon EOS R50",
    description: "Mirrorless Camera with 18-45mm Lens",
    image: "https://flowbite.com/docs/images/products/apple-watch.png",
    rating: 4.3,
    price: 999
  }
];


const ServicesOffer = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services?.map((service, index) => (
          <div key={index} className="w-full max-w-sm border border-gray-200 rounded-lg shadow-sm hover:-translate-y-1 transition-all hover:shadow-md">
            <Link href="#">
              <Image className="p-8 rounded-t-lg mx-auto" width={300} height={100} src={service.image} alt="product image" />

            </Link>
            <div className="px-5 pb-5">
              <Link href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">{service.title}</h5>
              </Link>

              <p className="text-base tracking-tight text-gray-900">{service.description}
              </p>

              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {Array.from({ length: 5 }, (_, i) => {
                    const roundedRating = Math.floor(service.rating * 2) / 2;
                    const full = i + 1 <= Math.floor(roundedRating);
                    const half = !full && i + 0.5 === roundedRating;

                    return (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${full ? "text-yellow-300" : half ? "text-yellow-300" : "text-gray-200"}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    );
                  })}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {service.rating}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900">${service.price}</span>
                <button className="button">
                  <span className="label p-2 border border-gray-400 rounded-md cursor-pointer hover:bg-red-400">+ Add to card</span>
                  <span className="gradient-container">
                    <span className="gradient" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOffer;