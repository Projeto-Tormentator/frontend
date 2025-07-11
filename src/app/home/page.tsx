import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Shield, Code, Star, ChevronRight, Sparkles, Target, Gamepad2, ScrollText, Wand2, Dice6 } from "lucide-react";
import { PROJECT_CONFIG } from "@/config/links";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Community from "./components/Community";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />

      <Features />
      
      <Community />
    </div>
  );
}
