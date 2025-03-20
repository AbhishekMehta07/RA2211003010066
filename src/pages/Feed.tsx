import React, { useState, useEffect, useCallback } from 'react';

interface Post {
  id: number;
  content: string;
  author: string;
  authorAvatar: string;
  image: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const generateNewPost = useCallback((): Post => {
    const id = Date.now();
    return {
      id,
      content: `This is a new post ${id} with some interesting content!`,
      author: `User ${Math.floor(Math.random() * 100)}`,
      authorAvatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      image: `https://picsum.photos/seed/${id}/800/600`,
      likes: Math.floor(Math.random() * 1000),
      comments: Math.floor(Math.random() * 100),
      timestamp: new Date().toISOString(),
    };
  }, []);

  // Initial posts
  useEffect(() => {
    const initialPosts = Array.from({ length: 5 }, () => generateNewPost());
    setPosts(initialPosts);
  }, [generateNewPost]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newPost = generateNewPost();
      setPosts(prevPosts => [newPost, ...prevPosts.slice(0, 19)]); // Keep only last 20 posts
    }, 15000); // New post every 15 seconds

    return () => clearInterval(interval);
  }, [generateNewPost]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Feed</h1>
      <div className="max-w-2xl mx-auto">
        {posts.map(post => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="p-4">
              <div className="flex items-center mb-4">
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-3">
                  <h3 className="text-gray-800 font-semibold">{post.author}</h3>
                  <p className="text-gray-500 text-sm">
                    {new Date(post.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
              <p className="text-gray-800 mb-4">{post.content}</p>
              <img
                src={post.image}
                alt="Post content"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center justify-between text-gray-500">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 hover:text-blue-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-blue-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span>{post.comments}</span>
                  </button>
                </div>
                <button className="text-blue-600 hover:text-blue-800">
                  Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed; 