import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Rationify-Transparent Ration Distribution Platform",
      description: "A digital ration management platform enabling QR code-based verification and ration allotment tracking ",
      tags: [ "Next.js", "React.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Khoojo India – Location-Based Information Verification Platform",
      description: "Developed a platform for users to verify and access comprehensive information about any place, including schools, hospitals etc",
      tags: [ "Next.js", "React.js", "Node.js", "PostgreSQL", " Bootstrap"],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Pic-Space – Private Workspaces Platform",
      description: "Developed a full-stack web application for secure sharing of photos, ideas, and memories among selected users",
      tags: ["Next.js", "React.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Hand-tracking-using-openCV",
      description:"This Python script utilizes OpenCV and MediaPipe to perform real-time hand tracking using a webcam",
      tags:["Neural Networks","LLMs","CNNs","Deep Learning"],
      gradient:"from-green-500/20 to-emerald-500/20"

    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 bg-gradient-to-br ${project.gradient} border-border hover:border-primary/50 transition-all group`}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-card/50">
                      {tag}
                    </Badge>
                  ))}
                </div>

                 <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="outline" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button> 
                   <Button size="sm" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div> 
                 <div className="flex gap-3 pt-2">

                   
</div> 

              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
