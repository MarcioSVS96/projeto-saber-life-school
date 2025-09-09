import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProgramCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
  age: string
}

export default function ProgramCard({ title, description, imageSrc, href, age }: ProgramCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-primary">{title}</CardTitle>
          <span className="text-sm bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{age}</span>
        </div>
        <CardDescription className="text-pretty">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full">
          <Link href={href}>Saiba mais</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
