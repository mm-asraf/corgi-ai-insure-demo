import React from 'react';

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="w-full h-48 bg-gray-200">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-fit"
        />
      </div>
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <a 
          href={link} 
          className="bg-customPurple text-white hover:bg-customWhite hover:text-customPurple border-2 border-customPurple transition-colors px-4 py-2 rounded-md mt-auto inline-block text-center"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
