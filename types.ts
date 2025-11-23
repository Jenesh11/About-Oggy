export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  url: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  icon?: string;
}