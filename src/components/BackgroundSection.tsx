import { Fragment } from 'react'
import { Globe, GraduationCap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { education, languages } from '@/data/resume'

export function BackgroundSection() {
  return (
    <section id="education" className="scroll-mt-20 py-10 sm:py-12">
      <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        Education & Languages
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        <Card className="gap-3 py-5">
          <CardHeader className="px-5 py-0 sm:px-6">
            <CardTitle className="flex items-center gap-2 text-base font-semibold">
              <GraduationCap className="size-4 text-primary" />
              <span>Education</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 px-5 sm:px-6">
            <p className="text-sm font-medium text-foreground">
              {education.degree}
            </p>
            <p className="text-sm text-muted-foreground">
              {education.institution}
            </p>
            <p className="pt-1 text-xs text-muted-foreground">
              {education.period}
            </p>
          </CardContent>
        </Card>

        <Card className="gap-3 py-5">
          <CardHeader className="px-5 py-0 sm:px-6">
            <CardTitle className="flex items-center gap-2 text-base font-semibold">
              <Globe className="size-4 text-primary" />
              <span>Languages</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 px-5 sm:px-6">
            {languages.map((lang, index) => (
              <Fragment key={lang.name}>
                {index > 0 && <Separator />}
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-medium text-foreground">
                    {lang.name}
                  </span>
                  <span className="text-muted-foreground">{lang.level}</span>
                </div>
              </Fragment>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
