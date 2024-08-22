import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface ContentItem {
  type: "paragraph" | "subtitle" | "quote" | "image";
  text?: string;
  src?: string;
  alt?: string;
}

interface BlogPostData {
  id: string;
  title: string;
  coverImage: string;
  date: string;
  content: ContentItem[];
}

const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [postData, setPostData] = useState<BlogPostData | null>(null);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        // Assuming you have a fixed number of posts or you can dynamically find them
        const postFiles = ["post1.json", "post2.json", "post3.json"]; // List of all posts

        for (const file of postFiles) {
          const response = await fetch(`/posts/${file}`);
          const data: BlogPostData = await response.json();

          if (data.id === postId) {
            setPostData(data);
            break;
          }
        }
      } catch (error) {
        console.error("Error fetching the blog post data", error);
      }
    };

    fetchAllPosts();
  }, [postId]);

  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="relative mb-8">
        <img
          src={postData.coverImage}
          alt={postData.title}
          className="w-full h-60 object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-50 text-white p-4">
          <h1 className="text-2xl font-bold">{postData.title}</h1>
          <p>{postData.date}</p>
        </div>
      </div>
      <div>
        {postData.content.map((item, index) => (
          <div key={index} className="mb-6">
            {item.type === "paragraph" && (
              <p className="text-gray-700 text-base">{item.text}</p>
            )}
            {item.type === "subtitle" && (
              <h2 className="text-xl font-semibold text-gray-800">{item.text}</h2>
            )}
            {item.type === "quote" && (
              <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-600">
                <p>{item.text}</p>
              </blockquote>
            )}
            {item.type === "image" && item.src && (
              <div className="my-6">
                <img
                  src={item.src}
                  alt={item.alt || "Image"}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
                {item.text && (
                  <p className="text-gray-500 text-sm text-center mt-2">{item.text}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;