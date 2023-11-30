import Mdx from "@/components/mdx";
import { getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";

export default async function BlogPost({ params }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) notFound();

  return (
    <section>
      <article className="prose dark:prose-invert">
        <Mdx source={post.content} />
      </article>
    </section>
  );
}
