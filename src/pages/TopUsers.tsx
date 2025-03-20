import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  postCount: number;
  avatar: string;
}

const TopUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Simulating API call with mock data
    const mockUsers: User[] = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      name: `User ${index + 1}`,
      postCount: Math.floor(Math.random() * 100) + 50, // Random number between 50-150
      avatar: `https://i.pravatar.cc/150?img=${index + 1}`,
    })).sort((a, b) => b.postCount - a.postCount);

    setUsers(mockUsers);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Top Users</h1>
      <div className="max-w-2xl mx-auto">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center bg-white rounded-lg shadow-md p-4 mb-4 transform transition-transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              {index < 3 && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              )}
            </div>
            <div className="ml-6 flex-grow">
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">Posts: {user.postCount}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Rank #{index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsers; 