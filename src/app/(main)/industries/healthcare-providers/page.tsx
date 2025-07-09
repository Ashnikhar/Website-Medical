import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HealthcareProvidersPage() {
  return (
    <div className="animate-fade-in-up">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Solutions for Healthcare Providers</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/80">
            Augmenting clinical expertise with powerful AI and seamless workflows.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline">Empowering Modern Clinics and Hospitals</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For hospitals, clinics, and private practices, Adirya healthPro offers a suite of tools to enhance diagnostic capabilities, streamline patient management, and improve operational efficiency. Our platform integrates with existing EMRs to provide a unified view of patient data, enabling better, more coordinated care.
            </p>
            <Button asChild>
              <Link href="/contact">Request a Consultation <ArrowRight className="ml-2 h-5 w-5"/></Link>
            </Button>
          </div>
          <div>
            <Image 
              src={`https://placehold.co/600x400.png`}
              alt={`Solutions for healthcare providers`}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint={`doctor computer`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
