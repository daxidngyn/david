import { getBlogPosts } from "@/lib/blog";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `https://davidngn.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/projects", "/blog"].map((route) => ({
    url: `https://davidngn.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
