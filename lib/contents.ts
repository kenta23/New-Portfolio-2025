import { PortfolioPageProps } from "@/types";

type ProjectTag = {
  projectType?: string;
  deliverables?: string;
  tools?: string;
};

type Problem = {
  problem: string;
  solution: string;
};

type UserPersona = {
  about: string;
  quoute?: string;
  quote?: string;
  painpoints: string[];
  goals: string[];
};

export type ProjectContent = {
  id?: number;
  title: string;
  description: string;
  image: string;
  link: string;
  projectTags?: ProjectTag[];
  introduction?: string;
  background?: string;
  targetUser?: string;
  problemStatement?: string;
  problems?: Problem[];
  userPersona?: UserPersona[];
  features?: string[];
  ideation?: {
    title: string;
    image: string | string[];
    description?: string;
    mockups?: {
      title?: string;
      image?: string;
      description?: string;
    }[];
  }[];
  sourceCode?: string;
};

export const contents: Record<string, ProjectContent> = {
  muzi: {
    id: 1,
    title: 'Muzi',
    description: 'Music app UI/UX Design and Case study',
    image: '/images/muzi/muzi_banner.png',
    link: '/projects/muzi',
    projectTags: [
      {
        projectType: 'Self-Project',
      },
      {
        deliverables: 'Mockups, UI/UX Presentation',
      },
      {
        tools: 'Figma, Canva',
      },
    ],
    introduction:
      'Muzi is a music app for music enthusiasts. It allows users to stream any music they want and interact with their favorite artists',
    background: '',
    targetUser:
      'The music listeners who wants to listen songs in a cheapest way so we offering this app that is more freemium feel to users.',
    problemStatement:
      "a listener is a music enthusiast who's always listening music on his phone. they want a music app that can interacts with other listeners so he can enjoy to communicate and listen at the same time while using it.",
    problems: [
      {
        problem: "Some music apps can't play the music they want if they aren't subscriber",
        solution:
          'Design/Create an app that provides more skips for free users but unlimited skips for subscribers',
      },
      {
        problem:
          "User's struggling to find a music they played before because some music apps don't have history feature ",
        solution: 'Add History feature',
      },
      {
        problem:
          "User's might want to play a music based on their moods. but they need to manually set their playlists",
        solution: 'Add Smart Recommendation with AI and chat bot to manipulate the playlist',
      },
    ],
    userPersona: [
      {
        about:
          'Henry is a college student lives in Manila, Philippines. He is a beatmaker who can play instruments and make an instrumental music by using digital platform. His favorite genre is Pop and listens more to it. that way it helps him to be inspired more and make a new music ideas.',
        quoute: '"Music is in my body so i can\'t live without music, i want to become one of the famous artists someday"',
        painpoints: [
          'Feels some of recommended artists are not relevant to his likings',
          'Struggling to find a music he forgot.',
          "Some music apps don't have a nice suggestion when it comes to searching music",
          "He can't play music whenever he goes outside and has no data",
          'He wants to listen to music in a cheapest way so he can focus more on his music career',
        ],
        goals: [
          'Create Personalization settings to feel he has the authority',
          'History feature for the music he played',
          'Looking up or search by artists or songs',
          'Listen to music offline when needed',
          'Skippable play songs in a free version for a limited time.',
        ],
      },
      {
        about:
          "Miguel is a tech-savvy college student who listens to music daily whether he's studying, commuting, or hanging out with friends. Music helps him concentrate, express emotions, and discover new artists. He often shares songs on social media and likes apps that recommend tracks based on his mood.",
        quote:
          '"Music is part of my daily routine. I want my playlist to match my mood — whether I\'m coding, working out, or just chilling."',
        painpoints: [
          'Annoyed by too many ads and app clutter.',
          "Feels recommendations sometimes don't match his mood.",
          'Some apps use too much data or battery.',
        ],
        goals: [
          'Discover new songs and artists that match his taste.',
          'Create and share playlists easily with friends.',
          'Listen to music offline without interruptions.',
          'Have personalized playlists (e.g., "Focus", "Morning Vibes").',
        ],
      },
    ],
    features: [
      'Social Media feature – Future steps', 
      'Add Tracking feature (Similar to spotify wrapped). Monthly and yearly tracking feature',
      'Offlline mode',
      'Community Interaction (live, reels from the artists etc.)',
      'Collaborative Listening Feature (one host, multiple joiners)',
      'Cross Platform',
      'Personalization',
      'Share Playlists',
      'History feature',
      'Gamification feature (top listening artists, listening time, ranking)',
    ],
    ideation: [
      { 
        title: 'Wireframes',
        image: '/images/muzi/wireframe.png',
        description: 'Digitally created wireframes for the early stages of design',
      },
      { 
        title: 'Information Architecture',
        image: '/images/muzi/muzi_IA.png',
        description: 'I Brainstormed and created information architecture so i can have a better understanding of the app and how it should be structured.',
      }, 
      { 
         title: 'Flowchart',
         image: '/images/muzi/flowchart.png',
         description: 'I created a flowchart to visualize the user journey and how the app should flow.',
      }, 
      {
        title: 'High Fidelity Mockups',
        mockups: [
          {
            title: 'Feature 1',
            image: '/images/muzi/feature%201.png',
            description: 'From logging in, to onboarding process and redirecting to the home page',
          },
          {
            title: 'Feature 2',
            image: '/images/muzi/feature%202.png',
            description: 'Library page that shows all the liked songs and playlists that the user created',
          },
          {
            title: 'Feature 3',
            image: '/images/muzi/feature%203.png',
            description: 'Other features such as Muzi Reels, Lyra AI and more',
          },
        ],
        image: ""
      },
    ],
  },

  /**FINWISE SECTION*/

  finwise: {
    id: 2,
    title: 'Finwise',
    description: 'Finwise is a financial planning app that allows users to plan their finances.',
    image: '/images/finwise/banner.png',
    link: 'https://finwise-buget-tracker.vercel.app/',
    sourceCode: 'https://github.com/kenta23/Finwise',
    introduction: 'Built a budget tracker app that allows users to track their finances, save for goals, and plan for the future.',
    features: [
      'Savings section',
      'Expenses Listings',
      'Income Listings',
      'Charts UI',
      'Dashboard UI',
    ],
    projectTags: [
      {
        projectType: 'Self-Project | Open Source',
      },
      {
        deliverables: 'Website, UI/UX, Product Design',
      },
      {
        tools: 'ReactJS, Next.js, Tailwind CSS, TypeScript',
      },
    ],
    

  },
  weatherv: {
    id: 3,
    title: 'WeatherV',
    description: 'A simple and user friendly weather app',
    image: '/images/weatherv/banner.png',
    link: 'https://weatherv.vercel.app/',
    sourceCode: 'https://github.com/kenta23/weatherv',
    introduction: 'Built a simple and user friendly weather app that allows users to check the weather of their location.',
    features: [
      'Weather API Integration',
      'User Location Detection',
      'Responsive Design',
      'background adative based on the weather',
      'Weather Forecast for the next 5 days',
      'Air pollution index with AI integration'
    ],
    projectTags: [
      {
        projectType: 'Self-Project | Open Source',
      },
      {
        deliverables: 'Website, UI/UX, Product Design, AI Integration',
      },
      {
        tools: 'ReactJS, Next.js, Tailwind CSS, TypeScript, OpenWeatherMap API, OpenAI API',
      },
    ],
    

  },
};




