'use client'

import { contents, type ProjectContent } from '@/lib/contents';
import { Description, ImageComponent, List, MutedList, ProjectContainer, Subtitle } from './markdown/ui-markdown';
import { formatLabel } from '@/lib/utils';
import { ArrowBigUpDash } from 'lucide-react';
import { useEffect, useState } from 'react';


export default function Muzi({ project }: { project: keyof typeof contents }) {
  const muzi = contents[project] as ProjectContent;
  const [showArrow, setShowArrow] = useState<boolean>(false);

 // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
 useEffect(() => {
  const handleScroll = () => {
    console.log('scroll', window.scrollY);
    if(window.scrollY > 100) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  }
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
 }, []);


  return (
    <div className='overflow-x-hidden w-full'>
      <div className='mx-auto my-10 overflow-x-hidden w-full px-8 sm:px-12 lg:px-32'>      
     {/**Banner Section*/}
      <div className="flex flex-col gap-10 md:gap-14 lg:gap-16 mb-32 items-start justify-start">
        <div className="space-y-2 text-center md:text-left w-full">
          <h1 className="text-[2rem] sm:text-[2.6rem] md:text-[3.5rem] lg:text-[4rem] text-foreground font-bold leading-tight">
            {muzi.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">{muzi.description}</p>
        </div>

        <div className="flex mt-6 md:mt-20 lg:mt-28 w-full flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
          {muzi.projectTags && muzi.projectTags.length > 0 && (
            <div className="grid w-full grid-cols-2 gap-6 md:gap-10 lg:gap-12">
              {muzi.projectTags.map((tag) => {
                const [label, value] = Object.entries(tag)[0] ?? ['', ''];
                return (
                  <div
                    key={label || value}
                    className="flex flex-col gap-2 w-full p-2 items-center sm:items-start justify-start rounded-xl border border-border/50"
                  >
                    <h5 className="text-md font-semibold">{formatLabel(label)}</h5>
                    <ul className="text-sm text-muted-foreground space-y-1 text-center sm:text-left">
                      <li>{value}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
          )}

          <div className="w-full md:w-2/3 lg:w-7xl relative h-52 sm:h-64 md:h-80 lg:h-96 bg-muted rounded-xl overflow-hidden">
             <ImageComponent src={muzi.image} alt={muzi.title} width={600} height={900} />
          </div>
        </div>
      </div>
    </div>




    <div className="mx-auto my-10 w-full max-w-6xl px-8 sm:px-6 lg:px-10">
      <div className="mb-0 md:mb-6 lg:mb-10 space-y-8 flex flex-col max-w-5xl mx-auto px-1 sm:px-2">
        <h4 className="text-lg tracking-widest font-medium uppercase text-red-400">Background</h4>

        <ProjectContainer>
          <div className="flex flex-row gap-4 w-full lg:w-2/5 items-start justify-between">
            <h5 className="text-lg font-medium">Introduction</h5>
          </div>

          <div className="flex w-full lg:w-3/5 flex-col gap-6">
            {muzi.introduction && (
              <p className="text-base md:text-lg text-foreground leading-7 md:leading-8">
                {muzi.introduction}
              </p>
            )}
          </div>
        </ProjectContainer>


        <ProjectContainer>
          <div className="flex flex-row gap-4 w-full lg:w-2/5 items-start justify-between">
            <h5 className="text-lg font-medium">Target User</h5>
          </div>

          <div className="flex w-full lg:w-3/5 flex-col gap-6">
            {muzi.targetUser && (
              <div className="w-full rounded-xl border border-border/50 bg-muted/40 text-foreground text-lg md:text-xl">
                 <p className="text-sm sm:text-base text-muted-foreground">{muzi.targetUser}</p>
              </div>
            )}
          </div>
        </ProjectContainer>



        <div className="border border-red-100 mb-8" />
      </div>

      {/* Research Section */}
      <div className="mb-0 md:mb-6 lg:mb-10 space-y-8 flex flex-col max-w-5xl mx-auto px-1 sm:px-2">
        <Subtitle>Research</Subtitle> 

        <ProjectContainer>
          <div className="flex flex-row gap-4 w-full lg:w-2/5">
            <h5 className="text-lg font-medium">Problem Statement</h5>
          </div>

          <div className="flex w-full lg:w-3/5 flex-col gap-6">
            {muzi.problemStatement && (
              <p className="text-base md:text-lg uppercase tracking-wide text-blue-500 font-normal leading-7 md:leading-8">
                {muzi.problemStatement}
              </p>
            )}

            {muzi.problems && muzi.problems.length > 0 && (
              <ul className="list-disc list-inside text-sm md:text-base font-light text-foreground space-y-2">
                {muzi.problems.map((item) => (
                  <li key={item.problem}>{item.problem}</li>
                ))}
              </ul>
            )}
          </div>
        </ProjectContainer>

        {/**Problem and solution */}
        <ProjectContainer>
          <div className="flex flex-row gap-4 w-full lg:w-2/5">
            <h5 className="text-lg font-medium">Problem and Solution</h5>
          </div>

          <div className="flex w-full lg:w-3/5 flex-col gap-6">
            {muzi.problems && muzi.problems.length > 0 && (
            
                <List>
                  {muzi.problems.map((item) => (
                     <div key={item.problem}>
                           <List key={item.problem}>
                              <li>{`"${item.problem}"`}</li>
                           </List>

                           
                           <List className='italic font-semibold' key={item.solution}>
                             <li className='list-none'><span className='text-red-400'>Solution:</span> {`${item.solution}`}</li>
                           </List>
                     </div>
                ))}
              </List>
            )}
          </div>

        </ProjectContainer>



         {/**User Persona*/}
         <ProjectContainer>
          <div className="flex flex-row gap-4 w-full lg:w-2/5">
            <h5 className="text-lg font-medium">User Persona</h5>
          </div>

          <div className="flex w-full lg:w-3/5 flex-col gap-8 md:gap-10">
            {muzi?.userPersona?.map((item, index) => ( 
              <div key={`persona-${index}-${item.about.slice(0, 20)}`} className="flex flex-col gap-6">
                {/* Persona Card */}
                <div className="w-full rounded-xl border border-border/50 bg-blue-100 p-4 md:p-6">
                  <div className="flex flex-col gap-4 md:gap-6">
                    {/* About Section */}
                    <div className="space-y-3">
                      <h6 className="text-base md:text-md font-semibold text-foreground">Bio</h6>
                      <p className="text-sm sm:text-base md:text-md text-foreground leading-7 md:leading-8">
                        {item.about}
                      </p>
                    </div>

                    {/* Quote Section */}
                    {(item.quote || item.quoute) && (
                      <div className="space-y-3">
                        <h6 className="text-base md:text-md font-semibold text-foreground">Quote</h6>
                        <p className="text-sm sm:text-base md:text-md text-foreground leading-7 md:leading-8 italic border-l-4 border-red-400 pl-4 md:pl-6">
                          {item.quote || item.quoute}
                        </p>
                      </div>
                    )}

                    {/* Pain Points Section */}
                    {item.painpoints && item.painpoints.length > 0 && (
                      <div className="space-y-3">
                        <h6 className="text-base md:text-md font-semibold text-foreground">Pain Points</h6>
                        <ul className="list-none text-sm sm:text-base md:text-md text-foreground space-y-2">
                          {item.painpoints.map((painpoint, idx) => (
                            <li key={`painpoint-${index}-${idx}-${painpoint.slice(0, 15)}`} className="flex items-start gap-3 leading-7 md:leading-8">
                              <span className="text-red-400 mt-1.5 shrink-0">•</span>
                              <span>{painpoint}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Goals Section */}
                    {item.goals && item.goals.length > 0 && (
                      <div className="space-y-3">
                        <h6 className="text-base md:text-md font-semibold text-foreground">Goals</h6>
                        <ul className="list-none text-sm sm:text-base md:text-md text-foreground space-y-2">
                          {item.goals.map((goal, idx) => (
                            <li key={`goal-${index}-${idx}-${goal.slice(0, 15)}`} className="flex items-start gap-3 leading-7 md:leading-8">
                              <span className="text-blue-500 mt-1.5 shrink-0">•</span>
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Divider between personas (except for the last one) */}
                {muzi.userPersona && index < muzi.userPersona.length - 1 && (
                  <div className="border border-red-100/50 my-2" />
                )}
              </div>
            ))}
          </div>

        </ProjectContainer>

        
        <div className="border border-red-100 mb-8" />
      </div>


        {/* Others Section */}
        <div className="mb-0 md:mb-6 lg:mb-10 space-y-8 max-w-5xl mx-auto px-1 sm:px-2">
           <Subtitle>Others</Subtitle> 

          <ProjectContainer>
            <div className="flex flex-row gap-4 w-full lg:w-2/5">
                <h5 className="text-lg font-medium">Features</h5>
            </div>

            <div className="flex w-full lg:w-3/5 flex-col gap-8 md:gap-10">

              {muzi.features && muzi.features.length > 0 && (
                <List>
                  {muzi.features.map((feature) => (
                    <li className='font-normal' key={feature}>{feature}</li>
                  ))}
                </List>
              )}
            </div>
            
          </ProjectContainer>


          {/**IDEATION SECTION*/}
         
          {muzi?.ideation?.map((item) => (
            <div className='flex flex-col gap-6 items-start' key={item.title}>

              <div className="flex flex-col gap-2 w-full lg:w-2/5">
                <h5 className="text-lg font-medium">{item.title}</h5>
              </div>

              

              <div className="flex w-full flex-col gap-6">
                {item.image && (
                  <ImageComponent src={item.image as string} className="rounded-lg object-cover object-center w-full h-full" alt={item.title} width={800} height={900} />
                )}

                {item?.mockups && (
                    item.mockups.map(mockup => ( 
                      <div key={mockup.title}>
                        <h6 className='text-lg font-medium'>{mockup.title}</h6>
                         <MutedList>{mockup.description}</MutedList>
                         <ImageComponent src={mockup.image as string} className="rounded-lg object-cover object-center w-full h-full" alt={item.title} width={800} height={900}/>
                     </div>
                    ))
                )}

                <MutedList>{item.description}</MutedList>
              </div>
            </div>
          ))}  

        </div>
      </div>

      <ArrowBigUpDash
        onClick={() =>  {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`${showArrow ? 'fixed' : 'hidden'} animate-bounce bottom-10 right-10 z-50 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 w-10 h-10 text-primary cursor-pointer hover:text-green-600 transition-colors duration-300 ${showArrow ? 'block' : 'hidden'}`} />
    </div>
  );
}
