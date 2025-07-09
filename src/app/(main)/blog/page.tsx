import { blogPosts } from '@/lib/mock-data';
import { BlogPostCard } from '@/components/blog/BlogPostCard';

export default function BlogPage() {
  return (
    <div className="animate-fade-in-up">
      <section className="py-20 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Adirya healthPro Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, news, and stories from the forefront of healthcare technology.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <BlogPostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
