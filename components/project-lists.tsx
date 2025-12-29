import type { Project } from "@/types";
import { ArrowRightIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
    title: 'Projects',
    description: 'List of highlighted projects of Rusty Miguel Ramos',
    keywords: ['Projects', 'Rusty Miguel Projects'],
}

export default function ProjectLists({ projects }: { projects: Project[] }) {
    return (
        <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {projects?.map((project: Project) => (

                <div key={project.title} className="rounded-2xl shadow-sm bg-gray-100 text-left p-6 flex flex-col">

                    <div className="rounded-xl h-32 w-full bg-amber-300 mb-4 flex items-center justify-center relative overflow-hidden">
                        <Image src={project.imageContent as string || '/images/muzi/muzi_banner.png'} 
                        className="w-full h-full object-cover object-center rounded-lg" alt={project.title} width={600} height={900}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                    <div className="flex-1">
                        <h3 className="text-lg font-medium text-card-foreground mb-2 geist-font">{project.title}</h3>

                        <p className="text-muted-foreground text-sm inter-font mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (

                                <span key={tag} className="skill-badge px-2 py-1 rounded text-xs text-muted-foreground">{tag}</span>

                            ))}
                        </div>
                    </div>


                 <div className="flex bg-gray-100 w-fit px-3 py-2 rounded-md mt-6">
                    <Link href={project.link as string} className="text-primary hover:text-primary-dark transition-colors inter-font text-sm">
                       <span className="flex items-center gap-2">View Project <ArrowRightIcon className="w-4 h-4" /></span>
                     </Link>
                  </div>

                </div>

            ))}

        </div>
    )
}