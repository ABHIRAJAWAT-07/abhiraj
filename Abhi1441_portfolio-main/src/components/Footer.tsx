import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
               ABHISHEK.S.RAJAWAT
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 All rights reserved
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/ABHIRAJAWAT-07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-singh-rajawat-5a1052320"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a> */}
            <a
              href="abhisheksinghas805994@gmail.com"
              className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
