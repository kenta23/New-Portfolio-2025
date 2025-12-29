import type { Certification } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { AwardIcon, ExternalLinkIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Certifications',
    description: 'List of certifications of Rusty Miguel Ramos',
    keywords: ['Certifications', 'Rusty Miguel Certifications', 'Certifications List'],
}

export default function CertificationList({ certifications }: { certifications: Certification[] }) {
    if (!certifications || certifications.length === 0) {
        return null;
    }

    return (
        <div id="certifications" className="w-full max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-4 geist-font">
                    Certifications
                </h2>
                <p className="text-muted-foreground text-sm inter-font font-normal max-w-2xl mx-auto">
                    Professional certifications and achievements
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((certification) => {
                    const content = (
                        <div 
                            key={certification.title} 
                            className="glass-card rounded-2xl shadow-sm bg-gray-200 text-left p-6 flex flex-col group cursor-pointer h-full"
                        >
                            <div className="rounded-xl h-48 w-full bg-linear-to-br from-gray-200 to-gray-300 mb-4 flex items-center justify-center relative overflow-hidden">
                                {certification.imageContent ? (
                                    <Image 
                                        src={certification.imageContent as string} 
                                        alt={certification.title} 
                                        width={600} 
                                        height={900}
                                        className="size-full object-contain object-center rounded-lg transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                                        <AwardIcon className="w-12 h-12 mb-2 opacity-50" />
                                        <span className="text-xs inter-font">No Image</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 flex flex-col">
                                <div className="text-base font-medium text-card-foreground my-2 geist-font flex items-center gap-2">
                                    <AwardIcon className="text-yellow-600 size-6" />
                                    <span className="text-base font-medium text-card-foreground geist-font tracking-tight">{certification.title}</span>
                                </div>

                                {certification.link && (
                                    <div className="mt-auto pt-4 px-6">
                                        <div className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors inter-font text-sm">
                                            <span>View Certificate</span>
                                            <ExternalLinkIcon className="w-4 h-4" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );

                    return certification.link ? (
                        <Link 
                            href={certification.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            key={certification.title}
                            className="block h-full"
                        >
                            {content}
                        </Link>
                    ) : (
                        content
                    );
                })}
            </div>
        </div>
    );
}