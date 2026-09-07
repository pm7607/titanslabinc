import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blogPosts";
import CTASection from "@/components/sections/CTASection";
import { Clock, Calendar, ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return { title: "Article Not Found | Titanslab Inc." };

  return {
    title: `${post.title} | Titanslab Engineering Blog`,
    description: post.excerpt,
  };
}

export default async function SingleBlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-12 space-y-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs text-purple-600 hover:text-purple-700 font-bold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Articles
        </Link>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
            <span className="px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-700 font-bold border border-purple-200">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-purple-600" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-purple-600" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="pt-2 text-xs text-slate-500 font-semibold">
            Written by <span className="text-slate-900">{post.author}</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose max-w-none pt-8 border-t border-slate-200 text-sm text-slate-700 leading-relaxed space-y-4 font-normal">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return <h3 key={idx} className="text-xl font-extrabold text-slate-900 pt-4 pb-1">{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.startsWith('- ')) {
              return (
                <ul key={idx} className="list-disc pl-5 space-y-1 text-slate-700">
                  {paragraph.split('\n').map((item, itemIdx) => (
                    <li key={itemIdx}>{item.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            }
            return <p key={idx}>{paragraph}</p>;
          })}
        </div>
      </div>

      <CTASection />
    </article>
  );
}
