import React from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  comments: number;
  image: string;
}

const TrendingPosts: React.FC = () => {
  // Simulated API call to get trending posts
  const posts: Post[] = [
    {
      id: 1,
      title: 'Breaking News: AI Revolution',
      content: 'The latest developments in artificial intelligence are reshaping our world...',
      author: 'John Doe',
      comments: 150,
      image: 'https://picsum.photos/800/400?random=1',
    },
    {
      id: 2,
      title: 'Future of Web Development',
      content: "Exploring the latest trends in web development and what's coming next...",
      author: 'Jane Smith',
      comments: 120,
      image: 'https://picsum.photos/800/400?random=2',
    },
  ];

  return (
    <div className="bg-primary rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-secondary mb-6">Trending Posts</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-primary-light rounded-lg overflow-hidden hover:bg-opacity-80 transition-colors"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
              <p className="text-gray-400 mb-4">{post.content}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">By {post.author}</span>
                <div className="flex items-center text-secondary">
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
                  <span>{post.comments} comments</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts; 