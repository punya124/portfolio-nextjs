import LetterGrid from '@/components/letter-grid';
import { ModeToggle } from '@/components/mode-toggle';
import Nav from '@/components/ui/nav';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  return (
    <main>
      <LetterGrid />
      <header className="flex h-screen w-full text-center items-center justify-center">
        <div className="grid grid-cols-1 grid-rows-3">
          <div className="hidden md:flex w-full h-fit text-center items-center justify-around hover:">
            <ModeToggle />
            <Nav />
          </div>
          <h1 className="text-6xl font-bold z-10 relative">punya galundia</h1>
          <h1 className="text-muted-foreground flex w-full h-full text-center items-end justify-around">Web Developer based in Amherst, MA</h1>
        </div>
      </header>
      <section className="p-16 flex w-full text-center items-center justify-center">
        <Tabs defaultValue="account" className="w-fit">
          <TabsList>
            <TabsTrigger value="account">Web Apps</TabsTrigger>
            <TabsTrigger value="password">Games</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="flex items-center justify-center">
              <div className='m-2 h-9 rounded-lg bg-muted p-2'>
                <img className='h-[100%] dark:[filter:brightness(0)_invert(1)]' src="/next.svg" alt="Next.js" />
              </div>
              <div className='inline-flex items-center m-2 h-9 rounded-lg bg-muted p-2 text-foreground text-bold'>
                <img className='mr-1 h-[100%] ' src="/vercel.svg" alt="" />
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
                <img className='mr-1 h-[100%] ' src="/unity.svg" alt="" />
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
        </Tabs>

      </section>
    </main>


  );
}
