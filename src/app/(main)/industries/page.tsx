import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Building, HeartPulse, Microscope, Users } from 'lucide-react';
import Link from 'next/link';

const industries = [
  {
    slug: 'insurance',
    title: 'Insurance',
    description: 'Streamlining claims and underwriting with intelligent data analysis.',
    icon: Building
  },
  {
    slug: 'healthcare-providers',
    title: 'Healthcare Providers',
    description: 'Enhancing diagnostics and patient management for hospitals and clinics.',
    icon: HeartPulse
  },
  {
    slug: 'lifesciences',
    title: 'Life Sciences',
    description: 'Accelerating research and development with advanced analytics.',
    icon: Microscope
  },
  {
    slug: 'employees',
    title: 'Employees',
    description: 'Promoting wellness and providing accessible care for workforces.',
    icon: Users
  },
];

export default function IndustriesPage() {
  return (
    <div className="animate-fade-in-up">
      <section className="py-20 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Industries We Serve</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide tailored solutions to meet the unique challenges of different sectors within the healthcare ecosystem.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={industry.slug} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <Link href={`/industries/${industry.slug}`} className="group">
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <industry.icon className="h-10 w-10 text-primary" />
                           <CardTitle className="font-headline text-2xl">{industry.title}</CardTitle>
                        </div>
                        <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{industry.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
