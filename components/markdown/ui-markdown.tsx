import Image from 'next/image';
import type { ReactNode } from 'react';

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="w-full rounded-xl border border-border/50 bg-muted/40 p-6 md:p-8 text-foreground text-lg md:text-xl">
      {children}
    </div>
  );
}

export function ImageComponent({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="eager"
      quality={100}
      className={`bg-gray-200 rounded-xl ${className}`}
    />
  );
}

export function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full md:w-2/3 lg:w-3/4 relative h-52 sm:h-64 md:h-80 lg:h-96 bg-muted rounded-xl overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={150}
        objectFit='cover'
        loading="eager"
        quality={100}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
        className="bg-gray-200 w-full h-full rounded-xl object-cover"
      />
    </div>
  );
}



export function List({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <ul className={`list-disc text-base font-normal text-foreground space-y-2 ${className}`}>
      {children}
    </ul>
  );
}

export function ColoredText({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) {
  return (
    <span className={`text-lg uppercase tracking-wide text-${color}-500 font-normal leading-8`}>
      {children}
    </span>
  );
}

export function Subtitle({ children }: { children: ReactNode }) {
  return (
    <h4 className="text-lg tracking-widest font-medium uppercase text-red-400">
      {children}
    </h4>
  );
}

export function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-[2rem] sm:text-[2.6rem] md:text-[3.5rem] lg:text-[4rem] text-foreground font-bold leading-tight">
      {children}
    </h1>
  );
}

export function Description({ children }: { children: ReactNode }) {
  return (
    <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
      {children}
    </p>
  );
}

export function MutedList({ children }: { children: ReactNode }) {
  return (
    <ul className="text-sm text-muted-foreground space-y-1 text-center sm:text-left">
      {children}
    </ul>
  );
}

export function ProjectContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10">
      {children}
    </div>
  );
}