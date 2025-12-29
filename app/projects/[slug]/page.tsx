import { contents } from '@/lib/contents';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { ComponentType } from 'react';


export async function generateStaticParams() {  
     return [{ slug: 'finwise-ai' }, { slug: 'muzi' }, { slug: 'rethink' }, { slug: 'weatherv' }]
}


export default async function ProjectPage({ params }: { params: { slug: string } }) {
     const { slug } = await params;

     let ProjectListMarkdown: ComponentType | null = null;
     
     try {
      const module = await import(`@/components/${slug as keyof typeof contents}.tsx`);
       
      ProjectListMarkdown = module.default as ComponentType;
     } catch (_error) {
          return notFound(); 
     }

     // @ts-expect-error: component may have custom props
     return <ProjectListMarkdown project={slug as keyof typeof contents} />;
}