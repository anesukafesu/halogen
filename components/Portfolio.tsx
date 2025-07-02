
import React from 'react';

interface ProductItem {
  image: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
}

const productItems: ProductItem[] = [
  {
    image: 'https://picsum.photos/seed/relayapp/600/400',
    category: 'E-COMMERCE & DROPSHIPPING',
    title: 'Relay',
    description: 'A Shopify app that helps dropshippers sync orders with suppliers more seamlessly, automating workflows and reducing manual entry.',
    tags: ['Shopify', 'Automation', 'SaaS', 'E-Commerce'],
  },
  {
    image: 'https://picsum.photos/seed/fourwalls/600/400',
    category: 'REAL ESTATE MARKETPLACE',
    title: 'Fourwalls',
    description: 'A comprehensive property marketplace for Rwanda, connecting buyers, sellers, and renters with detailed listings and powerful search tools.',
    tags: ['Marketplace', 'React', 'Rwanda', 'PropTech'],
  },
];

const ProductCard: React.FC<ProductItem> = ({ image, category, title, description, tags }) => (
  <div className="bg-slate-800/50 rounded-lg overflow-hidden group border border-slate-700/50 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <div className="overflow-hidden">
      <img src={image} alt={title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
    </div>
    <div className="p-6">
      <p className="text-cyan-400 text-sm font-medium mb-1 tracking-wider">{category}</p>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
           <span key={index} className="bg-slate-700 text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full">
             {tag}
           </span>
        ))}
      </div>
    </div>
  </div>
);

const Products = () => {
  return (
    <section id="products" className="py-20 lg:py-32 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Our Products</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">From streamlining e-commerce to revolutionizing real estate, our products are built to perform.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {productItems.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
