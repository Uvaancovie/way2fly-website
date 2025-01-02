import React from "react";
import { createClient } from "next-sanity";
import Navbar from "../components/Navbar"; // Adjust the path to your Navbar
import "../globals.css"; // Ensure Tailwind & global styles are imported

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true, // Set to false if you need real-time data
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
  const posts: {
    _id: string;
    title: string;
    slug: { current: string };
    imageUrl?: string;
    publishedAt?: string;
  }[] = await client.fetch(blogQuery);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar at the top */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-gray-900 border border-white/10 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                {post.publishedAt && (
                  <p className="text-gray-400 text-sm mb-4">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                )}
                <a
                  href={`/blog/${post.slug.current}`}
                  className="text-purple-400 hover:text-purple-300 transition"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
