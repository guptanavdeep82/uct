import { notFound } from "next/navigation";
import BlogDetail from "@/views/blog/BlogDetail";
import { fetchBlog, fetchBlogs } from "@/lib/content";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchBlog(slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt,
      images: post.og_image || post.image ? [post.og_image || post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const [post, posts] = await Promise.all([fetchBlog(slug), fetchBlogs()]);
  if (!post) notFound();
  return <BlogDetail post={post} posts={posts} />;
}
