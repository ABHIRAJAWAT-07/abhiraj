import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--glow-primary)/0.1),transparent_50%)] animate-glow" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
        <div className="space-y-4">
          <div className="flex gap-2 items-center justify-center text-sm text-muted-foreground">
            <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
              Full-Stack Developer
            </span>
            <span className="px-3 py-1 rounded-full border border-secondary/20 bg-secondary/5">
              UI/UX Enthusiast
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Building Digital
            <br />
            Experiences
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            I craft elegant solutions to complex problems through clean code and thoughtful design
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <a 
        href="https://github.com/ABHIRAJAWAT-07" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 rounded-lg border hover:bg-gray-200 transition-all"
      >
        < Github className="w-5 h-5" />
      </a>

      <a 
        href="https://www.linkedin.com/in/abhishek-singh-rajawat-5a1052320"
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 rounded-lg border hover:bg-gray-200 transition-all"
      >
        < Linkedin className="w-5 h-5" />
      </a>
          <a href="abhisheksinghas805994@gmail.com"
             className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </a> */}
    </section>
  );
};

export default Hero;
