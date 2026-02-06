export default function Dashboard() {
  const mockData = {
    status: 'Active',
    plan: 'Pro',
    usage: 8420,
    limit: 10000,
    billing: '$399/month'
  };

  const usagePercent = (mockData.usage / mockData.limit) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        {/* Status Card */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Account Status</p>
              <p className="text-2xl font-bold">{mockData.status}</p>
            </div>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              {mockData.plan}
            </span>
          </div>
        </div>

        {/* Usage Card */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Usage</h2>
          <div className="mb-2">
            <div className="flex justify-between text-sm mb-1">
              <span>API Calls</span>
              <span>{mockData.usage.toLocaleString()} / {mockData.limit.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{width: `${usagePercent}%`}}
              />
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {(100 - usagePercent).toFixed(1)}% remaining
          </p>
        </div>

        {/* Billing Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Billing</h2>
          <p className="text-3xl font-bold text-gray-900">{mockData.billing}</p>
          <p className="text-sm text-gray-600 mt-1">Next billing: Feb 15, 2026</p>
          <div className="mt-4 space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Upgrade Plan
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              View Invoices
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
