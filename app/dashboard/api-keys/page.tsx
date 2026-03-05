'use client';
import { useState } from 'react';
import Link from 'next/link';

const initialKeys = [
  { id: 'key_001', name: 'Production Key', prefix: 'gar_live_', key: 'gar_live_xk9mP...3rQw', created: '2024-01-15', lastUsed: '2 hours ago', status: 'Active' },
  { id: 'key_002', name: 'Development Key', prefix: 'gar_test_', key: 'gar_test_7nLpA...8vBc', created: '2024-02-20', lastUsed: '1 day ago', status: 'Active' },
  { id: 'key_003', name: 'CI/CD Pipeline', prefix: 'gar_live_', key: 'gar_live_mR2oN...5tKj', created: '2024-03-05', lastUsed: '5 days ago', status: 'Active' },
];

export default function ApiKeysPage() {
  const [keys, setKeys] = useState(initialKeys);
  const [showCreate, setShowCreate] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [newKey, setNewKey] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCreate = () => {
    if (!newKeyName.trim()) return;
    const generated = `gar_live_${Math.random().toString(36).slice(2, 10)}...${Math.random().toString(36).slice(2, 6)}`;
    const newEntry = {
      id: `key_${Date.now()}`,
      name: newKeyName,
      prefix: 'gar_live_',
      key: generated,
      created: new Date().toISOString().slice(0, 10),
      lastUsed: 'Never',
      status: 'Active',
    };
    setKeys([...keys, newEntry]);
    setNewKey(generated);
    setNewKeyName('');
    setShowCreate(false);
  };

  const handleRevoke = (id: string) => {
    setKeys(keys.filter((k) => k.id !== id));
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">API Keys</h1>
            <p className="text-gray-500 mt-1">Manage your API keys for programmatic access</p>
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            + Generate New Key
          </button>
        </div>

        {/* Security Warning */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 flex gap-3">
          <span className="text-yellow-600 text-lg">⚠️</span>
          <p className="text-sm text-yellow-800">
            API keys grant full access to your account. Never share them publicly or commit them to version control. Rotate keys regularly.
          </p>
        </div>

        {/* New Key Revealed */}
        {newKey && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
            <p className="text-sm font-semibold text-green-800 mb-2">✓ New API key created — copy it now, it won\'t be shown again.</p>
            <div className="flex items-center gap-3 bg-white rounded-lg border border-green-300 px-4 py-2">
              <code className="text-sm font-mono text-gray-800 flex-1">{newKey}</code>
              <button
                onClick={() => handleCopy(newKey, 'new')}
                className="text-xs text-indigo-500 hover:text-indigo-700 font-medium"
              >
                {copied === 'new' ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )}

        {/* Create Modal */}
        {showCreate && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
              <h2 className="text-lg font-semibold mb-4">Generate New API Key</h2>
              <label className="block text-sm text-gray-600 mb-2">Key Name</label>
              <input
                type="text"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                placeholder="e.g. Production Key, CI/CD Pipeline"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mb-4"
              />
              <div className="flex gap-3 justify-end">
                <button onClick={() => setShowCreate(false)} className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">Cancel</button>
                <button onClick={handleCreate} className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700">
                  Generate
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Keys Table */}
        <div className="bg-white rounded-xl shadow">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-500 uppercase tracking-wide border-b border-gray-200">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Key</th>
                <th className="px-6 py-4">Created</th>
                <th className="px-6 py-4">Last Used</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {keys.map((k) => (
                <tr key={k.id}>
                  <td className="px-6 py-4 font-medium">{k.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <code className="text-xs font-mono text-gray-600 bg-gray-100 px-2 py-1 rounded">{k.key}</code>
                      <button
                        onClick={() => handleCopy(k.key, k.id)}
                        className="text-xs text-indigo-500 hover:text-indigo-700"
                      >
                        {copied === k.id ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{k.created}</td>
                  <td className="px-6 py-4 text-gray-500">{k.lastUsed}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">{k.status}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleRevoke(k.id)}
                      className="text-xs text-red-500 hover:text-red-700 font-medium"
                    >
                      Revoke
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {keys.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <p className="text-lg">🔑</p>
              <p className="mt-2 text-sm">No API keys yet. Generate one to get started.</p>
            </div>
          )}
        </div>

        <div className="mt-6">
          <Link href="/dashboard" className="text-sm text-indigo-500 hover:text-indigo-700">← Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
