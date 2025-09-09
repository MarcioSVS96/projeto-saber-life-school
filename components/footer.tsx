import Link from "next/link"
import { Brain, MapPin, Mail, Phone, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/saberLife.png" alt="" height={100} width={100} />
              <span className="text-lg font-bold">Saber Life School</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Educação integral e bilíngue que promove o desenvolvimento completo das crianças, preparando-as para um
              futuro brilhante.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4 text-sidebar-primary">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-sidebar-accent" />
                <span className="text-sm">
                  Rua da Educação, 123
                  <br />
                  Centro, Cidade - UF
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-sidebar-accent" />
                <span className="text-sm">contato@saberlife.edu.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-sidebar-accent" />
                <span className="text-sm">(11) 9999-9999</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-sidebar-primary">Links Rápidos</h3>
            <div className="space-y-2">
              <Link href="/sobre" className="block text-sm hover:text-sidebar-primary transition-colors">
                Sobre nós
              </Link>
              <Link href="/bercario" className="block text-sm hover:text-sidebar-primary transition-colors">
                Berçário
              </Link>
              <Link href="/educacao-infantil" className="block text-sm hover:text-sidebar-primary transition-colors">
                Educação Infantil
              </Link>
              <Link href="/ensino-fundamental" className="block text-sm hover:text-sidebar-primary transition-colors">
                Ensino Fundamental
              </Link>
            </div>
          </div>
        </div>

        {/* Redes Sociais e Copyright */}
        <div className="border-t border-sidebar-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="text-sidebar-accent hover:text-sidebar-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-sidebar-accent hover:text-sidebar-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-sidebar-accent hover:text-sidebar-primary transition-colors">
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 Saber Life. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
