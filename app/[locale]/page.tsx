import { Button } from '@/components/ui/button';
import {
  WebApplicationStructuredData,
  OrganizationStructuredData,
} from '@/components/structured-data';
import { Sparkles, CheckCircle, TrendingUp, Zap } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/lib/navigation';
import { LanguageSwitcher } from '@/components/language-switcher';

export default async function Home() {
  const t = await getTranslations('landing');

  return (
    <>
      <WebApplicationStructuredData />
      <OrganizationStructuredData />

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">{t('header.title')}</h1>
            <nav className="flex items-center gap-4">
              <LanguageSwitcher variant="ghost" size="sm" />
              <Link href="/login">
                <Button variant="ghost">{t('header.login')}</Button>
              </Link>
              <Link href="/signup">
                <Button>{t('header.getStarted')}</Button>
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1">
          <section className="container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                {t('hero.badge')}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                {t('hero.title')}{' '}
                <span className="text-primary">{t('hero.titleHighlight')}</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Link href="/signup">
                  <Button size="lg" className="text-lg px-8">
                    {t('hero.startBuilding')}
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    {t('hero.signIn')}
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-muted/50 py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {t('features.title')}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-background p-6 rounded-lg border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t('features.aiPowered.title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('features.aiPowered.description')}
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t('features.atsOptimized.title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('features.atsOptimized.description')}
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t('features.tracking.title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('features.tracking.description')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center space-y-6 bg-primary/5 border border-primary/20 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t('cta.title')}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t('cta.description')}
                </p>
                <Link href="/signup">
                  <Button size="lg" className="text-lg px-8">
                    {t('cta.button')}
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                {t('footer.copyright')}
              </p>
              <nav className="flex gap-6">
                <Link
                  href="/login"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {t('footer.login')}
                </Link>
                <Link
                  href="/signup"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {t('footer.signup')}
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
