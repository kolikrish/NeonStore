import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  
  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Normalize values from -1 to 1
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  // Smooth spring animation for the movement
  const springConfig = { damping: 25, stiffness: 100 };
  const moveX = useSpring(useTransform(mouseX, [-1, 1], [-20, 20]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [-1, 1], [-20, 20]), springConfig);
  const moveXReverse = useSpring(useTransform(mouseX, [-1, 1], [20, -20]), springConfig);
  const moveYReverse = useSpring(useTransform(mouseY, [-1, 1], [20, -20]), springConfig);

  return (
    <section className="hero" ref={ref} onMouseMove={handleMouseMove}>
      <motion.div 
        className="hero-glow"
        style={{ x: moveX, y: moveY }}
      ></motion.div>
      <motion.div 
        className="hero-glow-2"
        style={{ x: moveXReverse, y: moveYReverse }}
      ></motion.div>

      <div className="container hero-content">
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Sound of the <br /> <span className="text-gradient">Future</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Immerse yourself in crystal clear audio with our next-generation wireless headphones. Designed for the obsessed.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.button 
              className="btn btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now <ArrowRight size={18} />
            </motion.button>
            <motion.button 
              className="btn btn-secondary flex items-center gap-2"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo <Play size={18} fill="currentColor" />
            </motion.button>
          </motion.div>
        </div>

        <div className="hero-image">
          <motion.div
            style={{ 
              x: moveXReverse, 
              y: moveYReverse,
              rotateX: useTransform(mouseY, [-1, 1], [5, -5]),
              rotateY: useTransform(mouseX, [-1, 1], [-5, 5]),
            }}
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" 
              alt="Futuristic Headphones" 
              className="hero-img glass-panel"
              style={{ 
                borderRadius: '20px', 
                border: 'none', 
                background: 'transparent',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            />
          </motion.div>
          
          {/* Floating badge */}
          <motion.div
            className="absolute -right-10 top-20 glass-panel p-4 rounded-xl hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ y: moveY }}
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-gradient">30hr</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Battery</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
