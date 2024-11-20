import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Package, Clock, Shield } from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';
import toast from 'react-hot-toast';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/shop')}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Shop</span>
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  const features = [
    {
      icon: Package,
      title: 'Professional Grade',
      description: 'Industrial strength formula for lasting bonds'
    },
    {
      icon: Clock,
      title: 'Quick Setting',
      description: 'Sets in seconds for efficient work'
    },
    {
      icon: Shield,
      title: 'Guaranteed Quality',
      description: '100% satisfaction guarantee'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <button
        onClick={() => navigate('/shop')}
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-8 transition"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Shop</span>
      </button>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-3xl font-bold text-blue-600">${product.price}</span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <p className="text-gray-600 mb-8">{product.description}</p>

          <div className="space-y-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-md text-white transition ${
              product.stock > 0
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="h-5 w-5" />
            <span>{product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}