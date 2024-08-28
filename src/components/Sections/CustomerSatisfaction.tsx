import { FaStar } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import {reviews} from '../utils/util'
const CustomerSatisfaction = () => {
    
      

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold  mb-8">Our <span className='text-customBlue'>Satiesfied</span> Customers </h2>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showStatus={false}
          className="relative"
        >
          {reviews.map((review, index) => (
            <div key={index} className="p-6">
              <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col items-center" style={{ minHeight: '300px' }}>
                <div className="w-28 h-28 mb-6 rounded-full overflow-hidden border-4 border-gray-200">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-2xl" />
                  ))}
                </div>
                <p className="text-lg italic mb-4">"{review.feedback}"</p>
                <p className="font-semibold text-gray-700">{review.name}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CustomerSatisfaction;
