import instance from '@/shared/instance';
import Image from 'next/image';
import React from 'react';
interface Testominals {
  name: string, role: string, quote: string, _id: string
}
const Testominal = async () => {
  const { data } = await instance.get('/componentsdata/testominal');
  const testimonials = data?.data as Testominals[]
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials?.map((testimonial) => (
          <div key={testimonial._id} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="flex items-center">
              <div className="mr-4">
                <Image className='rounded-full' width={40} height={40} src="https://picsum.photos/200" alt={testimonial.name} />
              </div>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testominal;