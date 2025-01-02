import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react"; // <-- For rendering the body array

// Create the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: "2023-01-01",
});

// 1. Generate static params for each post (for SSG)
export async function generateStaticParams() {
  const query = `*[_type == "post"]{ slug }`;
  const slugs = await client.fetch(query);

  return slugs.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }));
}

// 2. Dynamic route handler for each post
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  // If your route isn't a promise, you can destructure params directly:
  const postQuery = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
    "imageUrl": mainImage.asset->url,
  }`;

  // Fetch the single post
  const post = await client.fetch(postQuery, { slug: params.slug });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      {/* Render the main image if available */}
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-60 object-cover rounded-lg my-4"
        />
      )}

      {/* 3. Use PortableText to render the `body` array */}
      <div className="prose max-w-none mt-6">
        <PortableText value={post.body} />
      </div>
    </div>
  );
}
