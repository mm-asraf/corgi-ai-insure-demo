import React from 'react';
import lifeInsuranceImg from '../../assets/LIFE-INSURANCE.png';
import autoInsuranceImg from '../../assets/auto-insurance.jpg';
import healthInsuranceImg from '../../assets/health-insurance.jpeg';
import homeInsuranceImg from '../../assets/home-insurance.jpeg';

const ProductSection = () => {
    const products = [
        {
            name: 'Life Insurance',
            image: lifeInsuranceImg,
            description: 'Secure your family’s future with comprehensive life insurance plans.',
        },
        {
            name: 'Auto Insurance',
            image: autoInsuranceImg,
            description: 'Protect your vehicle and yourself with our reliable auto insurance.',
        },
        {
            name: 'Health Insurance',
            image: healthInsuranceImg,
            description: 'Get the best medical care without financial stress.',
        },
        {
            name: 'Home Insurance',
            image: homeInsuranceImg,
            description: 'Safeguard your home against unexpected events.',
        },
        {
            name: 'Life Insurance',
            image: lifeInsuranceImg,
            description: 'Secure your family’s future with comprehensive life insurance plans.',
        },
        {
            name: 'Auto Insurance',
            image: autoInsuranceImg,
            description: 'Protect your vehicle and yourself with our reliable auto insurance.',
        },
        {
            name: 'Health Insurance',
            image: healthInsuranceImg,
            description: 'Get the best medical care without financial stress.',
        },
        {
            name: 'Home Insurance',
            image: homeInsuranceImg,
            description: 'Safeguard your home against unexpected events.',
        },
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Our Insurance Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            {/* Simplified Image Wrapper */}
                            <div className="w-full h-48 bg-gray-200">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-full object-fit"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <button className="bg-customPurple text-white hover:bg-customWhite hover:text-customPurple border-2 border-customPurple transition-colors px-4 py-2 rounded-md">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
