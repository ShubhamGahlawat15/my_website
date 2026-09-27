export interface Education {
  degree: string;
  institution: string;
  university: string;
  duration: string;
  score: string;
  status: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    category: 'languages' | 'frameworks' | 'tools' | 'databases';
    description?: string;
  }[];
}

export interface Internship {
  title: string;
  company: string;
  center: string;
  duration: string;
  hours: string;
  location: string;
  responsibilities: string[];
  techStack: string[];
}

export interface Certification {
  title: string;
  program: string;
  duration: string;
  issuer: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problemSolved: string;
  keyFunctionality: string[];
  technologies: string[];
  category: 'Web Development' | 'Python & AI' | 'Database & Backend';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  iconName: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  phone: string;
  email: string;
  github: {
    username: string;
    url: string;
  };
  linkedin: {
    username: string;
    url: string;
  };
  objective: string;
  aboutBio: string[];
  resumePdfUrl: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  education: Education[];
  skillCategories: SkillCategory[];
  internships: Internship[];
  certifications: Certification[];
  projects: Project[];
}
