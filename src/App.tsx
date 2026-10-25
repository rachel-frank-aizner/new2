import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main dir="rtl" className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center p-6 selection:bg-neutral-800">
      <div className="w-full max-w-sm border border-neutral-800 rounded-xl p-6 bg-neutral-900/50 backdrop-blur text-center space-y-4 shadow-sm">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          פעיל ומוכן
        </div>

        <h1 className="text-xl font-semibold tracking-tight">ניסוי מינימלי</h1>
        <p className="text-sm text-neutral-400">
          דף בודד, קל משקל וחסכוני במיוחד בטוקנים.
        </p>

        <div className="pt-2">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="w-full py-2.5 px-4 rounded-lg bg-neutral-100 text-neutral-950 hover:bg-neutral-200 active:scale-[0.99] font-medium text-sm transition-all cursor-pointer"
          >
            לחיצות בדיקה: {count}
          </button>
        </div>
      </div>
    </main>
  );
}
