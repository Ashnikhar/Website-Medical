import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="animate-fade-in-up">
      <section className="py-20 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">About Adirya healthPro</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Pioneering the future of healthcare technology with passion and innovation.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our mission is to bridge the gaps in healthcare delivery by leveraging cutting-edge technology. We empower providers with advanced tools for diagnostics and patient management, and provide patients with accessible, high-quality care, anytime, anywhere.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">Enhance Diagnostic Accuracy</h3>
                  <p className="text-muted-foreground text-sm">Utilizing AI to improve the precision of medical analysis.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">Improve Patient Access</h3>
                  <p className="text-muted-foreground text-sm">Making specialized healthcare services available to everyone.</p>
                </div>
              </li>
               <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">Streamline Clinical Workflows</h3>
                  <p className="text-muted-foreground text-sm">Reducing administrative burden for healthcare professionals.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <Image 
              src="/mission.jpg"
              alt="Our team collaborating"
              width={600}
              height={450}
              className="rounded-lg shadow-lg"
              data-ai-hint="team collaboration"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
