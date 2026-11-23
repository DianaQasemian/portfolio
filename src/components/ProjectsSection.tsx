import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { moreProjectsNote, projects } from '@/data/resume'
import { cn } from '@/lib/utils'

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 py-10 sm:py-12">
      <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        Selected Projects
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className={cn(
              'flex h-full flex-col justify-between gap-4 py-5 transition-colors hover:border-primary/40',
              project.featured && 'md:col-span-2'
            )}
          >
            <div className="space-y-2.5">
              <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-2 px-5 py-0 sm:px-6">
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="text-base font-semibold">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge variant="outline" className="text-primary border-primary/30">
                      Featured
                    </Badge>
                  )}
                </div>

                {project.url && project.urlLabel && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span>{project.urlLabel}</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                )}
              </CardHeader>

              <CardContent className="px-5 sm:px-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
            </div>

            <CardFooter className="flex flex-wrap gap-1.5 px-5 pt-1 sm:px-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>

      <p className="mt-5 text-sm text-muted-foreground">
        {moreProjectsNote.prefix}:{' '}
        <a
          href={moreProjectsNote.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 font-medium text-primary hover:underline underline-offset-4"
        >
          <span>{moreProjectsNote.linkLabel}</span>
          <ArrowUpRight className="size-3.5" />
        </a>
      </p>
    </section>
  )
}
