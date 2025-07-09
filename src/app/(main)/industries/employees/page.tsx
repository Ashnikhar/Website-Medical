import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function EmployeesPage() {
  return (
    <div className="animate-fade-in-up">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Solutions for Employees</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/80">
            Promoting wellness and providing accessible care for your workforce.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline">Investing in Your Team's Health</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Adirya healthPro offers corporate wellness solutions that provide employees with convenient access to telehealth services, mental health support, and wellness tracking. A healthier workforce is a more productive workforce. Show your team you care by investing in their well-being.
            </p>
            <Button asChild>
              <Link href="/contact">Explore Corporate Plans <ArrowRight className="ml-2 h-5 w-5"/></Link>
            </Button>
          </div>
          <div>
            <Image 
              src={`https://placehold.co/600x400.png`}
              alt={`Employee wellness solutions`}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint={`office wellness`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
