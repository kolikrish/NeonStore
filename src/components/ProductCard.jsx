import React from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import './Products.css';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      className="glass-panel product-card"
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      // Note: Layout animations can be expensive, so use sparingly
    >
      <div className="card-image-wrapper">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="card-img" 
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.6 }}
        />
        <div className="card-overlay">
          <motion.button 
            className="add-btn flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add to Cart <Plus size={16} />
          </motion.button>
        </div>
      </div>
      <div className="card-content">
        <div className="product-category">{product.category}</div>
        <h3 className="product-title">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="product-price">${product.price}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
