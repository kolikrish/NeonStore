import React, { useRef } from 'react';
import { Wifi, Battery, Zap, ShieldCheck } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import './Features.css';

const features = [
  {
    icon: <Wifi size={32} />,
    title: "Seamless Connectivity",
    desc: "Instant pairing with ultra-low latency. Stay connected to your devices without interruption."
  },
  {
    icon: <Battery size={32} />,
    title: "All-Day Battery",
    desc: "Up to 40 hours of listening time on a single charge. Fast charge gives you 5 hours in 10 minutes."
  },
  {
    icon: <Zap size={32} />,
    title: "Spatial Audio",
    desc: "Immersive 360° soundstage that places sound all around you for a cinema-like experience."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Durability",
    desc: "Built with aerospace-grade aluminum and water-resistant materials for any adventure."
  }
];

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useMotionTemplate`calc(${mouseYSpring} * -0.5deg)`;
  const rotateY = useMotionTemplate`calc(${mouseXSpring} * 0.5deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * 20); // range -10 to 10
    y.set(yPct * 20); // range -10 to 10
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="features-section container" id="features">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why <span className="text-gradient">Choose Us</span>
        </motion.h2>
      </div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TiltCard className="feature-card glass-panel h-full">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
