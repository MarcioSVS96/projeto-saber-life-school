import Header from "@/components/header"
import Footer from "@/components/footer"
import Carousel from "@/components/carousel"
import ProgramCard from "@/components/program-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Music, Sprout, Clock, Home, Users, BookOpen, Globe } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Carousel */}
      <section className="container mx-auto px-4 py-8">
        <Carousel />
      </section>

      {/* About Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Sobre a Saber Life</h2>
              <p className="text-lg mb-6 text-pretty leading-relaxed">
                Nosso objetivo é proporcionar uma educação de qualidade, integral e bilíngue, que promova o
                desenvolvimento de todas as habilidades das crianças. Acreditamos que cada criança é única e merece uma
                educação personalizada que respeite seu ritmo e potencial.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-sm">Turmas reduzidas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-accent" />
                  <span className="text-sm">Metodologia ativa</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-accent" />
                  <span className="text-sm">Programa bilíngue</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-accent" />
                  <span className="text-sm">Cuidado integral</span>
                </div>
              </div>
              <Button size="lg" variant="secondary" asChild>
                <a href="/sobre-nos">Conheça nossa história</a>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/saberLife.jpg"
                alt="Equipe pedagógica e crianças felizes"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Nossos Programas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Oferecemos programas educacionais completos para cada fase do desenvolvimento infantil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProgramCard
              title="Berçário"
              age="4 meses - 2 anos"
              description="Cuidado especializado e estímulos adequados para os primeiros anos de vida, com foco no desenvolvimento motor e cognitivo."
              imageSrc="/saberLife.jpg"
              href="/bercario"
            />
            <ProgramCard
              title="Educação Infantil"
              age="2 - 5 anos"
              description="Aprendizado lúdico e desenvolvimento da autonomia através de brincadeiras educativas e atividades criativas."
              imageSrc="/saberLife.jpg"
              href="/educacao-infantil"
            />
            <ProgramCard
              title="Ensino Fundamental"
              age="6 - 10 anos"
              description="Base sólida para o conhecimento acadêmico com metodologia bilíngue e desenvolvimento de habilidades socioemocionais."
              imageSrc="/saberLife.jpg"
              href="/ensino-fundamental"
            />
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Siga-nos no Instagram</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Acompanhe nosso dia a dia e veja de perto as atividades e projetos da nossa escola.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Substitua '#' pelo link real de cada post e a imagem em `src` */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="aspect-square bg-background rounded-lg overflow-hidden">
                <img
                  src="/saberLife.jpg"
                  alt="Post do Instagram 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="aspect-square bg-background rounded-lg overflow-hidden">
                <img
                  src="/saberLife.jpg"
                  alt="Post do Instagram 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="aspect-square bg-background rounded-lg overflow-hidden">
                <img
                  src="/saberLife.jpg"
                  alt="Post do Instagram 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="aspect-square bg-background rounded-lg overflow-hidden">
                <img
                  src="/saberLife.jpg"
                  alt="Post do Instagram 4"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </a>
          </div>

          <div className="text-center mt-12">
            {/* Substitua '#' pelo link do perfil do Instagram */}
            <Button size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Seguir no Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Nossos Diferenciais</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Atividades e serviços que fazem da Saber Life uma escola única
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Karatê</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Disciplina e autocontrole através das artes marciais</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Music className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Musicoterapia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Desenvolvimento emocional e cognitivo através da música</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Sprout className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Horta Pedagógica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Conexão com a natureza e educação ambiental</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-chart-4/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Período Integral</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Atividades diversificadas durante todo o dia</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Hotelzinho</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Cuidado especial em horários estendidos</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Second CTA Banner */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Faça parte da família Saber Life!</h2>
          <p className="text-lg mb-8 text-pretty max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos contribuir para o desenvolvimento do seu filho
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/contato">Entrar em contato</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
