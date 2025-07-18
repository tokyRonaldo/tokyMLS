"use client";

export default function GlobalLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/30 z-100">
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
    </div>
  );
}