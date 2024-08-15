"use client"
// pages/success.tsx
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SuccessPage = () => {
  const router = useRouter();

  // Redirect to home after a few seconds (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000); // Redirect after 5 seconds
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black0">
      <div className="text-center p-8 bg-black shadow-md rounded-lg max-w-lg">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-white animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Payment Successful!</h1>
        <p className="text-white mb-8">Thank you for your purchase. Your payment has been processed successfully.</p>
        <button
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
