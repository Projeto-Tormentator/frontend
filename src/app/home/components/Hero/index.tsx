import { Button } from "@/components/ui/button";
import { PROJECT_CONFIG } from "@/config/links";
import { 
  ArrowRight, 
  Code, 
  Sparkles, 
  Zap 
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  
  return (
    <section className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-slate-700 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-slate-900/20"></div>
      
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30 mb-8">
            <Sparkles className="h-4 w-4 text-purple-300" />
            <span className="text-sm font-medium text-purple-200">
              Versão BETA Em Breve
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-slate-300 bg-clip-text text-transparent">
            {PROJECT_CONFIG.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
            Um HUB de ferramentas para{" "}
            <span className="text-yellow-300 font-semibold">
              Mestres e Jogadores
            </span>{" "}
            de Tormenta 20
          </p>
          
          <p className="text-lg text-purple-200 mb-12 max-w-2xl mx-auto">
            Criado pela comunidade, para a comunidade. Caso você tenha interesse em contribuir,
            <span className="text-yellow-300 font-semibold">
              {" "}entre no nosso{" "}
              <Link 
                className="underline underline-offset-2" 
                href={PROJECT_CONFIG.community.discord}
              >
                Discord
              </Link>
            </span>{" "}
            e ajude a tornar o {PROJECT_CONFIG.name} ainda melhor!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#features">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Zap className="h-5 w-5 mr-2" />
                Começar Agora
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            
            <Link 
              href={PROJECT_CONFIG.project.repository} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-purple-300 text-purple-950 dark:text-purple-100 hover:bg-purple-500/20 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <Code className="h-5 w-5 mr-2" />
                Ver no GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
      </section>
  );
}