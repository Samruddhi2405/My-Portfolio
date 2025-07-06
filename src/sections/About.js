import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const groupedSkills = {
    'Programming Languages': ['C', 'C++', 'JavaScript', 'Python'],
    'Frameworks': ['Express', 'Node.js', 'Tailwind CSS', 'React JS', 'React Native'],
    'Tools': ['Git', 'Postman'],
    'Technologies': ['HTML', 'CSS', 'MongoDB'],
    'Database': ['MongoDB', 'MySQL', 'Firebase'],
  };

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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
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
          className="grid md:grid-cols-2 gap-8 items-start"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="font-sans text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m a passionate Full Stack Developer with a solid foundation in web development
              and a focus on building clean, user-friendly applications. My journey so far has
              helped me develop the skills to turn ideas into robust and scalable solutions that
              solve real-world problems.
            </p>

            
            <p className="font-sans text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I enjoy exploring new technologies and adapting quickly to different tools and frameworks.
              I thrive in team environments, love taking ownership of tasks, and deliver results on time.
              Outside of coding, I enjoy reading, writing poems and blogs, and drawing — these creative
              hobbies keep me inspired, balanced, and help me bring fresh ideas to my work.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-poppins text-2xl font-semibold text-textDark dark:text-textLight">
              Skills
            </h3>

            <motion.div variants={containerVariants} className="space-y-4">
              {Object.entries(groupedSkills).map(([category, skills]) => (
                <motion.div key={category} variants={itemVariants} className="space-y-2">
                  <h4 className="font-sans font-medium text-lg text-textDark dark:text-textLight">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-sans px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


/*
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'JavaScript', 'Git', 'Github', 'React Native', 'Tailwind CSS', 'MYSQL', 'Python', 'C++', 'C'];

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
            When I'm not coding, I enjoy learning about new technologies, writing blogs and poems, and 
            expressing my creativity through art and drawing.
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
*/