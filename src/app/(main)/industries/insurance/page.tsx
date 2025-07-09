import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function InsurancePage() {
  return (
    <div className="animate-fade-in-up">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Solutions for Insurance</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/80">
            Empowering insurers with AI-driven insights for smarter, faster decisions.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline">Transforming the Insurance Landscape</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Adirya healthPro provides insurance companies with powerful tools to automate risk assessment, streamline claims processing, and detect fraud. Our platform analyzes complex medical data to provide clear, actionable insights, reducing costs and improving policyholder satisfaction.
            </p>
            <Button asChild>
              <Link href="/contact">Get a Demo <ArrowRight className="ml-2 h-5 w-5"/></Link>
            </Button>
          </div>
          <div>
            <Image 
              src={`https://placehold.co/600x400.png`}
              alt={`Insurance solutions`}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint={`insurance technology`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
