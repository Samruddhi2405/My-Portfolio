import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'TravelEase',
      description: 'A comprehensive travel planning platform that helps users organize their trips, find accommodations, and discover local attractions.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      githubLink: 'https://github.com/yourusername/travelease',
      demoLink: 'https://travelease-demo.com',
    },
    {
      title: 'Food Delivery App',
      description: 'A full-stack food delivery application with real-time order tracking, restaurant management, and user authentication.',
      techStack: ['React Native', 'Firebase', 'Redux', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/food-delivery',
      demoLink: 'https://food-delivery-demo.com',
    },
    {
      title: 'Finance Advisor',
      description: 'An AI-powered financial planning tool that helps users manage their investments, track expenses, and plan for retirement.',
      techStack: ['Python', 'TensorFlow', 'React', 'Django', 'PostgreSQL'],
      githubLink: 'https://github.com/yourusername/finance-advisor',
      demoLink: 'https://finance-advisor-demo.com',
    },
    {
      title: 'Dev.Hike',
      description: 'A platform for developers to share their coding journey, connect with mentors, and track their learning progress.',
      techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      githubLink: 'https://github.com/yourusername/dev-hike',
      demoLink: 'https://dev-hike-demo.com',
    },
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

  const cardVariants = {
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
    <section id="projects" className="relative py-20 px-6 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 dark:via-accent/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-poppins text-4xl font-bold text-center mb-12 text-textDark dark:text-textLight"
        >
          My Projects
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
            >
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-poppins text-2xl font-semibold text-textDark dark:text-textLight group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-poppins text-lg font-medium text-textDark dark:text-textLight">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-sans px-3 py-1.5 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm transition-colors duration-300 group-hover:bg-primary/10 dark:group-hover:bg-accent/10 group-hover:text-primary dark:group-hover:text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-roboto px-6 py-2.5 bg-primary dark:bg-accent text-textLight rounded-lg hover:bg-primary/90 dark:hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-accent/20"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-roboto px-6 py-2.5 border-2 border-primary dark:border-accent text-primary dark:text-accent rounded-lg hover:bg-primary/10 dark:hover:bg-accent/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-accent/10"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 