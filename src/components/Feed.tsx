import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  content: string;
  author: string;
  avatar: string;
  likes: number;
  comments: number;
  timestamp: string;
  image?: string;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  // Simulated API call to get feed posts
  const fetchPosts = () => {
    const newPosts: Post[] = [
      {
        id: 1,
        content: "Just launched a new AI-powered analytics dashboard! 🚀",
        author: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=1",
        likes: 245,
        comments: 89,
        timestamp: "2 minutes ago",
        image: "https://picsum.photos/800/400?random=3"
      },
      {
        id: 2,
        content: "Excited to share our latest research on social media trends! 📊",
        author: "Jane Smith",
        avatar: "https://i.pravatar.cc/150?img=2",
        likes: 189,
        comments: 45,
        timestamp: "5 minutes ago",
        image: "https://picsum.photos/800/400?random=4"
      },
      {
        id: 3,
        content: "New feature alert: Real-time sentiment analysis is now live! 🎉",
        author: "Mike Johnson",
        avatar: "https://i.pravatar.cc/150?img=3",
        likes: 156,
        comments: 32,
        timestamp: "8 minutes ago"
      }
    ];
    setPosts(newPosts);
  };

  useEffect(() => {
    fetchPosts();
    // Update feed every 15 seconds
    const interval = setInterval(fetchPosts, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-secondary mb-6">Live Feed</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-primary-light rounded-lg p-6 hover:bg-opacity-80 transition-colors"
          >
            <div className="flex items-center mb-4">
              <img
                src={post.avatar}
                alt={post.author}
                className="h-10 w-10 rounded-full border-2 border-secondary"
              />
              <div className="ml-3">
                <h3 className="text-white font-medium">{post.author}</h3>
                <p className="text-gray-400 text-sm">{post.timestamp}</p>
              </div>
            </div>
            
            <p className="text-white mb-4">{post.content}</p>
            
            {post.image && (
              <img
                src={post.image}
                alt="Post content"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-400 hover:text-secondary transition-colors">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>{post.likes}</span>
              </button>
              
              <button className="flex items-center text-gray-400 hover:text-secondary transition-colors">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>{post.comments}</span>
              </button>
              
              <button className="flex items-center text-gray-400 hover:text-secondary transition-colors">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed; 