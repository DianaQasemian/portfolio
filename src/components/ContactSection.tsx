import { useState } from 'react'
import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { GitHubIcon, LinkedInIcon } from '@/components/Icons'
import { profile } from '@/data/resume'

const currentYear = new Date().getFullYear()

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable
    }
  }

  return (
    <>
      <section id="contact" className="scroll-mt-20 py-10 sm:py-12">
        <Card className="gap-5 bg-muted/40 py-6">
          <CardHeader className="px-5 py-0 sm:px-6">
            <CardTitle className="text-xl font-semibold tracking-tight sm:text-2xl">
              Get in Touch
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Open to front-end developer roles and freelance web projects.
            </p>
          </CardHeader>

          <CardContent className="flex flex-col gap-4 px-5 sm:px-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <Button asChild className="max-w-full">
                <a
                  href={`mailto:${profile.email}`}
                  className="truncate"
                >
                  <Mail className="size-4 shrink-0" />
                  <span className="truncate">{profile.email}</span>
                </a>
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="size-4 text-primary" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-sm text-muted-foreground">
              <a
                href={profile.phoneHref}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Phone className="size-4 shrink-0" />
                <span>{profile.phone}</span>
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4 shrink-0" />
                <span>{profile.location}</span>
              </span>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <GitHubIcon className="size-4 shrink-0" />
                <span>GitHub</span>
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <LinkedInIcon className="size-4 shrink-0" />
                <span>LinkedIn</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-4">
        <Separator />
        <div className="flex flex-col items-center justify-between gap-3 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {currentYear} {profile.name}</p>
          <div className="flex items-center gap-5">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
