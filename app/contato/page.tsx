import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Car, Bus } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary text-balance">Entre em Contato</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Estamos aqui para esclarecer suas dúvidas e ajudar você a conhecer melhor a Saber Life. Entre em contato
            conosco!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Endereço</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rua das Flores, 123
                  <br />
                  Bairro Jardim
                  <br />
                  São Paulo - SP
                  <br />
                  CEP: 01234-567
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Telefone</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  (11) 1234-5678
                  <br />
                  (11) 98765-4321
                  <br />
                  WhatsApp disponível
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>E-mail</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  contato@saberlife.com.br
                  <br />
                  matriculas@saberlife.com.br
                  <br />
                  pedagogico@saberlife.com.br
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-chart-4/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-chart-4" />
                </div>
                <CardTitle>Horário</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Segunda a Sexta
                  <br />
                  7h às 19h
                  <br />
                  Sábado: 8h às 12h
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-primary">Nossa Localização</h2>
              <div className="bg-muted rounded-lg p-8 mb-6">
                <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Mapa interativo da localização</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Como Chegar</h3>

                <div className="flex items-start space-x-3">
                  <Car className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">De Carro</p>
                    <p className="text-sm text-muted-foreground">
                      Estacionamento próprio disponível. Acesso fácil pela Av. Principal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Bus className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Transporte Público</p>
                    <p className="text-sm text-muted-foreground">
                      Linhas 123, 456 e 789. Ponto de ônibus a 50m da escola.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Respostas para as dúvidas mais comuns dos pais
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Qual a idade mínima para matrícula?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Recebemos bebês a partir de 4 meses no nosso berçário especializado, com cuidadores qualificados e
                  ambiente adaptado.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Como funciona o programa bilíngue?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nosso programa bilíngue oferece imersão natural no inglês através de atividades cotidianas, com
                  professores nativos e metodologia lúdica adequada para cada faixa etária.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vocês oferecem período integral?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sim! Oferecemos período integral das 7h às 19h, com atividades diversificadas, alimentação balanceada
                  e acompanhamento pedagógico durante todo o dia.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Como posso agendar uma visita?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Você pode agendar uma visita através do nosso formulário de contato, WhatsApp ou telefone. Ficaremos
                  felizes em apresentar nossa estrutura e metodologia pessoalmente.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
