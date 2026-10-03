import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";

const EMAIL = "arpitdwivedi2611@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="section-shell">
      <div className="section-container">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="section-eyebrow">Contact</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">Have an iOS problem worth solving?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            If you need a senior engineer for a production iOS app, architecture work,
            performance improvements, or a new feature from zero to shipped, let's talk.
          </p>

          <Card className="glass-card mt-10 overflow-hidden p-2 text-left">
            <div className="rounded-[1.35rem] bg-gradient-to-br from-primary/10 via-transparent to-accent/10 p-7 sm:p-10">
              <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href={"mailto:" + EMAIL} className="mt-1 block break-all text-xl font-semibold text-foreground transition-colors hover:text-primary sm:text-2xl">{EMAIL}</a>
                  <p className="mt-2 text-sm text-muted-foreground">Typically best for project or collaboration enquiries.</p>
                </div>
                <Button variant="outline" size="icon" onClick={copyEmail} aria-label="Copy email" className="h-11 w-11 shrink-0 rounded-full">
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="hero" className="rounded-full">
                  <a href={"mailto:" + EMAIL}><Mail className="mr-2 h-4 w-4" />Start a conversation</a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href="https://www.linkedin.com/in/arpit-dwivedi2678/" target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2 h-4 w-4" />LinkedIn <ArrowUpRight className="ml-1 h-4 w-4" /></a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href="https://github.com/Arpit-2678" target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" />GitHub <ArrowUpRight className="ml-1 h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
