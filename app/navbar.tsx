'use client'

import Image from "next/image";
import Link from "next/link";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { Menu } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const logo = {

    initials: 'RM',
  
    name: 'Rusty Miguel Ramos',
  
  }
  
  const navLinks = [
  
    { label: 'Bio', href: '/#bio' },
  
    { label: 'Works', href: '/#projects' },
  
    { label: 'Expertise', href: '/#stats' },
    {
      label: 'Certifications',
      href: '/#certifications'
    },
  
  ]

export default function Navbar() { 
    
 const [progress, setProgress] = useState(0);

 const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;
  const progress = (scrollPosition / (fullHeight - windowHeight)) * 100;
  setProgress(progress);
 };

 // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
 useEffect(() => {
   window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 
    return (
        <div className="w-full sticky top-0 z-50">
            <Progress color='#0352fc' className='w-full fixed top-20  h-2' value={progress} max={100} />
            <nav className="w-full bg-background/50 backdrop-blur-sm border-b border-border/50  mx-auto py-6 px-8 sm:px-12 lg:px-32 z-50">


                <div className="flex justify-between items-center">


                    <div className="flex items-center space-x-2">

                        <div className="w-8 h-8 rounded-lg bg-border backdrop-blur-md border border-border flex items-center justify-center">

                            <Image src="/16_rm.jpg" alt="1x1 picture" width={32} height={32} className="rounded-lg object-cover object-center" />
                        </div>

                        <span className="geist-font text-sm md:text-lg font-medium text-foreground">{logo.name}</span>

                    </div>

                    <Menubar className="flex md:hidden">
                        <MenubarMenu>
                            <MenubarTrigger><Menu /></MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem className="flex flex-col gap-2 items-start justify-start">
                                    {navLinks.map(link => (
                                        <div key={link.label} className="flex flex-col gap-2 w-full items-start justify-start">
                                            <Link key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors inter-font text-sm w-full">{link.label}</Link>

                                            <MenubarSeparator className="w-full" />
                                        </div>
                                    ))}
                                </MenubarItem>
                                <MenubarItem className="bg-background/50 shadow-md">
                                    <Link href="/Ramos_CV.pdf" download={"Ramos_CV"} className="glass-button px-4 py-2 rounded-lg text-foreground text-sm font-medium inter-font">
                                        <span>Download CV</span>
                                    </Link>
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>



                    <div className="hidden md:flex items-center space-x-4 lg:space-x-8">

                        {navLinks.map(link => (

                            <Link key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors inter-font text-sm">{link.label}</Link>

                        ))}

                    </div>

                    <Link href="/Ramos_CV.pdf" download={"Ramos_CV"} className="glass-button px-4 py-2 rounded-lg text-foreground text-sm font-medium inter-font hidden md:flex">
                        <span>Download CV</span>
                    </Link>


                </div>

            </nav>

        </div>

     )
}