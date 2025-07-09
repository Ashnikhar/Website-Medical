import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function LifeSciencesPage() {
  return (
    <div className="animate-fade-in-up">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Solutions for Life Sciences</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/80">
            Accelerating research and clinical trials with powerful data analytics.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline">Powering Pharmaceutical Innovation</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The life sciences sector relies on data. Adirya healthPro helps pharmaceutical companies and research organizations to accelerate drug discovery and streamline clinical trials. Our platform offers advanced analytics to identify patient cohorts, monitor trial progress, and uncover novel insights from complex datasets.
            </p>
            <Button asChild>
              <Link href="/contact">Partner With Us <ArrowRight className="ml-2 h-5 w-5"/></Link>
            </Button>
          </div>
          <div>
            <Image 
              src={`https://placehold.co/600x400.png`}
              alt={`Life sciences solutions`}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint={`laboratory research`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
