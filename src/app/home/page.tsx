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
