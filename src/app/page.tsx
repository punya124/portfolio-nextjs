import { ModeToggle } from "@/components/mode-toggle";
import Nav from "@/components/ui/nav";

export default function Home() {
  return (
    <main className="p-16">
      <section className="py-24 flex flex-col gapx-8">
        <h1 className="text-4xl font-bold">John Doe</h1>
        <p className="text-base text-muted-foreground">Web Developer</p>
        <p className="text-base text-muted-foreground">Amherst, MA</p>
      </section>
    </main>
  );
}
