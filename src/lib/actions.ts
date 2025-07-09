'use server';

import { blogPosts } from '@/lib/mock-data';
import type { BlogPost } from '@/lib/types';

// Using 'let' for blogPosts in mock-data allows for in-memory modification.
// These are simple stubs for demonstration and would be replaced by a database in a real application.

export async function savePost(formData: FormData) {
  const id = formData.get('id');
  const postData = {
    title: formData.get('title') as string,
    author: formData.get('author') as string,
    excerpt: formData.get('excerpt') as string,
    content: formData.get('content') as string,
    slug: (formData.get('slug') as string).replace(/\s+/g, '-').toLowerCase(),
  };

  if (id) {
    const postIndex = blogPosts.findIndex(p => p.id === parseInt(id.toString(), 10));
    if (postIndex > -1) {
      blogPosts[postIndex] = { ...blogPosts[postIndex], ...postData };
    }
  } else {
    const newPost: BlogPost = {
      ...postData,
      id: Math.max(...blogPosts.map(p => p.id)) + 1,
      date: new Date().toISOString(),
      imageUrl: 'https://placehold.co/800x600.png',
      imageHint: 'blog post',
      views: 0,
    };
    blogPosts.push(newPost);
  }
}

export async function deletePost(id: number) {
  const postIndex = blogPosts.findIndex(p => p.id === id);
  if (postIndex > -1) {
    blogPosts.splice(postIndex, 1);
  }
}
