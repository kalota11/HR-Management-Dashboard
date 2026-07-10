"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-2xl bg-white p-8 shadow-xl text-center">
        <h1 className="mb-4 text-3xl font-bold text-red-600">
          Something went wrong!
        </h1>

        <p className="mb-6 text-gray-600">
          {error.message}
        </p>

        <button
          onClick={reset}
          className="rounded-lg bg-cyan-600 px-6 py-3 text-white transition hover:bg-cyan-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}