import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Music, BookOpen, Users, Globe, Sprout, Gamepad2, Heart } from "lucide-react"

export default function EducacaoInfantilPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary text-balance">Educação Infantil</h1>
              <p className="text-xl text-muted-foreground mb-6 text-pretty leading-relaxed">
                Aprendizado lúdico e desenvolvimento da autonomia para crianças de 2 a 5 anos, através de brincadeiras
                educativas e atividades criativas.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="font-medium">2 - 5 anos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Programa bilíngue</span>
                </div>
              </div>
              <Button size="lg">Conhecer a educação infantil</Button>
            </div>
            <div className="relative">
              <img
                src="/saberLife.jpg"
                alt="Educação Infantil Saber Life"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Metodologia Lúdica</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Aprender brincando é a nossa especialidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Gamepad2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Brincadeiras Educativas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Jogos e atividades que estimulam o raciocínio lógico e a criatividade</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Arte e Criatividade</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Expressão artística através de pintura, desenho e atividades manuais</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Music className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Música e Movimento</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Desenvolvimento motor e musical através de canções e danças</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-chart-4/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-chart-4" />
                </div>
                <CardTitle>Contação de Histórias</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Estímulo à imaginação e desenvolvimento da linguagem oral</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bilingual Program */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Programa Bilíngue</h2>
              <p className="text-lg mb-6 text-pretty leading-relaxed">
                Imersão natural no inglês através de atividades cotidianas, músicas, brincadeiras e interação com
                professores nativos.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p>Professores nativos e bilíngues especializados</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p>Metodologia de imersão natural e lúdica</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p>Atividades culturais e celebrações internacionais</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/saberLife.jpg" alt="Programa Bilíngue" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Atividades Especiais</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experiências únicas que enriquecem o aprendizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Sprout className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Horta Pedagógica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Contato com a natureza, aprendizado sobre plantas e alimentação saudável através do cultivo de
                  vegetais e ervas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Music className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Musicoterapia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Desenvolvimento emocional e cognitivo através da música, com instrumentos adaptados para cada idade.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Karatê Infantil</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Desenvolvimento da disciplina, coordenação motora e autoconfiança através de movimentos adaptados para
                  crianças.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Desperte o potencial do seu filho</h2>
          <p className="text-lg mb-8 text-pretty max-w-2xl mx-auto">
            Venha conhecer nossa educação infantil e veja como preparamos as crianças para o futuro
          </p>
          <Button size="lg" variant="secondary">
            Agendar visita à educação infantil
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
