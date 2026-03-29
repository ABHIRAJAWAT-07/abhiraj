// const Skills = () => {
//   const skills = [
//     { name: "React & Next.js", level: 95 },
//     { name: "JavaScript", level: 92 },
//     { name: "Node.js & Express", level: 88 },
//     { name: "Tailwind CSS", level: 90 },
//     { name: "NumPy", level: 95 },
//     { name: "Scikit-learn", level: 92 },
//     { name: "Pandas", level: 88 },
//     { name: "CNNs", level: 90 },
//     { name: "Neural Networks", level: 85 },
//     { name: "PyTorch", level:82}
//     // { name: "REST & GraphQL", level: 87 },
//   ];

//   return (
//     <section className="py-24 px-4 bg-card/30">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center space-y-4 mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold">Technical Skills</h2>
//           <p className="text-muted-foreground text-lg">
//             Expertise across modern web technologies
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {skills.map((skill, index) => (
//             <div key={index} className="space-y-3">
//               <div className="flex justify-between items-center">
//                 <span className="font-medium">{skill.name}</span>
//                 <span className="text-sm text-muted-foreground">{skill.level}%</span>
//               </div>
//               <div className="h-2 bg-muted rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
//                   style={{ width: `${skill.level}%` }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Machine Learning",
    skills: ["NumPy", "Pandas", "Scikit-learn", "XGBoost", "Feature Engineering", "Model Evaluation"],
  },
  {
    title: "Deep Learning & AI",
    skills: ["PyTorch", "TensorFlow", "Neural Networks", "CNNs", "Transformers"],
  },
  {
    title: "Generative AI & LLMs",
    skills: ["LangChain", "LlamaIndex", "RAG Systems","OpenAI API"],
  },
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "Node.js", "REST APIs"],
  },
  {
    title: "Data & Databases",
    skills: ["PostgreSQL", "MongoDB", "FAISS", "ChromaDB", "Redis"],
  },
  {
    title: "MLOps & Cloud",
    skills: ["Docker", "AWS", "CI/CD", "MLflow", "Git", "Linux"],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-[#020617] text-white font-sans">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Technical Skills
        </h2>
        <p className="text-white/60 mt-3 text-lg">
          Expertise across modern technologies
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl 
                       bg-gradient-to-br from-[#0f172a] to-[#020617]
                       border border-white/10
                       shadow-lg backdrop-blur-xl"
          >
            {/* Title */}
            <h3 className="text-lg font-semibold mb-4 text-white/90">
              {category.title}
            </h3>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full 
                             bg-white/5 border border-white/10 
                             text-white/80 
                             hover:bg-white/10 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;