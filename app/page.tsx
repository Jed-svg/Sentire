'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Brain, Users, TrendingUp, Zap } from 'lucide-react'

export default function Home() {
  return (
    <main className="w-full bg-background text-foreground">
      {/* Navigation Header */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src="/images/pup-logo.png"
              alt="Sentire logo"
              className="w-8 h-8"
            />
            <span className="font-bold text-lg text-foreground">Sentire</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost" className="text-foreground/70 hover:text-foreground">
                Sign in
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div>
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  Understand Your Students&apos; Wellbeing
                </h1>
                <p className="text-lg text-muted-foreground text-balance">
                  Sentire is an emotion-aware academic monitoring system that helps educational institutions identify at-risk students and provide timely support through intelligent wellness tracking and emotional insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link href="/auth/signup">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                      Start Free Trial
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    View Demo
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-border">
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Institutions Using</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">50K+</p>
                  <p className="text-sm text-muted-foreground">Students Supported</p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-background rounded-2xl p-8 border border-border">
              <div className="space-y-4">
                <div className="h-32 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <Brain className="w-12 h-12 mx-auto mb-2 text-primary/50" />
                    <p className="text-sm">Wellness Dashboard</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground text-center">
                    <div>
                      <TrendingUp className="w-8 h-8 mx-auto mb-1 text-primary/50" />
                      <p className="text-xs">Trends</p>
                    </div>
                  </div>
                  <div className="h-24 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground text-center">
                    <div>
                      <Zap className="w-8 h-8 mx-auto mb-1 text-primary/50" />
                      <p className="text-xs">Alerts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Educators
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Comprehensive tools to monitor, understand, and support student wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Emotion Tracking
              </h3>
              <p className="text-muted-foreground">
                Monitor student emotional states through intelligent check-ins and sentiment analysis to identify patterns and concerns.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Early Detection
              </h3>
              <p className="text-muted-foreground">
                Automatically flag at-risk students before problems escalate, enabling proactive intervention and support.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Data-Driven Insights
              </h3>
              <p className="text-muted-foreground">
                Access detailed analytics and reports to understand classroom dynamics and emotional wellness trends.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Built for Different Perspectives
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Tailored experiences for students, teachers, and administrators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Students */}
            <Card className="p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Students
              </h3>
              <p className="text-muted-foreground mb-4">
                Track your emotional wellbeing, get personalized insights, and access support resources.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>✓ Daily wellness check-ins</li>
                <li>✓ Personal insights & trends</li>
                <li>✓ Resource recommendations</li>
                <li>✓ Privacy-protected data</li>
              </ul>
            </Card>

            {/* Faculty */}
            <Card className="p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Faculty
              </h3>
              <p className="text-muted-foreground mb-4">
                Monitor your students, detect at-risk individuals, and provide timely interventions.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>✓ Class-level dashboards</li>
                <li>✓ At-risk alerts</li>
                <li>✓ Student progress tracking</li>
                <li>✓ Intervention tools</li>
              </ul>
            </Card>

            {/* Admins */}
            <Card className="p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Administrators
              </h3>
              <p className="text-muted-foreground mb-4">
                Oversee institutional wellness initiatives and manage system-wide settings.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>✓ Institution analytics</li>
                <li>✓ User management</li>
                <li>✓ System configuration</li>
                <li>✓ Compliance reports</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Ready to Prioritize Student Wellness?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Join hundreds of educational institutions using Sentire to support their students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required. 30-day free trial with full access.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/images/pup-logo.png"
                  alt="Sentire"
                  className="w-6 h-6"
                />
                <span className="font-bold text-foreground">Sentire</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Emotion-aware academic monitoring for modern education.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground text-center">
              © 2026 Sentire. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
