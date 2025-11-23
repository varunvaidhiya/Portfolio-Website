import images from './images';

const abouts = [
  {
    title: 'Backend Engineering',
    description: 'Specialising in high-performance C++ systems, RESTful APIs, and microservices architecture.',
    imgUrl: images.about01,
  },
  {
    title: 'AI & Machine Learning',
    description: 'Expertise in AI/ML integration, computer vision, and building optimised inference pipelines.',
    imgUrl: images.about02,
  },
  {
    title: 'Robotics & IoT',
    description: 'Experience with ROS2, embedded systems, and IoT microservices across Windows and Linux.',
    imgUrl: images.about03,
  },
  {
    title: 'Full Stack Integration',
    description: 'Strong foundation in API integration with front-end stacks like React, Node, and TypeScript.',
    imgUrl: images.about04,
  },
];

const works = [
  {
    title: 'Autonomous Mecanum Wheel Robot',
    description: 'Distributed ROS backend using C++ and Python. Real-time communication between edge devices and GPU workstation for AI inference.',
    projectLink: 'https://github.com/varunvaidhiya/Mecanum-Wheel-Robot',
    codeLink: 'https://github.com/varunvaidhiya/Mecanum-Wheel-Robot',
    imgUrl: images.about03, // Placeholder
    tags: ['Robotics', 'C++', 'Python', 'AI/ML'],
  },
  {
    title: 'Edge AI Inference Optimisation',
    description: 'Optimised SAM 2 Foundation VLM for autonomous vehicles. Achieved 30% reduction in inference time using quantisation and pruning.',
    projectLink: 'https://github.com/varunvaidhiya/SAM2forAV',
    codeLink: 'https://github.com/varunvaidhiya/SAM2forAV',
    imgUrl: images.AV, // Placeholder
    tags: ['AI/ML', 'Research', 'Python'],
  },
];

const skills = [
  { name: 'C++', bgColor: '#edf2f8', icon: images.cpp },
  { name: 'Python', bgColor: '#edf2f8', icon: images.python },
  { name: 'Java', bgColor: '#edf2f8', icon: images.java },
  { name: 'React', bgColor: '#edf2f8', icon: images.react },
  { name: 'Node.js', bgColor: '#edf2f8', icon: images.node },
  { name: 'Git', bgColor: '#edf2f8', icon: images.git },
  { name: 'Docker', bgColor: '#edf2f8', icon: images.api }, // Using API icon as placeholder for Docker if not available
  { name: 'Linux', bgColor: '#edf2f8', icon: images.mu5 }, // Placeholder
  { name: 'ROS2', bgColor: '#edf2f8', icon: images.redux }, // Placeholder
];

const experiences = [
  {
    year: '2023',
    works: [
      {
        name: 'Software Engineer - IoT & Linux',
        company: '42 Gears Mobility Systems',
        desc: 'Migrated SDK from Java to C#. Developed high-performance backend components in C++. Optimised firmware and driver-level benchmarks.',
      },
    ],
  },
  {
    year: '2021',
    works: [
      {
        name: 'Systems Engineer',
        company: 'TATA Consultancy Services',
        desc: 'Designed scalable POS application using Java, Spring Boot and React. Engineered micro-services architecture. Implemented offline capabilities.',
      },
    ],
  },
];

export default { abouts, works, skills, experiences };
