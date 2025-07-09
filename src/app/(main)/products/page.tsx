import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    title: 'Diagnostic AI Suite',
    description: 'AI-powered image analysis for Radiology, Cardiology, and more, enabling faster and more accurate diagnoses.',
    features: ['99.5% Accuracy in Image Analysis', 'Rapid Scan Processing', 'Multi-modal Support (X-ray, CT, MRI)'],
    image: '/radiology.jpg',
    imageHint: 'AI diagnostics',
  },
  {
    title: 'Telehealth Platform',
    description: 'A secure, HIPAA-compliant, and feature-rich platform for virtual patient consultations and remote care.',
    features: ['HD Video & Audio Calls', 'Secure E-Prescribing', 'Seamless Patient Record Integration'],
    image: 'https://placehold.co/500x300.png',
    imageHint: 'telehealth call',
  },
  {
    title: 'Clinical Trial Accelerator',
    description: 'An analytics platform designed to streamline and accelerate the clinical trial process from recruitment to data analysis.',
    features: ['AI-Powered Patient Cohort Selection', 'Real-time Trial Monitoring', 'Advanced Data Analytics & Reporting'],
    image: 'https://placehold.co/500x300.png',
    imageHint: 'clinical trial data',
  },
];

export default function ProductsPage() {
  return (
    <div className="animate-fade-in-up">
      <section className="py-20 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Innovative Products</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge solutions designed to revolutionize healthcare delivery and research.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container space-y-20">
          {products.map((product, index) => (
            <div key={product.title} className={`grid md:grid-cols-2 gap-12 items-center animate-fade-in-up ${index % 2 !== 0 ? 'md:grid-flow-row-dense md:[&>*:last-child]:col-start-1' : ''}`} style={{ animationDelay: `${index * 200}ms` }}>
               <div className={`${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-xl"
                  data-ai-hint={product.imageHint}
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-headline">{product.title}</h2>
                <p className="text-muted-foreground text-lg">{product.description}</p>
                <ul className="space-y-3">
                  {product.features.map(feature => (
                     <li key={feature} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0" />
                        <span>{feature}</span>
                     </li>
                  ))}
                </ul>
                <Button asChild>
                    <Link href="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
