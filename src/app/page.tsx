import { MadeWithLasy } from "@/components/made-with-lasy";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              ✨ Novo Projeto
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Boa noite!
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Hora de transformar suas ideias em realidade com tecnologias modernas e design elegante
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="px-8 py-6 text-lg font-semibold">
              Começar Agora
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              Saiba Mais
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <CardTitle className="text-xl font-bold">Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-base leading-relaxed">
                Construído com Next.js e otimizado para velocidade máxima e experiência fluida
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <CardTitle className="text-xl font-bold">Design Moderno</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-base leading-relaxed">
                Interface elegante com Tailwind CSS e componentes reutilizáveis para uma UX excepcional
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <CardTitle className="text-xl font-bold">TypeScript</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-base leading-relaxed">
                Desenvolvimento seguro e eficiente com tipagem estática e melhor experiência de desenvolvimento
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12">
            Pronto para começar
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">TypeScript</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">Modern</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">UI/UX</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-600">Fast</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Performance</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">Ready</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">To Deploy</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Comece sua jornada hoje
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Transforme suas ideias em aplicações incríveis com nossa stack moderna e ferramentas poderosas
            </p>
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg font-semibold">
              Iniciar Projeto
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <MadeWithLasy />
    </div>
  );
}