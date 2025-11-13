import React, { useState } from 'react';

export default function MarketplaceTable({ listings, onSelect }) {
  const [query, setQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const statuses = ['All', 'Active', 'Pending', 'Shipped', 'Delivered'];

  const filtered = listings.filter((l) => {
    if (filterStatus !== 'All' && l.status !== filterStatus) return false;
    if (!query) return true;
    const q = query.toLowerCase();
    return l.id.toLowerCase().includes(q) || l.title.toLowerCase().includes(q) || l.location.toLowerCase().includes(q);
  });

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Marketplace</h2>
        <div className="flex items-center gap-3">
          <input className="border px-3 py-2 rounded-md text-sm w-64" placeholder="Search id, title, location..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <select className="border px-3 py-2 rounded-md text-sm" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <button className="bg-sidebar text-white px-3 py-2 rounded-md text-sm">Export</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-sidebar">
              <th className="py-2">ID</th>
              <th className="py-2">Title</th>
              <th className="py-2">Location</th>
              <th className="py-2">Created</th>
              <th className="py-2">Weight</th>
              <th className="py-2">Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.id} className="border-t hover:bg-gray-50 cursor-pointer" onClick={() => onSelect(row)}>
                <td className="py-3">{row.id}</td>
                <td className="py-3">{row.title}</td>
                <td className="py-3">{row.location}</td>
                <td className="py-3">{row.createdAt}</td>
                <td className="py-3">{row.weight}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded text-xs ${row.status === 'Active' ? 'bg-green-100 text-green-800' : row.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : row.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'}`}>{row.status}</span>
                </td>
                <td className="py-3">
                  <div className="flex gap-2">
                    <button className="px-3 py-1 border rounded text-sm">View</button>
                    <button className="px-3 py-1 border rounded text-sm">Edit</button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="py-6 text-center text-gray-500">No listings found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
