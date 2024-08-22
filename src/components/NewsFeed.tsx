import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface ContentItem {
  type: string;
  text?: string;
  src?: string;
  alt?: string;
}

interface Post {
  id: string;
  title: string;
  date: string;
  content: ContentItem[];
  coverImage?: string;
}

const NewsFeed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [postsToShow, setPostsToShow] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postFiles = ['post1.json', 'post2.json', 'post3.json']; // Ensure these filenames match your actual files
        const allPosts: Post[] = await Promise.all(
          postFiles.map(async (file) => {
            const response = await axios.get(`${process.env.PUBLIC_URL}/posts/${file}`);
            return response.data;
          })
        );

        allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPosts(allPosts);
        setVisiblePosts(allPosts.slice(0, postsToShow));
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
  }, [postsToShow]);

  const loadMorePosts = () => {
    setPostsToShow(prev => prev + 5);
    setVisiblePosts(posts.slice(0, postsToShow + 5));
  };

  const renderContent = (content: ContentItem[]) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'paragraph':
          return <p key={index}>{item.text}</p>;
        case 'subtitle':
          return <h2 key={index}>{item.text}</h2>;
        case 'quote':
          return <blockquote key={index}>{item.text}</blockquote>;
        case 'image':
          return (
            <div key={index}>
              <img src={item.src} alt={item.alt} style={{ width: '100%' }} />
              <p>{item.text}</p>
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visiblePosts.slice(0, 1).map((post, idx) => (
          <div key={idx} className="md:col-span-2 bg-white/5 border border-white/25 rounded-lg p-10 cursor-pointer">
            <Link to={`/news/${post.id}`}>
              {post.coverImage && (
                <img src={post.coverImage} alt={post.title} className="w-full h-auto mb-4 rounded-t-lg object-cover" />
              )}
              <h1 className="text-xl md:text-3xl uppercase tracking-wider font-semibold mb-2 text-white">{post.title}</h1>
              <p className="text-white/25 text-xs mb-4">{new Date(post.date).toLocaleDateString()}</p>
              <p className="text-white/50">{post.content[0]?.text?.slice(0, 250) || 'No content available'}...</p>
            </Link>
          </div>
        ))}
        {visiblePosts.slice(1).map((post, idx) => (
          <div key={idx} className="col-span-1 bg-white/5 border border-white/25 rounded-lg p-10 cursor-pointer">
            <Link to={`/news/${post.id}`}>
              {post.coverImage && (
                <img src={post.coverImage} alt={post.title} className="w-full h-auto mb-4 rounded-t-lg object-cover" />
              )}
              <h2 className="text-xl uppercase tracking-wider font-semibold mb-2 text-white">{post.title}</h2>
              <p className="text-white/25 text-xs mb-4">{new Date(post.date).toLocaleDateString()}</p>
              {/* Safely accessing and slicing the text */}
              <p className="text-white/50">{post.content[0]?.text?.slice(0, 150) || 'No content available'}...</p>
            </Link>
          </div>
        ))}
      </div>
      {posts.length > visiblePosts.length && (
        <div className="text-center mt-8">
          <button onClick={loadMorePosts} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsFeed;