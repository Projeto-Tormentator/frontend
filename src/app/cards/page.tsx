import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ScrollText, Sparkles, Clock, Github, Users } from "lucide-react";
import { PROJECT_CONFIG } from "@/config/links";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Criador de Cartas - ${PROJECT_CONFIG.name}`,
  description: "Crie e personalize cartas para suas aventuras em Tormenta 20. Ferramenta interativa para gerar cartas de poderes, magias, itens e muito mais para suas mesas de RPG.",
  keywords: ["Tormenta 20", "cartas", "RPG", "criador", "gerador", "poderes", "magias", "itens", "mesa", "jogo"],
  authors: [{ name: PROJECT_CONFIG.creator.name, url: PROJECT_CONFIG.creator.github }],
  creator: PROJECT_CONFIG.creator.name,
  openGraph: {
    title: `Criador de Cartas - ${PROJECT_CONFIG.name}`,
    description: "Crie e personalize cartas para suas aventuras em Tormenta 20. Ferramenta interativa para gerar cartas de poderes, magias, itens e muito mais para suas mesas de RPG.",
    url: `${PROJECT_CONFIG.project.homepage}/cards`,
    siteName: PROJECT_CONFIG.name,
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: `Criador de Cartas - ${PROJECT_CONFIG.name}`,
    description: "Crie e personalize cartas para suas aventuras em Tormenta 20. Ferramenta interativa para gerar cartas de poderes, magias, itens e muito mais para suas mesas de RPG.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function CardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mb-6">
              <ScrollText className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Criador de Cartas
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Crie cartas personalizadas para magias, itens, habilidades e muito mais
            </p>
          </div>

          {/* Coming Soon Section */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full border border-green-200 dark:border-green-800 mb-6">
              <Sparkles className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-800 dark:text-green-200">Versão Limitada em Breve</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Criador de Cartas - Primeira Versão
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Estamos preparando o lançamento da primeira versão do criador de cartas! 
              Inicialmente disponibilizaremos uma versão com recursos específicos, 
              com melhorias e expansões planejadas para o futuro.
            </p>

            {/* Current Version Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-left bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  ✨ Versão Inicial Incluirá:
                </h3>
                <ul className="space-y-2 text-green-800 dark:text-green-200">
                  <li>• Cartas de Magia</li>
                  <li>• Cartas de Poder</li>
                  <li>• Habilidades de Raça</li>
                  <li>• Templates básicos de design</li>
                  <li>• Exportação em imagem</li>
                </ul>
              </div>
              
              <div className="text-left bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  🚀 Futuras Adições Planejadas:
                </h3>
                <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                  <li>• Cartas de Itens</li>
                  <li>• Cartas de Equipamentos</li>
                  <li>• Cartas de NPCs</li>
                  <li>• Editor visual avançado</li>
                  <li>• Mais templates e personalização</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800 mb-8">
              <p className="text-purple-800 dark:text-purple-200 text-center">
                <strong>Nossa abordagem:</strong> Lançar uma versão funcional primeiro e expandir com base no feedback da comunidade!
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={PROJECT_CONFIG.creator.github} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Github className="h-5 w-5 mr-2" />
                  Contribuir no GitHub
                </Button>
              </Link>
              
              <Link href={PROJECT_CONFIG.community.discord} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-4 font-semibold transition-all duration-300">
                  <Users className="h-5 w-5 mr-2" />
                  Acompanhar no Discord
                </Button>
              </Link>
            </div>
          </div>

          {/* Back to Home */}
          <Link href={PROJECT_CONFIG.internal.home}>
            <Button variant="outline" size="lg" className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-4 font-semibold transition-all duration-300">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar ao Início
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
