"use client";

import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0" />
        <div className="container mx-auto px-4 z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Shambhavi
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Tech Enthusiast & Full Stack Developer
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button variant="outline" size="lg">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                alt="Developer workspace"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                As a passionate Full Stack Developer, I thrive on turning complex problems into elegant solutions. With expertise in modern web technologies and a keen eye for detail, I create robust and scalable applications that make a difference.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4">
                  <Terminal className="h-8 w-8 mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Frontend</h3>
                  <p className="text-sm text-muted-foreground">React, Next.js, TypeScript</p>
                </Card>
                <Card className="p-4">
                  <Terminal className="h-8 w-8 mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">Backend</h3>
                  <p className="text-sm text-muted-foreground">Node.js, Python, SQL</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-167${i}508045929-e5b0678bd598?auto=format&fit=crop&q=80`}
                  alt={`Project ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold mb-2">Project Title {i}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A brief description of the project and the technologies used in its development.
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <Card className="p-6">
              <div className="flex flex-col space-y-4">
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </Button>
                <Button variant="outline" className="w-full">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
                <Button variant="outline" className="w-full">
                  <Github className="mr-2 h-5 w-5" />
                  Follow on GitHub
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}