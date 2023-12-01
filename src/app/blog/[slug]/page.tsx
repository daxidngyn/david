import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Mdx from "@/components/mdx";
import { getBlogPosts } from "@/lib/blog";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) return;

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? `https://davidngn.com${image}`
    : `https://davidngn.com/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://davidngn.com/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPost({ params }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) notFound();

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://davidngn.com${post.metadata.image}`
              : `https://davidngn.com/api/og?title=${post.metadata.title}`,
            url: `https://davidngn.com/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "David Nguyen",
            },
          }),
        }}
      />
      <h1 className="text-3xl font-bold">{post.metadata.title}</h1>
      <div className="mb-8 mt-2 grid grid-cols-[auto_1fr_auto] items-center text-sm">
        <div className="rounded-md bg-gray-200 px-2 py-1 tracking-tighter dark:bg-gray-800">
          {post.metadata.publishedAt}
        </div>
      </div>
      <article className="prose-quoteless prose prose-gray dark:prose-invert">
        <Mdx source={post.content} />
      </article>
    </section>
  );
}
