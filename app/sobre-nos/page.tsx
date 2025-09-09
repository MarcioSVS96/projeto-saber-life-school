import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Globe, Award, Target, Lightbulb, Shield } from "lucide-react"

export default function SobreNosPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary text-balance">Sobre a Saber Life</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Uma escola que acredita no potencial único de cada criança e oferece educação integral e bilíngue para
            formar cidadãos conscientes e preparados para o futuro.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-primary/20">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Proporcionar uma educação de excelência que desenvolva integralmente as crianças, respeitando suas
                  individualidades e preparando-as para serem cidadãos éticos, críticos e transformadores da sociedade.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-accent/20">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl text-accent">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Ser reconhecida como referência em educação integral e bilíngue, formando indivíduos autônomos,
                  criativos e socialmente responsáveis, capazes de enfrentar os desafios do século XXI.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-secondary/20">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl text-secondary">Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Respeito, ética, inovação, excelência, diversidade e sustentabilidade. Acreditamos na educação como
                  ferramenta de transformação social e no desenvolvimento integral do ser humano.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Nossa História</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  A Saber Life nasceu do sonho de criar um espaço educacional que respeitasse a individualidade de cada
                  criança, oferecendo uma educação verdadeiramente integral.
                </p>
                <p>
                  Fundada por educadores apaixonados, nossa escola combina metodologias inovadoras com valores
                  tradicionais, criando um ambiente acolhedor onde as crianças podem explorar, descobrir e crescer em
                  todas as dimensões.
                </p>
                <p>
                  Nosso programa bilíngue e as atividades complementares como karatê, musicoterapia e horta pedagógica
                  fazem parte de uma proposta educacional única, que prepara nossos alunos para serem cidadãos globais e
                  conscientes.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/saberLife.jpg"
                alt="História da Saber Life"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Nossa Equipe</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Profissionais qualificados e apaixonados pela educação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <CardTitle>Equipe Pedagógica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Professores especializados em educação infantil e fundamental</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-10 h-10 text-accent" />
                </div>
                <CardTitle>Equipe de Cuidados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Profissionais especializados em cuidados infantis e primeiros socorros
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-10 h-10 text-secondary" />
                </div>
                <CardTitle>Professores Bilíngues</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Nativos e fluentes em inglês para imersão natural no idioma</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-chart-4/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-10 h-10 text-chart-4" />
                </div>
                <CardTitle>Especialistas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Profissionais em karatê, musicoterapia e outras atividades especializadas
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Venha conhecer nossa escola!</h2>
          <p className="text-lg mb-8 text-pretty max-w-2xl mx-auto">
            Agende uma visita e veja de perto como trabalhamos para o desenvolvimento integral do seu filho
          </p>
          <Button size="lg" variant="secondary">
            Agendar visita
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
