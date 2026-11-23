import { BackgroundSection } from '@/components/BackgroundSection'
import { ContactSection } from '@/components/ContactSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SkillsSection } from '@/components/SkillsSection'
import { Separator } from '@/components/ui/separator'

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="mx-auto max-w-5xl px-4 sm:px-6">
        <Hero />
        <Separator />
        <ExperienceSection />
        <Separator />
        <ProjectsSection />
        <Separator />
        <SkillsSection />
        <Separator />
        <BackgroundSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
