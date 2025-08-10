import React from 'react';
import { Link } from 'react-router-dom';

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Company</h1>
        <p className="text-xl text-slate-400 mb-8">About Darvin Cyber Defense</p>
        <Link to="/" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
