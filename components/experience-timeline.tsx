import { Badge } from "./ui/badge";
import { Mail, Phone, GraduationCap, MapPin } from "lucide-react";


const experiences = [
    {
      title: "Junior Frontend Developer",
      company: "Sandman Software Systems",
      period: "June 2025 — Present",
      description: "Create new proposals, redesign UI/UX for LGU e-system projects and some involvement in frontend development",
      skills: ["UI/UX", "HTML/CSS", "Javascript", 'Php']
    },
    {
      title: "IT Internship",
      company: "Eternal Bright Sanctuary Inc.",
      period: "July 2024 - Sept. 2024",
      description: "Served as an IT intern. Created a payroll system for the company",
      skills: ["Laravel PHP", "MySQL", "HTML/CSS", "Javascript"]
    }
  ];


const about = [ 
 { 
    title: "About Me",
    description: "I'm a passionate Full-Stack Developer and Product Designer with a keen eye for creating intuitive user experiences. I specialize in building modern web applications that combine functionality with elegant design, helping businesses grow their online presence.",
 },
 { 
    title: 'Email',
    description: 'rustymiguelramos@gmail.com',
    icon: <Mail className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
 },
 { 
    title: 'Phone',
    description: '+639694774027',
    icon: <Phone className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
 },
 { 
    title: 'Education',
    description: 'Bachelor\'s Degree in Computer Science',
    icon: <GraduationCap className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
 },
 { 
    title: 'Location',
    description: 'North Caloocan, Metro Manila, Philippines',
    icon: <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
 }
]

export default function ExperienceTimeline() {
  return (

      <section id="bio" className="w-full mx-auto py-6 md:py-8 lg:py-12">
          {/* <h2 className="text-3xl font-bold mb-8">Work Experience</h2> */}
       
          <div className="mt-4 flex flex-col md:flex-row gap-8 lg:gap-4 md:items-stretch">

            <div className="flex-1 flex flex-col gap-3">
                <h3 className="text-md lg:text-lg font-bold leading-none mb-6">About Me</h3>

                       <p className="text-sm text-left text-muted-foreground leading-relaxed">
                           {about[0].description}
                        </p>

                {about.slice(1).map((item, index) => ( 
              
                        <div key={`about-${index}-${item.title}`} className="flex flex-col mt-2">
                            <div className="flex items-start gap-3">
                                {item.icon}

                                <div className="flex flex-col ">
                                    <span className="text-xs text-left text-muted-foreground uppercase tracking-wide">{item.title}</span>
                                    <span className="text-sm text-foreground">
                                       {item.description}
                                    </span>
                                </div>

                            </div>

                        </div>
                  
                ))}
              </div>


              <div className="flex-1 flex flex-col min-w-0">
                  <h3 className="text-md lg:text-lg font-bold leading-none mb-6">Work Experience</h3>
                  {experiences.map((exp, index) => (
                      <div key={`${exp.title}-${index}`} className="relative h-full pl-8 pb-10 last:pb-0">
                          {/* The Vertical Line */}
                          <div className="absolute left-[11px] top-0 h-full w-[2px] bg-gray-300 last:hidden" />

                          {/* The Bullet Point */}
                          <div className="absolute left-0 top-0 z-10 h-6 w-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                              <div className="h-2 w-2 rounded-full bg-primary" />
                          </div>

                          {/* Content */}
                          <div className="flex flex-col gap-1 text-left">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                  <h3 className="text-sm font-bold leading-none">{exp.title}</h3>
                                  <span className="text-xs text-muted-foreground tabular-nums">
                                      {exp.period}
                                  </span>
                              </div>
                              <p className="font-semibold text-sm text-gray-800">{exp.company}</p>
                              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                                  {exp.description}
                              </p>

                              {/* Optional: Skills/Tech Stack Tags */}
                              <div className="mt-3 flex flex-wrap gap-2">
                                  {exp.skills.map((skill: string) => (
                                      <Badge key={skill} variant="secondary" className="rounded-md">
                                          {skill}
                                      </Badge>
                                  ))}
                              </div>
                          </div>
                      </div>
                  ))}
              </div>

          </div>
      </section>

  );
};