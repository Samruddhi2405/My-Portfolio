import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'SQL',
    'MongoDB',
    'Git',
    'AWS',
  ];

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
    <section id="about" className="relative py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 dark:via-accent/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-poppins text-4xl font-bold text-center mb-12 text-textDark dark:text-textLight"
        >
          About Me
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="font-sans text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a passionate Full Stack Developer with a strong foundation in web development
              and a keen eye for creating intuitive user experiences. My journey in tech has
              equipped me with the skills to build robust and scalable applications.
            </p>
            <p className="font-sans text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge through technical writing.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="font-poppins text-2xl font-semibold text-textDark dark:text-textLight">Skills</h3>
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  className="font-sans px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 