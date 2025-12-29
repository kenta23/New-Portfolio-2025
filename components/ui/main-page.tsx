'use client';

import React, { useEffect, useRef, useState } from 'react';

import * as THREE from 'three';
import ProjectLists from '../project-lists';
import type { Project, PortfolioPageProps, Certification, Skill } from '@/types';
import CertificationList from '../certificationlist';
import Skills from '../skills';
import { customPortfolioData } from '@/lib/contents';
import { Progress } from './progress';
import { ArrowBigUpDash } from 'lucide-react';

// --- TYPE DEFINITIONS FOR PROPS ---

interface NavLink { label: string; href: string; }

interface Stat { value: string; label: string; }





// --- INTERNAL ANIMATED BACKGROUND COMPONENT ---

function AuroraBackground () {

    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (!mountRef.current) return;

        const currentMount = mountRef.current;

        const scene = new THREE.Scene();

        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);

        renderer.domElement.style.position = 'fixed';

        renderer.domElement.style.top = '0';

        renderer.domElement.style.left = '0';

        renderer.domElement.style.zIndex = '0';

        renderer.domElement.style.display = 'block';

        currentMount.appendChild(renderer.domElement);

        const material = new THREE.ShaderMaterial({

            uniforms: { iTime: { value: 0 }, iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) } },

            vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,

            fragmentShader: `

                uniform float iTime; uniform vec2 iResolution;

                #define NUM_OCTAVES 3

                float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }

                float noise(vec2 p){ vec2 ip=floor(p);vec2 u=fract(p);u=u*u*(3.0-2.0*u);float res=mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);return res*res; }

                float fbm(vec2 x) { float v=0.0;float a=0.3;vec2 shift=vec2(100);mat2 rot=mat2(cos(0.5),sin(0.5),-sin(0.5),cos(0.50));for(int i=0;i<NUM_OCTAVES;++i){v+=a*noise(x);x=rot*x*2.0+shift;a*=0.4;}return v;}

                void main() {

                    vec2 p=((gl_FragCoord.xy)-iResolution.xy*0.5)/iResolution.y*mat2(6.,-4.,4.,6.);vec4 o=vec4(0.);float f=2.+fbm(p+vec2(iTime*5.,0.))*.5;

                    for(float i=0.;i++<35.;){vec2 v=p+cos(i*i+(iTime+p.x*.08)*.025+i*vec2(13.,11.))*3.5;float tailNoise=fbm(v+vec2(iTime*.5,i))*.3*(1.-(i/35.));vec4 auroraColors=vec4(.1+.3*sin(i*.2+iTime*.4),.3+.5*cos(i*.3+iTime*.5),.7+.3*sin(i*.4+iTime*.3),1.);vec4 currentContribution=auroraColors*exp(sin(i*i+iTime*.8))/length(max(v,vec2(v.x*f*.015,v.y*1.5)));float thinnessFactor=smoothstep(0.,1.,i/35.)*.6;o+=currentContribution*(1.+tailNoise*.8)*thinnessFactor;}

                    o=tanh(pow(o/100.,vec4(1.6)));gl_FragColor=o*1.5;

                }`

        });

        const geometry = new THREE.PlaneGeometry(2, 2);

        const mesh = new THREE.Mesh(geometry, material);

        scene.add(mesh);

        let animationFrameId: number;

        const animate = () => { animationFrameId = requestAnimationFrame(animate); material.uniforms.iTime.value += 0.016; renderer.render(scene, camera); };

        const handleResize = () => { renderer.setSize(window.innerWidth, window.innerHeight); material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight); };

        window.addEventListener('resize', handleResize);

        animate();

        return () => { cancelAnimationFrame(animationFrameId); window.removeEventListener('resize', handleResize); if (currentMount.contains(renderer.domElement)) currentMount.removeChild(renderer.domElement); renderer.dispose(); material.dispose(); geometry.dispose(); };

    }, []);

    return <div ref={mountRef} />;

};



// --- MAIN CUSTOMIZABLE PORTFOLIO COMPONENT ---

export default function MainPage () {
    
  

 const { logo, navLinks, resume, hero, ctaButtons, projects, certifications, skills, stats, showAnimatedBackground } = customPortfolioData;


  return (

    <div className="bg-background text-foreground geist-font z-30">

      {/* {showAnimatedBackground && <AuroraBackground />} */}

     

  
 {/**Background */}
 <div className='bg-linear-to-b from-background to-gray-200 blur-3xl w-full h-full max-h-lvh absolute top-0 left-0 z-0'></div>
   

     <div className="relative">
       
  
        <div className="divider-2" />

        <main id="about" className="w-full min-h-screen flex flex-col items-center justify-center px-2 lg:px-6 py-20">

            <div className="max-w-6xl z-30 mx-auto text-center">

                <div className="mb-8 float-animation">

                    <h1 className="md:text-6xl lg:text-7xl leading-[1.1] geist-font text-5xl font-light text-foreground tracking-tight mb-4">

                        {hero?.titleLine1}

                        <span className="text-foreground block tracking-tight">{hero?.titleLine2Gradient}</span>

                    </h1>

                    <p className="md:text-xl max-w-3xl leading-relaxed inter-font text-lg font-light text-muted-foreground mx-auto">{hero?.subtitle}</p>

                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">

                    <button type='button' onClick={ctaButtons?.primary?.onClick || undefined} className="primary-button px-6 py-3 text-foreground rounded-lg font-medium text-sm min-w-[160px]">{ctaButtons?.primary?.label}</button>

                    <button type='button' onClick={ctaButtons?.secondary?.onClick || undefined} className="glass-button min-w-[160px] inter-font text-sm font-medium text-foreground rounded-lg px-6 py-3">{ctaButtons?.secondary?.label}</button>

                </div>

                <div className="divider mb-16" />
                
                   <ProjectLists projects={projects ?? [] as Project[]} />

                <div className="divider mb-16" />
                
                <CertificationList certifications={certifications ?? [] as Certification[]} />

                <div className="divider mb-16" />

                
                <Skills skills={skills ?? [] as Skill[]} />

                <div id="stats" className="flex flex-row justify-center items-center gap-8 text-center">

                    {stats?.map((stat, index) => (

                        <React.Fragment key={stat.label}>

                            <div>

                                <div className="text-3xl md:text-4xl font-light text-foreground mb-1 geist-font tracking-tight">{stat.value}</div>

                                <div className="text-muted-foreground text-sm inter-font font-normal">{stat.label}</div>

                            </div>

                            {index < stats.length - 1 && <div className="hidden sm:block w-px h-12 bg-linear-to-b from-transparent via-input to-transparent" />}

                        </React.Fragment>

                    ))}

                </div>

            </div>
            
        </main>

       
      </div>
    </div>

  );

};



