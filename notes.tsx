import Image from "next/image";

export default function Notes() {
return (
     // biome-ignore lint/complexity/noUselessFragments: <explanation>
     <>
            <div className="mx-auto my-10 w-full max-w-6xl px-4 sm:px-6 lg:px-10">
               {/* <h1 className="text-4xl font-bold">{slug}</h1> */} 

               <div className='flex flex-col gap-10 md:gap-14 lg:gap-16 mb-32 items-start justify-start'>
                    <div className='space-y-2 text-center md:text-left w-full'>
                         <h1 className='text-[2rem] sm:text-[2.6rem] md:text-[3.5rem] lg:text-[4rem] text-foreground font-bold leading-tight'>Project Title</h1>
                         <p className='text-base sm:text-lg md:text-xl text-muted-foreground'>Project Description</p>
                              
                    </div>


                    {/**2ND SECTION */}
                    <div className='flex mt-6 md:mt-20 lg:mt-28 w-full flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between'>

                         {/**project tags */}
                         <div className='grid w-full grid-cols-2 gap-6 md:gap-10 lg:gap-12'>
                              <div className= 'flex flex-col gap-2 w-full p-2 items-center sm:items-start justify-start rounded-xl border border-border/50'>
                                   <h5 className='text-md font-semibold'>Project type</h5>
                                   <ul className='text-sm text-muted-foreground space-y-1 text-center sm:text-left'>
                                        <li>Project type 1</li>
                                        <li>Project type 2</li>
                                        <li>Project type 3</li>
                                   </ul>
                              </div>

                              <div className= 'flex flex-col gap-2 w-full p-2 items-center sm:items-start justify-start rounded-xl border border-border/50'>
                                   <h5 className='text-md font-semibold'>Project type</h5>
                                   <ul className='text-sm text-muted-foreground space-y-1 text-center sm:text-left'>
                                        <li>Project type 1</li>
                                        <li>Project type 2</li>
                                        <li>Project type 3</li>
                                   </ul>
                              </div>

                              <div className= 'flex flex-col gap-2 w-full p-2 items-center sm:items-start justify-start rounded-xl border border-border/50'>
                                   <h5 className='text-md font-semibold'>Project type</h5>
                                   <ul className='text-sm text-muted-foreground space-y-1 text-center sm:text-left'>
                                        <li>Project type 1</li>
                                        <li>Project type 2</li>
                                        <li>Project type 3</li>
                                   </ul>
                              </div>

                              <div className= 'flex flex-col gap-2 w-full p-2 items-center sm:items-start justify-start rounded-xl border border-border/50'>
                                   <h5 className='text-md font-semibold'>Project type</h5>
                                   <ul className='text-sm text-muted-foreground space-y-1 text-center sm:text-left'>
                                        <li>Project type 1</li>
                                        <li>Project type 2</li>
                                        <li>Project type 3</li>
                                   </ul>
                              </div>

                         </div>

                         {/**PROJECT IMAGE */}
                         <div className='w-full md:w-2/3 lg:w-7xl relative h-52 sm:h-64 md:h-80 lg:h-96 bg-muted rounded-xl overflow-hidden'>
                              <Image
                                   src={'/img-1.avif'}
                                   alt='project image'
                                   width={500}
                                   height={150}
                                   loading='eager'
                                   quality={100}
                                   objectFit='cover'
                                   objectPosition='center'
                                   priority
                                   className='bg-gray-200 w-full h-full rounded-xl object-cover'
                              />
                         </div>
                    </div>
               </div>


               {/**Project Introduction */}
               <div className='mb-12 space-y-8 max-w-5xl mx-auto px-1 sm:px-2'>
                    <h4 className='text-lg tracking-widest font-medium uppercase text-red-400'>Introduction</h4>

                    <div className='flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10'>
                         <div className='flex flex-row gap-4 w-full lg:w-2/5 items-start justify-between'>
                              <h5 className='text-lg font-medium'>Background</h5>
                         </div>


                         <div className='flex w-full lg:w-3/5 flex-col gap-6'>
                              <p className='text-base md:text-lg text-foreground leading-7 md:leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum viverra quam, imperdiet fringilla sem finibus id. Aenean gravida posuere orci, a hendrerit neque tempor vel. Nunc eget purus ac ipsum tristique lacinia a a mauris. Suspendisse mattis, elit at blandit faucibus, turpis massa eleifend orci, ac condimentum mi augue ut mauris. Nulla orci tortor, iaculis sit amet sodales ut, lacinia luctus tortor. Nulla nec ligula non odio porta ultrices id ac massa. Nunc pulvinar, velit vel ornare dignissim, ipsum ante ornare arcu, at fringilla nisi nisi nec enim. Vestibulum diam risus, eleifend in nibh sit amet</p>

                              <div className='flex flex-wrap gap-4'>
                                   <div className='flex flex-row gap-4 items-start justify-start'>

                                        <div className='size-14 sm:size-16 rounded-lg bg-gray-200'>

                                        </div>

                                        <div className='size-14 sm:size-16 rounded-lg bg-gray-200'>

                                        </div>

                                        <div className='size-14 sm:size-16 rounded-lg bg-gray-200'>

                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>


                    <div  className='border border-red-100 mb-10'/>
               </div>




               {/**Project Research */}
               <div className='mb-10 space-y-8 max-w-5xl mx-auto px-1 sm:px-2'>
                    <h4 className='text-lg tracking-widest font-medium uppercase text-red-400'>Research</h4>

                    <div className='flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10'>
                         <div className='flex flex-row gap-4 w-full lg:w-2/5'>
                              <h5 className='text-lg font-medium'>How Might We?</h5>
                         </div>


                         <div className='flex w-full lg:w-3/5 flex-col gap-6'>
                              <p className='text-base md:text-lg uppercase tracking-wide text-blue-500 font-normal leading-7 md:leading-8'>How might we help students and young professionals reduce household food waste efficiently?</p>

                              <ul className='list-disc list-inside text-sm md:text-base font-light text-foreground space-y-2'>
                                   <li className=''>How might we help students and young professionals reduce household food waste efficiently?</li>
                                   <li className=''>How might we help students and young professionals reduce household food waste efficiently?</li>     
                                   <li className=''>How might we help students and young professionals reduce household food waste efficiently?</li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>
     </>
)
}