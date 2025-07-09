import { blogPosts } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-4xl py-12 md:py-20 animate-fade-in-up">
      <div className="space-y-4 text-center">
        <Badge variant="outline">Blog Post</Badge>
        <h1 className="text-4xl md:text-5xl font-bold font-headline">{post.title}</h1>
        <div className="flex items-center justify-center text-sm text-muted-foreground space-x-6">
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </div>

      <div className="my-8 rounded-lg overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full object-cover"
          data-ai-hint={post.imageHint}
        />
      </div>

      <div
        className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
