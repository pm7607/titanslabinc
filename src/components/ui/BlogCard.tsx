import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/10 flex flex-col justify-between shadow-sm">
      {/* Header Visual Gradient */}
      <div className="relative h-40 w-full bg-gradient-to-r from-purple-100 via-slate-50 to-purple-50 p-5 flex flex-col justify-between border-b border-slate-200">
        <div className="flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-white text-purple-700 border border-slate-200 shadow-xs">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-[10px] text-slate-600 font-medium">
            <Clock className="w-3 h-3 text-purple-600" />
            {post.readTime}
          </span>
        </div>

        <div className="z-10">
          <span className="text-[11px] text-slate-600 font-mono flex items-center gap-1 font-semibold">
            <Calendar className="w-3 h-3 text-purple-600" />
            {post.date}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors mb-2 line-clamp-2 leading-snug">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
          <span className="text-slate-500">{post.author}</span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-purple-600 hover:text-purple-700 flex items-center gap-1 transition-colors"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
