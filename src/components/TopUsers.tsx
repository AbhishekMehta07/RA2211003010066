import React from 'react';

interface User {
  id: number;
  name: string;
  posts: number;
  avatar: string;
}

const TopUsers: React.FC = () => {
  // Simulated API call to get top users
  const users: User[] = [
    { id: 1, name: 'John Doe', posts: 150, avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Jane Smith', posts: 120, avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Mike Johnson', posts: 100, avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, name: 'Sarah Williams', posts: 90, avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, name: 'Tom Brown', posts: 80, avatar: 'https://i.pravatar.cc/150?img=5' },
  ];

  return (
    <div className="bg-primary rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-secondary mb-6">Top Users</h2>
      <div className="space-y-4">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center p-4 bg-primary-light rounded-lg hover:bg-opacity-80 transition-colors"
          >
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full border-2 border-secondary"
                src={user.avatar}
                alt={user.name}
              />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-medium text-white">{user.name}</h3>
              <p className="text-gray-400">{user.posts} posts</p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-secondary text-white font-bold">
                {index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsers; 