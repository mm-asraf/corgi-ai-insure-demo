import React from 'react';
import {products} from '../utils/util'
import Card from '../utils/Card';


const ProductSection:React.FC = () => {
   
    return (
        <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Insurance Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                image={product.image}
                title={product.name}
                description={product.description}
                link="#" // Assuming you want a placeholder link
              />
            ))}
          </div>
        </div>
      </section>
    );
};

export default ProductSection;
