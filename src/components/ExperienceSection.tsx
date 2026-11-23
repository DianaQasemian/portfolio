import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/data/resume'

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 py-10 sm:py-12">
      <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        Experience
      </h2>

      <div className="mt-6 space-y-8 sm:border-l sm:border-border sm:pl-6">
        {experiences.map((exp) => (
          <article
            key={`${exp.role}-${exp.organization}-${exp.period}`}
            className="relative"
          >
            <span
              aria-hidden="true"
              className="hidden sm:block absolute -left-[29px] top-1.5 size-2.5 rounded-full border-2 border-primary bg-background"
            />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2">
                <h3 className="text-base font-semibold text-foreground">
                  {exp.role}
                </h3>
                <span className="hidden text-muted-foreground sm:inline" aria-hidden="true">
                  ·
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {exp.organizationUrl ? (
                    <a
                      href={exp.organizationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                    >
                      {exp.organization}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-foreground/90">
                      {exp.organization}
                    </span>
                  )}
                  {exp.organizationQualifier && (
                    <Badge variant="outline" className="font-normal">
                      {exp.organizationQualifier}
                    </Badge>
                  )}
                </div>
              </div>

              <span className="shrink-0 text-sm text-muted-foreground">
                {exp.period}
              </span>
            </div>

            {exp.location && (
              <p className="mt-0.5 text-sm text-muted-foreground">
                {exp.location}
              </p>
            )}

            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground marker:text-primary/60">
              {exp.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
