import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  profileImage?: string;
  resumeUrl?: string;
}

const HeroSection = ({
  name = "Himath De Silva",
  title = "BSc (Hons) in Software Engineering | NSBM Green University",
  profileImage = "./profile.jpeg",
  resumeUrl = "/Himath Resume Ext.pdf",
}: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-background py-20 px-4 md:px-8"
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl"
        >
          <img
            src={profileImage}
            alt={name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
          >
            {name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            {title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="group"
              onClick={() => window.open(resumeUrl, "_blank")}
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download My Resume
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
