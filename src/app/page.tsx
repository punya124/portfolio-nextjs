"use client"

import LetterGrid from '@/components/letter-grid';
import { ModeToggle } from '@/components/mode-toggle';
import Nav from '@/components/ui/nav';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Mail } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import SpotlightText from '@/components/spotlight-text';
import InteractiveShadowText from '@/components/shadow-text';
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import ZoomParallax from '../components/ZoomParallax/index';
import Lenis from 'lenis'

const Home = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  // useEffect(() => {
  //   const lenis = new Lenis()

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // }, [])

  return (
    <main className='relative scroll-smooth'>
      <LetterGrid />
      <header className="static flex-col flex h-screen w-full text-center items-center justify-center">
        <div className="grid grid-cols-1 grid-rows-3">
          <div className="hidden md:flex w-full h-fit text-center items-center justify-center hover:">
            <ModeToggle />
            {/* <Nav /> */}
            <a href="https://www.linkedin.com/in/punya-galundia-528327247/" target='_blank'><Button variant='outline' className='transition-all text-foreground mx-5 z-10 relative'>Connect with Me</Button></a>
          </div>
          <h1 className="text-6xl font-bold z-10 relative">punya galundia</h1>
          <h1 className="text-muted-foreground flex w-full text-center items-end justify-around">Full-Stack Web Developer based in Amherst, MA</h1>
        </div>
      </header>
      <div className='fixed h-1/6 flex-col flex justify-evenly right-10 bottom-10 z-50'>
        <Button className="z-10 relative" variant="outline" size="icon" asChild>
          <a href="https://www.linkedin.com/in/punya-galundia-528327247/" target='_blank'>
            <Linkedin className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
            <span className="sr-only">Linkedin</span>
          </a>
        </Button>
        <Button className="z-10 relative" variant="outline" size="icon" asChild>
          <a href="https://github.com/punya124" target='_blank'>
            <Github className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
            <span className="sr-only">GitHub</span>
          </a>
        </Button>
        <Button className="z-10 relative" variant="outline" size="icon" asChild>
          <a href="mailto:punyagalundia@gmail.com" target='_blank'>
            <Mail className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
            <span className="sr-only">Mail</span>
          </a>
        </Button>
      </div>
      <section ref={ref}>
        <div style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
          className='bg-background relative flex align-middle py-16 border-solid border-t-2 border-b-2 border-muted-foreground'>
          <InteractiveShadowText />
          <div className="py-20 opacity-95 flex w-full text-center relative items-center align-middle justify-center">
            <Tabs defaultValue="account" className="w-fit">
              <TabsList>
                <TabsTrigger value="account">Web Apps</TabsTrigger>
                <TabsTrigger value="password">Games</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <div className="flex items-center justify-center">
                  <div className='m-2 h-9 rounded-lg bg-muted p-2'>
                    <img className='h-[100%] dark:[filter:brightness(0)_invert(1)]' src="/next.svg" alt="Next.js" />
                  </div>
                  <div className='inline-flex items-center m-2 h-9 rounded-lg bg-muted p-2 text-foreground text-bold'>
                    <img className='dark:[filter:brightness(0)_invert(1)] mr-1 h-[100%] ' src="/vercel.svg" alt="" />
                    Vercel
                  </div>
                  <div className='inline-flex items-center m-2 h-9 rounded-lg bg-muted p-2 text-foreground text-bold'>
                    <img className='mr-1 h-[100%]' src="/typescript.svg" alt="" />
                    <h1>Typescript</h1>
                  </div>
                  <div className='inline-flex items-center m-2 h-9 rounded-lg bg-muted p-2 text-foreground text-bold'>
                    <img className='mr-1 h-[100%]' src="/tailwind.svg" alt="" />
                    <h1>Tailwindcss</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className='inline-flex items-center  m-2 h-9 rounded-lg bg-muted p-2 text-foreground text-bold'>
                    <img className='mr-1 h-[100%]' src="/html.svg" alt="" />
                    HTML
                  </div>
                  <div className='inline-flex items-center m-2 h-9 rounded-lg bg-muted p-2 text-foreground text-bold'>
                    <img className='mr-1 h-[100%]' src="/css-3.svg" alt="" />
                    <h1>CSS</h1>
                  </div>
                  <div className='inline-flex items-center m-2 h-9 rounded-lg bg-muted p-2 text-foreground text-bold'>
                    <img className='mr-1 h-[100%]' src="/javascript.svg" alt="" />
                    <h1>Javascript</h1>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="password">
                <div className="flex items-center justify-center">
                  <div className='inline-flex items-center  m-2 h-9 rounded-lg bg-muted p-2 text-foreground text-bold'>
                    <img className='dark:[filter:brightness(0)_invert(1)] mr-1 h-[100%] ' src="/unity.svg" alt="" />
                    Unity
                  </div>
                  <div className='inline-flex items-center m-2 h-9 rounded-lg bg-muted p-2 text-foreground text-bold'>
                    <img className='mr-1 h-[100%]' src="/csharp2.svg" alt="" />
                    C-Sharp
                  </div>
                  <div className='inline-flex items-center m-2 h-9 rounded-lg bg-muted p-2 text-foreground text-bold'>
                    <img className='mr-1 h-[100%]' src="/blender.svg" alt="" />
                    <h1>Blender</h1>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="other">
                <div className="flex items-center justify-center">
                  <div className='inline-flex items-center  m-2 h-9 rounded-lg bg-muted p-2 text-foreground text-bold'>
                    <img className='mr-1 h-[100%] ' src="/python.svg" alt="" />
                    Python
                  </div>
                  <div className='inline-flex items-center m-2 h-9 rounded-lg bg-muted p-2 text-foreground text-bold'>
                    <img className='dark:[filter:brightness(0)_invert(1)] mr-1 h-[100%]' src="/flask.svg" alt="" />
                    Flask
                  </div>
                  <div className='inline-flex items-center m-2 h-9 rounded-lg bg-muted p-2 text-foreground text-bold'>
                    <img className='mr-1 h-[100%]' src="/postgresql-logo.svg" alt="" />
                    Progresql
                  </div>
                  <div className='inline-flex items-center m-2 h-9 rounded-lg bg-muted p-2 text-foreground text-bold'>
                    <img className='mr-1 h-[100%]' src="/firebase.svg" alt="" />
                    Firebase
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

      </section>

      <section className='relative'>
        <div className='w-full text-center py-14'>
          <h1 id='projects' className="text-8xl font-bold">
            Projects
          </h1>
        </div>
        <div className='flex align-middle justify-center'>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl"
          >
            <CarouselContent>
              <CarouselItem className="sm:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="m-0 p-0 overflow-hidden">
                      <img className='w-full h-1/2 rounded-t-xl' src="/sample.jpeg" alt="" />
                      <div className='m-4 relative h-48'>
                        <h1 className='text-xl'>Mental Mentor</h1>
                        <p className='text-sm text-muted-foreground'>An anonymous platform to discuss matters of mental health.</p>
                        {/* <Button className='absolute bottom-1'>
                          Learn More
                        </Button> */}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="m-0 p-0 overflow-hidden">
                      <img className='w-full h-1/2 rounded-t-xl' src="/sample.jpeg" alt="" />
                      <div className='m-4 relative h-48'>
                        <h1 className='text-xl'>ATHENA</h1>
                        <p className='text-sm text-muted-foreground'>A voice assistant that handles everyday tasks autonomously using AI.</p>
                        {/* <Button className='absolute bottom-1'>
                          Learn More
                        </Button> */}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="m-0 p-0 overflow-hidden">
                      <img className='w-full h-1/2 rounded-t-xl' src="/sample.jpeg" alt="" />
                      <div className='m-4 relative h-48'>
                        <h1 className='text-xl'>NoSingle</h1>
                        <p className='text-sm text-muted-foreground'>A tinder inspired app to help long distance friends play a game of Truths.</p>
                        {/* <Button className='absolute bottom-1'>
                          Learn More
                        </Button> */}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="m-0 p-0 overflow-hidden">
                      <img className='w-full h-1/2 rounded-t-xl' src="/sample.jpeg" alt="" />
                      <div className='m-4 relative h-48'>
                        <h1 className='text-xl'>USocial</h1>
                        <p className='text-sm text-muted-foreground'>A platform to stay updated with all the social events at your university.</p>
                        {/* <Button className='absolute bottom-1'>
                          Learn More
                        </Button> */}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="sm:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="m-0 p-0 overflow-hidden">
                      <img className='w-full h-1/2 rounded-t-xl' src="/sample.jpeg" alt="" />
                      <div className='m-4 relative h-48'>
                        <h1 className='text-xl'>RagFoll</h1>
                        <p className='text-sm text-muted-foreground'>A endless-runner style mobile game where you move your player around to avoid obstacles.</p>
                        {/* <Button className='absolute bottom-1'>
                          Learn More
                        </Button> */}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className='py-20'>
        <ZoomParallax />
        <div className='w-full text-center p-14 h-screen'>
          <h1 className="text-8xl font-bold">
            About Me
          </h1>
          <div className='flex items-center'>
            <img className='w-1/2 p-12 aspect-auto' src="imagePersonal.jpeg" alt="img" />
            <div className='w-1/2 p-12 text-2xl'>
              <p>I am a <b>full-stack web developer</b> with a knack for crafting interactive and engaging user experiences. I thrive on tackling projects that are unconventional and creative, constantly seeking opportunities to <b>experiment, innovate, and push boundaries</b>.</p>
              ...
              <p>Over the past few years, my curiosity has driven me to explore and master nearly ten programming languages, fueling my love for technology and <b>problem-solving</b>. This same passion inspires me as I pursue my computer science degree at UMass Amherst, where I am dedicated to deepening my <b>knowledge</b> and honing my <b>skills</b> to build impactful, forward-thinking solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref2}>
        <div style={{
          transform: isInView2 ? "none" : "translateX(-200px)",
          opacity: isInView2 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
          <SpotlightText />
        </div>
      </section>

      <section className='h-20 bg-muted align-middle items-center flex px-14 text-muted-foreground'>
        © Punya G - January 1st, 2025
      </section>

    </main >
  );
}

export default Home;