export const customPortfolioData: PortfolioPageProps = {

  hero: {

    titleLine1: 'Full-Stack Developer &',

    titleLine2Gradient: 'Product Designer',

    subtitle: 'I am passionate about building websites and apps for the clients and help them to grow their business online',

  },

  ctaButtons: {

    primary: {

      label: 'Explore My Work',

      onClick: () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); },

    },

    secondary: {

      label: 'Contact Me',

      onClick: () => { window.location.href = 'mailto:rustymiguelramos@gmail.com'; },

    },

  },

  projects: [
    { 
      title: 'Muzi', 
      description: 'AI-powered music app that provides seamless and personalized music streaming experience.',
      tags: ['UI/UX Design', 'Figma', 'Case Study'],
      imageContent: '/images/muzi/muzi_banner.png',
      link: '/projects/muzi',

    },

    { 

      title: 'Finwise', 

      description: 'A Budget Tracker website that allows users to track their finances, save for goals, and plan for the future.',

      tags: ['NextJS', 'Tailwind CSS', 'TypeScript'],
      imageContent: '/images/finwise/banner.png',
      link: '/projects/finwise',
    },

    { 
      title: 'WeatherV', 
      description: 'A simple and user friendly weather app',
      tags: ['ReactJS', 'Next.js', 'Tailwind CSS'],
      imageContent: '/images/weatherv/banner.png',
      link: '/projects/weatherv',
    },

  ],

  stats: [

    { value: '2+', label: 'Years of Experience' },

    { value: '7+', label: 'All Projects' },

    { value: '5+', label: 'Certifications' },

  ],

  certifications: [
    {
      title: 'Start the UX Design Process: Empathize, Define, and Ideate',
      imageContent: '/certifications/certificate%201.webp',
      link: 'https://www.coursera.org/account/accomplishments/verify/BXEOIPRP60UY',
    },
    {
      title: 'Foundations of User Experience (UX) Design',
      imageContent: '/certifications/certificate%202.JPG',
      link: 'https://www.coursera.org/account/accomplishments/verify/NJBEI3IGR7BZ'
    },
    { 
      title: 'Build Wireframes and Low-Fidelity Prototypes',
      imageContent: '/certifications/certificate%203.JPG',
      link: 'https://www.coursera.org/account/accomplishments/verify/3RD65RSQ9FH1'
    },
    { 
       title: 'Foundations of Project Management',
       imageContent: '/certifications/certificate%204.JPG',
       link: 'https://www.coursera.org/account/accomplishments/verify/DLHB1JEQLX34'
    },
    {
      title: 'Complete Web Designing Course | Web-Development Bootcamp',
      imageContent: '/certifications/certificate%205.jpeg',
      link: 'https://www.udemy.com/certificate/UC-2ea603c6-7a7c-4aa4-86fb-f95e91bded09/'
    }

  ],

  skills: [
    { title: 'React', imageContent: '/skills/react.svg' },
    { title: 'Next.js', imageContent: '/skills/nextjs.svg' },
    { title: 'Tailwind CSS', imageContent: '/skills/tailwindcss.svg' },
    { title: 'TypeScript', imageContent: '/skills/typescript.svg' },
    { title: 'Node.js', imageContent: '/skills/nodejs.svg' },
    { title: 'PostgreSQL', imageContent: '/skills/postgresql.svg' },
    { title: 'Git', imageContent: '/skills/git.svg' },
    { title: 'Docker', imageContent: '/skills/docker.svg' },
  ],
  showAnimatedBackground: true, // You can toggle the background

};

