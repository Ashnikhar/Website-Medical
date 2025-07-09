import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts } from '@/lib/mock-data';
import { CheckCircle, ArrowRight, PlayCircle, Building, HeartPulse, Microscope, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPostCard } from '@/components/blog/BlogPostCard';

const industries = [
  {
    slug: 'insurance',
    title: 'Insurance',
    icon: Building,
  },
  {
    slug: 'healthcare-providers',
    title: 'Healthcare Providers',
    icon: HeartPulse,
  },
  {
    slug: 'lifesciences',
    title: 'Life Sciences',
    icon: Microscope,
  },
  {
    slug: 'employees',
    title: 'Employees',
    icon: Users,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
              The Future of Healthcare, Today.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Adirya health provides innovative solutions that bridge the gap between patients and healthcare providers, ensuring seamless and efficient care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Image
              src="/healthcare.jpg" // Ensure this path is correct based on your project structure            
              alt="Healthcare professionals collaborating"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
              data-ai-hint="healthcare professionals"
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Industries We Serve</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer a comprehensive suite of digital health services designed to improve diagnostics and patient outcomes across various sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <Card key={industry.slug} className="text-center group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit group-hover:bg-primary transition-colors duration-300">
                    <industry.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <CardTitle className="font-headline mt-4">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="link" asChild className="mt-4">
                    <Link href={`/industries/${industry.slug}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-secondary animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
           <div>
            <Image
              src="/image3.jpg" // Replace with your actual image path
              alt="Patient using a tablet for a virtual consultation"
              width={600}
              height={450}
              className="rounded-lg shadow-xl"
              data-ai-hint="virtual consultation"
            />
          </div>
          <div className="space-y-8">
            <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Simple Steps to Better Care</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                Accessing world-class healthcare has never been easier.
                </p>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent-foreground mr-4 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg font-headline">1. Register Your Account</h3>
                  <p className="text-muted-foreground">Quickly sign up on our secure platform to get started.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent-foreground mr-4 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg font-headline">2. Upload Your Reports</h3>
                  <p className="text-muted-foreground">Easily upload your medical images and reports for our specialists to review.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent-foreground mr-4 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg font-headline">3. Receive Expert Analysis</h3>
                  <p className="text-muted-foreground">Our team of experts will analyze your data and provide a comprehensive report.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* From The Blog Section */}
      <section className="py-16 md:py-24 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">From Our Blog</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Stay informed with the latest news, trends, and insights in healthcare and technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
           <div className="text-center mt-12">
             <Button variant="outline" asChild>
                <Link href="/blog">View All Posts <ArrowRight className="ml-2 h-4 w-4" /></Link>
             </Button>
           </div>
        </div>
      </section>
    </div>
  );
}
