'use client';

import { ArrowBigUpDash } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Provider({ children} : { children: Readonly<React.ReactNode>}) {
  const [showArrow, setShowArrow] = useState<boolean>(false);

  const handleScroll = () => {
    console.log('scroll', window.scrollY);
    if(window.scrollY > 100) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  }
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {children}

      <ArrowBigUpDash
        onClick={() =>  {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`${showArrow ? 'fixed' : 'hidden'} animate-bounce bottom-10 right-10 z-50 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 w-10 h-10 text-primary cursor-pointer hover:text-green-600 transition-colors duration-300 ${showArrow ? 'block' : 'hidden'}`} />
    </div>
  )
}
