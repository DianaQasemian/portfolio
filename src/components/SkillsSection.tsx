import { Fragment } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { skillGroups } from '@/data/resume'

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-10 sm:py-12">
      <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        Skills
      </h2>

      <Card className="mt-6 gap-0 overflow-hidden py-0">
        {skillGroups.map((group, index) => (
          <Fragment key={group.category}>
            {index > 0 && <Separator />}
            <div className="grid grid-cols-1 items-start gap-2.5 px-5 py-4 sm:grid-cols-[200px_1fr] sm:gap-6 sm:px-6">
              <h3 className="text-sm font-medium text-foreground sm:pt-0.5">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary" className="font-normal">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </Fragment>
        ))}
      </Card>
    </section>
  )
}
