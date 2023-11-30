import { GeistMono } from "geist/font/mono";
import Link from "next/link";

import { getBlogPosts } from "@/lib/blog";
import InfoCard from "@/components/info-card";

export default function BlogPage() {
  const blogPosts = getBlogPosts();

  return (
    <main className={`${GeistMono.className} space-y-8 md:space-y-12`}>
      <InfoCard id="blog/readme" title="davidnguyen / blog / README.md">
        <h1 className="text-3xl font-bold md:text-4xl">Blog</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 md:text-xl">
          A place for me to share the things I{"'"}ve learnt or find
          interesting.
        </p>
      </InfoCard>

      <section className="mt-8">
        {blogPosts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <BlogCard
              key={post.metadata.title}
              slug={post.slug}
              metadata={post.metadata}
            />
          ))}
      </section>
    </main>
  );
}

const BlogCard = ({
  slug,
  metadata,
}: {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
  };
}) => {
  return (
    <article className="w-full rounded-lg border px-4 py-6 shadow-sm dark:border-gray-700">
      <Link
        key={slug}
        className="flex flex-col space-y-1"
        href={`/blog/${slug}`}
      >
        <div className="flex w-full flex-col">
          <p className="text-lg font-medium md:text-xl">{metadata.title}</p>
          <span className="text-sm leading-6 text-gray-700 dark:text-gray-300">
            {metadata.publishedAt}
          </span>

          <p className="mt-2 dark:text-gray-50">{metadata.summary}</p>
        </div>
      </Link>
    </article>
  );
};
