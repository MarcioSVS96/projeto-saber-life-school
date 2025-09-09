import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Baby, Heart, Clock, Users, Shield, Smile, Music, Palette } from "lucide-react"

export default function BercarioPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/10 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary text-balance">Berçário</h1>
              <p className="text-xl text-muted-foreground mb-6 text-pretty leading-relaxed">
                Cuidado especializado e carinhoso para bebês de 4 meses a 2 anos, com foco no desenvolvimento motor,
                cognitivo e emocional.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Baby className="w-5 h-5 text-secondary" />
                  <span className="font-medium">4 meses - 2 anos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="font-medium">Turmas pequenas</span>
                </div>
              </div>
              <Button size="lg">Conhecer o berçário</Button>
            </div>
            <div className="relative">
              <img src="/saberLife.jpg" alt="Berçário Saber Life" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Cuidado Especializado</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ambiente seguro e estimulante para os primeiros anos de vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Cuidado Individualizado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Atenção personalizada respeitando o ritmo e necessidades de cada bebê, com profissionais
                  especializados em desenvolvimento infantil.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Ambiente Seguro</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Espaços adaptados com materiais seguros, higienização constante e monitoramento 24h para garantir
                  total segurança.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Smile className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Estímulos Adequados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Atividades sensoriais e motoras apropriadas para cada fase do desenvolvimento, promovendo crescimento
                  saudável e feliz.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-chart-4/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-chart-4" />
                </div>
                <CardTitle>Rotina Estruturada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Horários organizados para alimentação, sono, higiene e brincadeiras, criando segurança e
                  previsibilidade para os bebês.
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
                  Estímulos musicais que auxiliam no desenvolvimento neurológico, emocional e na criação de vínculos
                  afetivos.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Atividades Sensoriais</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Experiências táteis, visuais e auditivas que estimulam os sentidos e contribuem para o desenvolvimento
                  cognitivo.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Daily Routine */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Rotina do Berçário</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Um dia estruturado e cheio de carinho
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">7h</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Acolhimento</h3>
                  <p className="text-muted-foreground">
                    Recepção carinhosa dos bebês, verificação de saúde e adaptação ao ambiente.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary font-bold">9h</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Atividades Sensoriais</h3>
                  <p className="text-muted-foreground">
                    Estímulos táteis, visuais e auditivos adequados para cada faixa etária.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">11h</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Alimentação e Descanso</h3>
                  <p className="text-muted-foreground">
                    Momentos de alimentação respeitando necessidades individuais e soninho tranquilo.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-chart-4/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-chart-4 font-bold">14h</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Brincadeiras e Interação</h3>
                  <p className="text-muted-foreground">
                    Atividades lúdicas que promovem desenvolvimento motor e social.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Seu bebê merece o melhor cuidado</h2>
          <p className="text-lg mb-8 text-pretty max-w-2xl mx-auto">
            Venha conhecer nosso berçário e veja como cuidamos com carinho dos primeiros anos de vida
          </p>
          <Button size="lg" variant="secondary">
            Agendar visita ao berçário
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
