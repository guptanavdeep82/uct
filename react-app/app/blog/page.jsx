import Blog from "@/views/blog/Blog";
import { pageMetadata } from "@/data/seo";
import { fetchBlogs } from "@/lib/content";

export const metadata = pageMetadata("/blog");

export default async function BlogPage() {
  const posts = await fetchBlogs();
  return <Blog posts={posts} />;
}
