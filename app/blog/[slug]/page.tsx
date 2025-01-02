// app/blog/[slug]/page.tsx

import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: "2023-01-01",
});

export default async function BlogPostPage({
  params,
}: {
  // <-- Note that params is a Promise
  params: Promise<{ slug: string }>;
}) {
  // We must await the promise to get the actual slug
  const { slug } = await params;

  const postQuery = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
    "imageUrl": mainImage.asset->url
  }`;

  // Now we can safely use `slug`
  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-60 object-cover rounded-lg my-4"
        />
      )}
      {/* If you want to render Portable Text from `body`, add a PortableText component here */}
    </div>
  );
}
