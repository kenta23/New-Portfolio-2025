import { contents, type ProjectContent } from '@/lib/contents';
import { Description, ImageComponent, List, MutedList, ProjectContainer, Subtitle } from './markdown/ui-markdown';
import { formatLabel } from '@/lib/utils';
import Link from 'next/link';



export default function WeatherV() {
    const weatherv = contents.weatherv as ProjectContent;

    return ( 
        <div className='overflow-x-hidden w-full'>
        <div className='mx-auto my-10 overflow-x-hidden w-full px-8 sm:px-12 lg:px-32'>      
       {/**Banner Section*/}
        <div className="flex flex-col gap-10 md:gap-14 lg:gap-16 mb-32 items-start justify-start">
          <div className="space-y-2 text-center md:text-left w-full">
            <h1 className="text-[2rem] sm:text-[2.6rem] md:text-[3.5rem] lg:text-[4rem] text-foreground font-bold leading-tight">
              {weatherv.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">{weatherv.description}</p>
          </div>
  
          <div className="flex mt-6 md:mt-20 lg:mt-28 w-full flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
            {weatherv.projectTags && weatherv.projectTags.length > 0 && (
              <div className="grid w-full grid-cols-2 gap-6 md:gap-10 lg:gap-12">
                {weatherv.projectTags.map((tag) => {
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
               <ImageComponent src={weatherv.image} alt={weatherv.title} width={600} height={900} />
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
              {weatherv.introduction && (
                <p className="text-base text-foreground leading-7 md:leading-8">
                  {weatherv.introduction}
                </p>
              )}
            </div>
          </ProjectContainer>
  
  
          <ProjectContainer>
            <div className="flex flex-row gap-4 w-full lg:w-2/5 items-start justify-between">
              <h5 className="text-lg font-medium">Link</h5>
            </div>
  
            <div className="flex w-full lg:w-3/5 flex-col gap-6">
              {weatherv.sourceCode && (
                <div className="w-full rounded-xl border border-border/50 bg-muted/40 text-foreground text-lg md:text-xl">
                   <p className="text-base text-blue-600 hover:text-blue-400 transition-colors">
                    <Link href={weatherv.sourceCode} target="_blank">View Source Code</Link>
                   </p>
                </div>
              )}
              {weatherv.link && (
                <div className="w-full rounded-xl border border-border/50 bg-muted/40 text-foreground text-lg md:text-xl">
                   <p className="text-base text-blue-600 hover:text-blue-400 transition-colors">
                    <Link href={weatherv.link} target="_blank">{weatherv.link}</Link>
                   </p>
                </div>
              )}
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
  
                {weatherv.features && weatherv.features.length > 0 && (
                  <List>
                    {weatherv.features.map((feature) => (
                      <li className='font-normal' key={feature}>{feature}</li>
                    ))}
                  </List>
                )}
              </div>
              
            </ProjectContainer>
  
  
            {/**IDEATION SECTION*/}
           
            {weatherv?.ideation?.map((item) => (
              <div className='flex flex-col gap-6 items-start' key={item.title}>
  
                <div className="flex flex-col gap-2 w-full lg:w-2/5">
                  <h5 className="text-lg font-medium">{item.title}</h5>
                </div>
  
                <div className="flex w-full flex-col gap-6">
                  {Array.isArray(item.image) ? (
                    item.image.map((image) => <ImageComponent src={image} className="rounded-lg object-cover object-center w-full h-full" alt={item.title} width={800} height={900} key={image} /> )
                  ) : (
                    <ImageComponent src={item.image} className="rounded-lg object-cover object-center w-full h-full" alt={item.title} width={800} height={900} />
                  )}
                  <MutedList>{item.description}</MutedList>
                </div>
              </div>
            ))}  
  
          </div>
  
  
        </div>
      </div>
    )
}