
// Import images for the features
import aiAdjusterImg from '../../assets/ai_adjuster.jpeg';
import instantResponseImg from '../../assets/instant_response.jpeg';
import bestCoverageImg from '../../assets/best-coverage.jpeg';
import lowPricesImg from '../../assets/low-prices.jpeg';
import Card from '../utils/Card';



interface WhyChooseUs {
    title: string;
    image: string;
    description: string;
    link: string;
  }

const WhyChooseUs = () => {

    const features:WhyChooseUs[] = [
        {
            title: 'AI Adjuster',
            image: aiAdjusterImg,
            description: 'Leverage advanced AI technology for quick and accurate claim adjustments.',
            link: '#'
        },
        {
            title: 'Instant Response',
            image: instantResponseImg,
            description: 'Receive immediate responses and support for all your insurance needs.',
            link: '#'
        },
        {
            title: 'Best Coverage',
            image: bestCoverageImg,
            description: 'Get access to the best coverage options tailored to your needs.',
            link: '#'
        },
        {
            title: 'Low Prices',
            image: lowPricesImg,
            description: 'Enjoy competitive pricing without compromising on quality.',
            link: '#'
        },
    ];

    return (
        <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feture, index) => (
            <Card
              key={index}
              image={feture.image}
              title={feture.title}
              description={feture.description}
              link="#" // Assuming you want a placeholder link
            />
          ))}
        </div>
      </div>
    </section>
    );
};

export default WhyChooseUs;
