import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectCard from "./ProjectCard";
import ThemeProvider from "./ThemeProvider";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
  Github,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

const calculateAge = (birthdate: string): number => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

const skills = [
  { name: "React", color: "bg-blue-500" },
  { name: "Vite", color: "bg-purple-500" },
  { name: "JavaScript", color: "bg-yellow-500" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "Next.js", color: "bg-black" },
  { name: "TailwindCSS", color: "bg-cyan-500" },
];

const projects = [
  {
    id: 1,
    title: "Restaurant Management System – Kottu Club",
    description: "Desktop app for a local restaurant with order management",
    link: "https://tempo-deployment-c5b1bad0-35a8-4a07.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
  },
  {
    id: 2,
    title: "Gym Management App",
    description: "AI-based web app for gym user engagement",
    github: "https://github.com/Himathzzz/FinalEpicedge.git",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    icon: <Instagram className="h-6 w-6" />,
    url: "https://www.instagram.com/ammataudu.laddu/",
  },
  {
    name: "Facebook",
    icon: <Facebook className="h-6 w-6" />,
    url: "https://web.facebook.com/himath.desilva.315",
  },
  {
    name: "GitHub",
    icon: <Github className="h-6 w-6" />,
    url: "https://github.com/Himathzz",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-6 w-6" />,
    url: "https://www.linkedin.com/in/himath-desilva?",
  },
];

const Home = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        <section id="hero" className="bg-background">
          <HeroSection />
        </section>

        <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-muted/30">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              About Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Personal Information
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="font-medium">Full Name:</span>
                      <span>Himath De Silva</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Date of Birth:</span>
                      <span>2004/07/17</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Age:</span>
                      <span>{calculateAge("2004/07/17")} years</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Degree:</span>
                      <span>BSc (Hons) in Software Engineering</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">University:</span>
                      <span>NSBM Green University</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          className={`${skill.color} text-white px-3 py-1 text-sm`}
                        >
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mt-8 mb-4">Contact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>0722867166</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>himathdez@gmail.com</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        <section
          id="projects"
          className="py-20 px-4 md:px-8 lg:px-16 bg-background"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              My Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: project.id * 0.2 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    github={project.github}
                    image={project.image}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section
          id="contact"
          className="py-20 px-4 md:px-8 lg:px-16 bg-muted/30"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span className="text-lg">himathdez@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span className="text-lg">0722867166</span>
              </div>

              <Separator className="my-6 w-1/2 mx-auto" />

              <div className="flex gap-6 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    whileHover={{ scale: 1.2 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    aria-label={`Visit ${social.name}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <footer className="py-6 px-4 bg-background border-t">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Himath De Silva. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Home;
