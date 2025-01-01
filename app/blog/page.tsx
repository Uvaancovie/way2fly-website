import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // Set to false for live updates
  apiVersion: "2023-01-01",
});

const blogQuery = `*[_type == "post"]{
  _id,
  title,
  slug,
  "imageUrl": mainImage.asset->url,
  publishedAt,
}`;

export default async function BlogPage() {
  const posts = await client.fetch(blogQuery);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: { _id: string; title: string; slug: { current: string }; imageUrl: string; publishedAt: string }) => (
          <div key={post._id} className="border rounded-lg p-4">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
            <a href={`/blog/${post.slug.current}`} className="text-blue-500">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
