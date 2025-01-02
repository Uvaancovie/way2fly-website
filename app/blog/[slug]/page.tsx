import { createClient } from "next-sanity";

// Initialize the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: "2023-01-01",
});

// Generate static parameters for each blog post
export async function generateStaticParams() {
  const query = `*[_type == "post"]{ slug }`;
  const slugs = await client.fetch(query);

  return slugs.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }));
}

// Blog post page component
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const postQuery = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
    "imageUrl": mainImage.asset->url,
  }`;

  const post = await client.fetch(postQuery, { slug: params.slug });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-60 object-cover rounded-lg my-4"
        />
      )}
      <div className="prose max-w-none">
        {/* Render body content here */}
        {post.body}
      </div>
    </div>
  );
}
