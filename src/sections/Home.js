import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-backgroundDark dark:via-gray-900 dark:to-gray-800"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 dark:bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 dark:bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <h2 className="font-poppins text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              Welcome to my portfolio
            </h2>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold text-textDark dark:text-textLight leading-tight"
          >
            Hi, I'm{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary dark:text-accent">Samruddhi</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-3 bg-primary/20 dark:bg-accent/20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed"
          >
            A passionate Full Stack Developer crafting beautiful and functional web experiences
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 mt-8"
          >
            <a
              href="#projects"
              className="font-roboto px-8 py-4 bg-primary dark:bg-accent text-textLight rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-accent/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="font-roboto px-8 py-4 border-2 border-primary dark:border-accent text-primary dark:text-accent rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-accent/10"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 