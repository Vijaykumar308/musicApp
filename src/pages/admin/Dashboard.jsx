const Dashboard = () => {
  return (
    <div className="pt-16"> {/* Add top padding to account for fixed header */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Dashboard</h2>
          <p className="text-gray-300">Here's a summary of your music production</p>
        </div>
        
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-2">Total Projects</h3>
            <p className="text-3xl font-bold text-purple-400">24</p>
            <p className="text-sm text-gray-400 mt-1">+2 from last month</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-2">Active Clients</h3>
            <p className="text-3xl font-bold text-purple-400">12</p>
            <p className="text-sm text-gray-400 mt-1">+3 new this week</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-2">Completed</h3>
            <p className="text-3xl font-bold text-green-400">18</p>
            <p className="text-sm text-gray-400 mt-1">75% completion rate</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-green-400">$12,450</p>
            <p className="text-sm text-gray-400 mt-1">+15% from last month</p>
          </div>
        </div>
        
        {/* Recent Activity and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="flex-1">
                  <span className="text-gray-300">New project uploaded: "Summer Vibes"</span>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="flex-1">
                  <span className="text-gray-300">Project completed: "Electronic Dreams"</span>
                  <p className="text-xs text-gray-400">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="flex-1">
                  <span className="text-gray-300">Client feedback received</span>
                  <p className="text-xs text-gray-400">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="flex-1">
                  <span className="text-gray-300">Payment received from client</span>
                  <p className="text-xs text-gray-400">2 days ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 gap-3">
              <button className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-colors">
                <span>Upload New Track</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-lg transition-colors">
                <span>Add Featured Project</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-lg transition-colors">
                <span>View Analytics</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-lg transition-colors">
                <span>Manage Clients</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;