import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TopUsers from './components/TopUsers';
import TrendingPosts from './components/TrendingPosts';
import Feed from './components/Feed';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-dark text-white">
        {/* Navigation */}
        <nav className="bg-primary border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl font-bold text-secondary">Social Analytics</span>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                      Top Users
                    </Link>
                    <Link to="/trending" className="text-gray-300 hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                      Trending Posts
                    </Link>
                    <Link to="/feed" className="text-gray-300 hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                      Feed
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Routes>
              <Route path="/" element={<TopUsers />} />
              <Route path="/trending" element={<TrendingPosts />} />
              <Route path="/feed" element={<Feed />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
