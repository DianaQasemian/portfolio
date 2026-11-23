import { Download, Mail, MapPin } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GitHubIcon, LinkedInIcon } from '@/components/Icons'
import { profile } from '@/data/resume'

export function Hero() {
  return (
    <section id="top" className="scroll-mt-20 pt-10 pb-10 sm:pt-16 sm:pb-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
          <Avatar className="size-24 shrink-0 ring-2 ring-primary/15 ring-offset-2 ring-offset-background sm:size-28">
            <AvatarImage
              src={profile.avatarUrl}
              alt={`${profile.name} portrait`}
              className="object-cover"
            />
            <AvatarFallback className="text-lg font-semibold">
              {profile.initials}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {profile.name}{' '}
              <span className="font-normal text-xl text-muted-foreground sm:text-2xl">
                ({profile.alternateName})
              </span>
            </h1>
            <p className="mt-1 text-base font-medium text-primary sm:text-lg">
              {profile.title}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.coreStack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          {profile.summary}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button asChild>
            <a href="#contact">
              <Mail className="size-4" />
              Get in Touch
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </Button>

          <div className="flex flex-wrap items-center gap-4 pt-1 text-sm text-muted-foreground sm:ml-2 sm:pt-0">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <GitHubIcon className="size-4" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <LinkedInIcon className="size-4" />
              <span>LinkedIn</span>
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 shrink-0" />
              <span>{profile.location}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
