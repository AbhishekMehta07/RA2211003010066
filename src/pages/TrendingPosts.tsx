import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
  commentCount: number;
  image: string;
  author: string;
  authorAvatar: string;
  timestamp: string;
}

const TrendingPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulating API call with mock data
    const mockPosts: Post[] = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      title: `Trending Post ${index + 1}`,
      content: `This is the content of trending post ${index + 1}. It's getting a lot of attention!`,
      commentCount: Math.floor(Math.random() * 1000) + 500, // Random number between 500-1500
      image: `https://picsum.photos/seed/${index + 1}/600/400`,
      author: `User ${index + 1}`,
      authorAvatar: `https://i.pravatar.cc/150?img=${index + 10}`,
      timestamp: new Date(Date.now() - Math.random() * 86400000).toISOString(), // Random time in last 24 hours
    }));

    // Sort by comment count and get posts with highest comments
    const threshold = mockPosts.sort((a, b) => b.commentCount - a.commentCount)[2].commentCount;
    const trendingPosts = mockPosts.filter(post => post.commentCount >= threshold);

    setPosts(trendingPosts);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Trending Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <h3 className="text-gray-800 font-semibold">{post.author}</h3>
                  <p className="text-gray-500 text-sm">
                    {new Date(post.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.content}</p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  {post.commentCount.toLocaleString()} comments
                </span>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts; 