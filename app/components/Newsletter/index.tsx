'use client'
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // TODO: Implement newsletter subscription API
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API call
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="ایمیل خود را وارد کنید"
          required
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          className="mt-2 w-full bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'در حال ثبت...' : 'عضویت در خبرنامه'}
        </button>
      </div>
      
      {status === 'success' && (
        <p className="text-sm text-green-600 dark:text-green-400">
          ایمیل شما با موفقیت ثبت شد.
        </p>
      )}
      
      {status === 'error' && (
        <p className="text-sm text-red-600 dark:text-red-400">
          خطایی رخ داد. لطفا دوباره تلاش کنید.
        </p>
      )}
    </form>
  );
}