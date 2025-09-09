"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/saberLife.png" alt="" height={60} width={60} />
            <span className="text-xl font-bold text-foreground">Saber Life School</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Início
            </Link>
            <Link href="/sobre-nos" className="text-foreground hover:text-primary transition-colors">
              Sobre nós
            </Link>
            <Link href="/bercario" className="text-foreground hover:text-primary transition-colors">
              Berçário
            </Link>
            <Link href="/educacao-infantil" className="text-foreground hover:text-primary transition-colors">
              Educação Infantil
            </Link>
            <Link href="/ensino-fundamental" className="text-foreground hover:text-primary transition-colors">
              Ensino Fundamental
            </Link>
            <Link href="/contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/sobre-nos"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre nós
              </Link>
              <Link
                href="/bercario"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Berçário
              </Link>
              <Link
                href="/educacao-infantil"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Educação Infantil
              </Link>
              <Link
                href="/ensino-fundamental"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ensino Fundamental
              </Link>
              <Link
                href="/contato"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
