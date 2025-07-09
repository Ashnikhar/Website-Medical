import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';

const stories = [
  {
    client: 'Global Health Insurers',
    outcome: 'Reduced claim processing time by 40%',
    quote: 'Adirya healthPro\'s AI platform transformed our underwriting process, allowing us to serve our clients faster and more accurately than ever before.',
    image: 'https://placehold.co/400x300.png',
    imageHint: 'business meeting'
  },
  {
    client: 'Metro General Hospital',
    outcome: 'Improved diagnostic accuracy in radiology by 15%',
    quote: 'The integration of the Diagnostic AI Suite has been a game-changer for our radiology department. It\'s like giving every radiologist a super-powered assistant.',
    image: 'https://placehold.co/400x300.png',
    imageHint: 'hospital hallway'
  },
    {
    client: 'Innovate Pharma',
    outcome: 'Accelerated clinical trial data analysis by 50%',
    quote: 'We can now analyze trial data in a fraction of the time, helping us bring life-saving treatments to market faster. Adirya healthPro is an invaluable partner.',
    image: 'https://placehold.co/400x300.png',
    imageHint: 'pharmaceutical lab'
  }
];

export default function SuccessStoriesPage() {
  return (
    <div className="animate-fade-in-up">
      <section className="py-20 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Customer Success Stories</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we're making a real-world impact across the healthcare industry.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div key={story.client} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <Card className="flex flex-col h-full">
                  <Image
                    src={story.image}
                    alt={story.client}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                    data-ai-hint={story.imageHint}
                  />
                  <CardContent className="pt-6 flex-grow">
                    <h2 className="text-2xl font-bold font-headline text-primary">{story.outcome}</h2>
                    <blockquote className="mt-4 italic border-l-4 pl-4 text-muted-foreground">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                  <CardFooter>
                    <p className="font-semibold">{story.client}</p>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
