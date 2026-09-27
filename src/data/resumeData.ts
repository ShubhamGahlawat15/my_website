import { PortfolioData } from '../types/portfolio';

export const resumeData: PortfolioData = {
  personalInfo: {
    name: 'Shubham Gahlawat',
    title: 'Web Developer Intern',
    subtitle: 'Computer Science Engineering Student',
    location: 'Sonipat, Haryana, India',
    phone: '+91 9253324018',
    email: 'gahlawatshubham85@gmail.com',
    github: {
      username: 'ShubhamGahlawat15',
      url: 'https://github.com/ShubhamGahlawat15',
    },
    linkedin: {
      username: 'shubham-gahlawat',
      url: 'https://linkedin.com/in/shubham-gahlawat',
    },
    objective:
      'Motivated final-year Computer Science (Polytechnic) student with a strong foundation in web development fundamentals (HTML, CSS, JavaScript, React, Node.js) and hands-on Python programming experience. Seeking a Web Developer internship to apply my technical skills, contribute to real-world projects, and grow as a developer in a collaborative environment.',
    aboutBio: [
      'Final-year Computer Science Engineering diploma student at Chhotu Ram Polytechnic (Maharshi Dayanand University). Passionate about crafting interactive web applications with modern frontend & backend technologies.',
      'Completed a specialized 120-hour Python Development Internship at Ulterior Associates (Hartron Advanced Skill Centre), mastering core programming concepts, object-oriented paradigms, and practical AI tool workflows.',
      'Possesses a strong foundation across HTML, CSS, JavaScript, React, Node.js, Python, MySQL, and MongoDB, with hands-on proficiency in Git, GitHub, VS Code, Google Colab, and Antigravity tooling.'
    ],
    resumePdfUrl: '/Shubham_Gahlawat_Resume.pdf',
  },
  education: [
    {
      degree: 'Diploma in Computer Science Engineering',
      institution: 'Chhotu Ram Polytechnic',
      university: 'Maharshi Dayanand University (MDU)',
      duration: '2024 – 2027 (Final Year)',
      score: '67.2%',
      status: 'Final Year Student',
      highlights: [
        'Core coursework in Web Technologies, Software Engineering, Object-Oriented Programming, and Data Structures.',
        'Practical labs in Database Management Systems (MySQL, MongoDB) and Client-Side/Server-Side Web Development.',
        'Collaborative technical problem-solving and software project building.'
      ],
    },
  ],
  skillCategories: [
    {
      title: 'Languages',
      iconName: 'Code',
      skills: [
        { name: 'HTML5', category: 'languages', description: 'Semantic structure, accessibility & DOM hierarchy' },
        { name: 'CSS3', category: 'languages', description: 'Responsive layouts, Flexbox, Grid & animations' },
        { name: 'JavaScript (ES6+)', category: 'languages', description: 'Asynchronous JS, DOM manipulation & modern syntax' },
        { name: 'Python', category: 'languages', description: 'OOP, data structures, control flow & scripting' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      iconName: 'Layers',
      skills: [
        { name: 'React.js', category: 'frameworks', description: 'Component-driven architecture, state management & hooks' },
        { name: 'Node.js', category: 'frameworks', description: 'Server-side JavaScript runtime & backend logic' },
      ],
    },
    {
      title: 'Databases',
      iconName: 'Database',
      skills: [
        { name: 'MySQL', category: 'databases', description: 'Relational database management, SQL queries & schemas' },
        { name: 'MongoDB', category: 'databases', description: 'NoSQL document storage, JSON collections & data models' },
      ],
    },
    {
      title: 'Developer Tools & Platforms',
      iconName: 'Wrench',
      skills: [
        { name: 'Git', category: 'tools', description: 'Version control system & branch management' },
        { name: 'GitHub', category: 'tools', description: 'Code hosting, repositories & team collaboration' },
        { name: 'VS Code', category: 'tools', description: 'Primary IDE, debugging & extension workflow' },
        { name: 'Google Colab', category: 'tools', description: 'Cloud notebook environment for Python & data exploration' },
        { name: 'Antigravity', category: 'tools', description: 'Modern development & AI-assisted coding environment' },
      ],
    },
  ],
  internships: [
    {
      title: 'Python Development Intern',
      company: 'Ulterior Associates',
      center: 'Hartron Advanced Skill Centre',
      duration: 'June 2026 – July 2026',
      hours: '120-hour Internship Program',
      location: 'Rohtak, Haryana',
      responsibilities: [
        'Learned and applied Python fundamentals including syntax, control flow, and modular functions.',
        'Worked with core data structures and object-oriented programming (OOP) principles to construct structured scripts.',
        'Gained exposure to cutting-edge AI tools and explored their practical applications in development workflows.',
        'Collaborated on practical programming exercises and hands-on coding challenges.'
      ],
      techStack: ['Python', 'OOP', 'Data Structures', 'AI Tools', 'Google Colab', 'Git'],
    },
  ],
  certifications: [
    {
      title: 'RSDC Certification Course',
      program: 'Skill Development Program',
      duration: '1 Month',
      issuer: 'Rubber Skill Development Council (RSDC)',
      description: 'Intensive 1-month skill development program focused on practical technical skill enhancement and industry readiness.',
    },
  ],
  projects: [
    {
      id: 'fullstack-web-app',
      title: 'React & Node.js Interactive Web Application',
      subtitle: 'Modern Full-Stack Web Development Project',
      description: 'A dynamic web platform built using React components, modern CSS layouts, and Node.js backend integration.',
      problemSolved: 'Demonstrates modular frontend component design paired with efficient server-side data handling and responsive user interface layout.',
      keyFunctionality: [
        'Interactive React UI components with responsive CSS Flexbox/Grid design.',
        'Node.js backend execution handling asynchronous client requests.',
        'RESTful communication and structured data state management.',
        'Version-controlled with Git and hosted on GitHub.'
      ],
      technologies: ['React', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
      category: 'Web Development',
      githubUrl: 'https://github.com/ShubhamGahlawat15',
      featured: true,
      iconName: 'Globe',
    },
    {
      id: 'python-oop-toolkit',
      title: 'Python OOP & Data Structure Suite',
      subtitle: 'Hartron Internship Capstone Project',
      description: 'A structured Python application built during the 120-hour Ulterior Associates internship utilizing object-oriented programming principles.',
      problemSolved: 'Implements core data structures (lists, dictionaries, tuples) and OOP abstractions for clean, reusable Python software modules.',
      keyFunctionality: [
        'Class-based architectures enforcing encapsulation and inheritance.',
        'Custom control-flow pipelines and algorithmic functions.',
        'Practical integration of Python scripts in VS Code and Google Colab.',
        'Applied AI coding tool workflows for optimization.'
      ],
      technologies: ['Python', 'OOP', 'Data Structures', 'Google Colab', 'VS Code'],
      category: 'Python & AI',
      githubUrl: 'https://github.com/ShubhamGahlawat15',
      featured: true,
      iconName: 'Terminal',
    },
    {
      id: 'database-crud-system',
      title: 'MySQL & MongoDB Multi-Database Explorer',
      subtitle: 'Relational & Document Database Implementation',
      description: 'Comprehensive database project exploring SQL relational tables in MySQL alongside JSON document collections in MongoDB.',
      problemSolved: 'Compares relational database schema design (SQL queries, primary keys, relationships) with flexible NoSQL schema models.',
      keyFunctionality: [
        'Structured MySQL query creation, table joins, and index management.',
        'MongoDB document manipulation using Node.js drivers.',
        'Data persistence and validation across different database models.'
      ],
      technologies: ['MySQL', 'MongoDB', 'Node.js', 'JavaScript'],
      category: 'Database & Backend',
      githubUrl: 'https://github.com/ShubhamGahlawat15',
      featured: true,
      iconName: 'Database',
    },
    {
      id: 'interactive-3d-portfolio',
      title: 'Futuristic 3D Web Developer Identity',
      subtitle: 'Interactive Three.js & React Portfolio',
      description: 'A high-end 3D personal website showcasing Shubham Gahlawat\'s complete technical resume with particle systems, R3F floating objects, and responsive cyber aesthetic.',
      problemSolved: 'Presents traditional resume data as an engaging 3D digital experience with 60fps performance and responsive mobile fallbacks.',
      keyFunctionality: [
        'React Three Fiber 3D interactive floating cyber orb and particle cloud.',
        'Framer Motion scroll-driven animations and glassmorphism styling.',
        '100% truthful data representation extracted from official resume.',
        'Responsive layout with reduced motion & WebGL fallback.'
      ],
      technologies: ['React', 'Three.js', 'React Three Fiber', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
      category: 'Web Development',
      githubUrl: 'https://github.com/ShubhamGahlawat15',
      featured: true,
      iconName: 'Sparkles',
    },
  ],
};
