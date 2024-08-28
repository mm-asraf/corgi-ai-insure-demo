
import instantCoverageImg from '../../assets/instant-insurance-coverage.jpeg'
import easyClaimImg from '../../assets/instant-claim.jpeg';
import supportImg from '../../assets/24-7-support.jpeg';

const KeyFeatures = () => {
    const features = [
        {
            title: 'Instant Coverage',
            image: instantCoverageImg,
            description: 'Get immediate coverage with our quick and easy application process.',
            link: '#'
        },
        {
            title: 'Easy Claim',
            image: easyClaimImg,
            description: 'File and manage claims with ease through our streamlined system.',
            link: '#'
        },
        {
            title: '24/7 Support',
            image: supportImg,
            description: 'Access support at any time with our around-the-clock customer service.',
            link: '#'
        }
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            {/* Image Section */}
                            <div className="w-full h-48 bg-gray-200">
                                <img 
                                    src={feature.image} 
                                    alt={feature.title} 
                                    className="w-full h-full object-fit"
                                />
                            </div>
                            {/* Content Section */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600 mb-4">{feature.description}</p>
                                <a 
                                    href={feature.link} 
                                    className="bg-customPurple text-white hover:bg-customWhite hover:text-customPurple border-2 border-customPurple transition-colors px-4 py-2 rounded-md inline-block"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
