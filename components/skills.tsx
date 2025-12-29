import type { Skill } from "@/types";
import Image from "next/image";
import { Code2Icon } from "lucide-react";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Skills',
    description: 'List of skills and tools of Rusty Miguel Ramos',
    keywords: ['Skills', 'Rusty Miguel Skills', 'Skills List', 'Skills and Tools', 'Tech Stacks'],
}

export default function Skills({ skills }: { skills: Skill[] }) {
    if (!skills || skills.length === 0) {
        return null;
    }

    return (
        <div id="skills" className="w-full max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-4 geist-font">
                    Skills & Tools
                </h2>
                <p className="text-muted-foreground text-sm inter-font font-normal max-w-2xl mx-auto">
                    Technologies and tools I work with
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {skills.map((skill) => (
                    <div
                        key={skill.title}
                        className="rounded-2xl p-2 md:p-4 flex flex-col items-center justify-center group cursor-pointer transition-all duration-300 hover:scale-105"
                    >
                        <div className="rounded-xl w-full size-24  bg-linear-to-br from-gray-100 to-gray-300 mb-3 md:mb-4 flex items-center justify-center relative overflow-hidden">
                            {skill.imageContent ? (
                                <Image
                                    src={skill.imageContent as string}
                                    alt={skill.title}
                                    width={60}
                                    height={60}
                                    className=" object-contain object-center rounded-lg transition-transform duration-300 group-hover:scale-110 p-2"
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 20vw, 16vw"
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center text-muted-foreground">
                                    <Code2Icon className="w-8 h-8 md:w-10 md:h-10 mb-1 opacity-50" />
                                </div>
                            )}
                        </div>

                        <div className="text-center w-full">
                            <h3 className="text-xs md:text-sm font-medium text-card-foreground geist-font tracking-tight line-clamp-2 group-hover:text-primary transition-colors">
                                {skill.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}