import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Globe, Calculator, Microscope, Palette, Users, Trophy, Target } from "lucide-react"

export default function EnsinoFundamentalPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-chart-4/10 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary text-balance">Ensino Fundamental</h1>
              <p className="text-xl text-muted-foreground mb-6 text-pretty leading-relaxed">
                Base sólida para o conhecimento acadêmico com metodologia bilíngue e desenvolvimento de habilidades
                socioemocionais para crianças de 6 a 10 anos.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-chart-4" />
                  <span className="font-medium">6 - 10 anos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-accent" />
                  <span className="font-medium">Bilíngue integral</span>
                </div>
              </div>
              <Button size="lg">Conhecer o ensino fundamental</Button>
            </div>
            <div className="relative">
              <img
                src="/saberLife.jpg"
                alt="Ensino Fundamental Saber Life"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Excelência Acadêmica</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Currículo completo que prepara para os desafios do futuro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Língua Portuguesa</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Desenvolvimento da leitura, escrita e interpretação de textos</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Matemática</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Raciocínio lógico e resolução de problemas de forma prática</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Ciências</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Descoberta do mundo através de experimentos e observação</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-chart-4/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-chart-4" />
                </div>
                <CardTitle>Inglês Avançado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Fluência no idioma através de imersão e prática constante</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bilingual Immersion */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Imersão Bilíngue Integral</h2>
              <p className="text-lg mb-6 text-pretty leading-relaxed">
                50% das aulas ministradas em inglês, com conteúdos acadêmicos trabalhados nos dois idiomas para formar
                cidadãos globais.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-chart-4 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p>Matemática e Ciências em inglês</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-chart-4 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p>Projetos interdisciplinares bilíngues</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-chart-4 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p>Certificações internacionais Cambridge</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-chart-4 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p>Intercâmbio cultural virtual</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/saberLife.jpg" alt="Imersão Bilíngue" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Socioemotional Development */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Desenvolvimento Socioemocional</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Formação integral que vai além do conhecimento acadêmico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Projeto de Vida</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Desenvolvimento de metas pessoais e autoconhecimento através de atividades reflexivas e planejamento
                  futuro.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Trabalho em Equipe</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Projetos colaborativos que desenvolvem liderança, comunicação e habilidades sociais essenciais.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Protagonismo</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Estímulo à autonomia e responsabilidade através de projetos estudantis e iniciativas próprias.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Atividades Complementares</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Enriquecimento curricular para desenvolvimento completo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Karatê</h3>
                  <p className="text-muted-foreground">
                    Disciplina, respeito e autocontrole através das artes marciais.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Arte e Cultura</h3>
                  <p className="text-muted-foreground">Expressão criativa através de artes visuais e teatro.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Microscope className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Laboratório de Ciências</h3>
                  <p className="text-muted-foreground">Experimentos práticos que despertam a curiosidade científica.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-chart-4/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-6 h-6 text-chart-4" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Robótica Educacional</h3>
                  <p className="text-muted-foreground">Programação e tecnologia de forma lúdica e educativa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Prepare seu filho para o futuro</h2>
          <p className="text-lg mb-8 text-pretty max-w-2xl mx-auto">
            Venha conhecer nosso ensino fundamental e veja como formamos cidadãos preparados para os desafios do amanhã
          </p>
          <Button size="lg" variant="secondary">
            Agendar visita ao ensino fundamental
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
