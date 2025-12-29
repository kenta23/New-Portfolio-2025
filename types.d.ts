export interface Project { title: string; description: string; tags: string[]; imageContent?: string; link?: string; }
export interface Certification { title: string; imageContent?: string; link?: string; }
export interface Skill { title: string; imageContent?: string;}

export interface PortfolioPageProps {

    logo?: { initials: React.ReactNode; name: React.ReactNode; };
  
    navLinks?: NavLink[];
  
    resume?: { label: string; onClick?: () => void; };
  
    hero?: { titleLine1: React.ReactNode; titleLine2Gradient: React.ReactNode; subtitle: React.ReactNode; };
  
    ctaButtons?: { primary: { label: string; onClick?: () => void; }; secondary: { label: string; onClick?: () => void; }; };
  
    projects?: Project[];

    certifications?: Certification[];

    skills?: Skill[];
  
    stats?: Stat[];
  
    showAnimatedBackground?: boolean;
  
  }