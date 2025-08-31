import instance from '@/shared/instance';
import React from 'react';
interface Steps {
    id: number, title: string, description: string,_id :string
}

const HowWorks = async () => {
    const { data } = await instance.get('/componentsdata/benefits');
    const steps = data?.data as Steps[]
    return (
        <section className="py-16 px-6 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {steps?.map((step) => (
                    <div
                        key={step._id}
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