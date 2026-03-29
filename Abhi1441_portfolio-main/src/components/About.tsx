import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code2, label: "Projects Completed", value: "3+" },
    { icon: Rocket, label: "Years Experience", value: "1" },
    // { icon: Users, label: "Happy Clients", value: "4+" },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate software engineer crafting digital experiences with precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Crafting Solutions That Matter
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With over 1  year in software development, I specialize in building scalable, 
              user-friendly websites that combine technical expertise with user-centered design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Great software solves real problems. Whether architecting systems or refining 
              interfaces, I focus on delivering effective, elegant solutions that make a difference.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
