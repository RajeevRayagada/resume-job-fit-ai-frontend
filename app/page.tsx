"use client";

import { useState } from "react";

type Result = {
  match_score: number;
  strengths: string[];
  missing_skills: string[];
  suggestions: string[];
};

export default function Home() {
  const [resume, setResume] = useState("");
  const [jd, setJd] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  async function analyze() {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(
        "https://resume-job-fit-ai-backend.onrender.com/analyze",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            resume_text: resume,
            job_description: jd,
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "Analysis failed");
      }

      const data = await res.json();
      setResult(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white p-6 text-black">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold text-black">
          Resume Job Fit Analyzer
        </h1>

        <p className="text-gray-800">
          Paste your resume and a job description to see how well they match.
        </p>

        <div className="space-y-4">
          <textarea
            className="w-full rounded border border-gray-300 bg-white p-3 text-black placeholder-gray-500"
            rows={6}
            placeholder="Paste your resume here..."
            value={resume}
            onChange={(e) => setResume(e.target.value)}
          />

          <textarea
            className="w-full rounded border border-gray-300 bg-white p-3 text-black placeholder-gray-500"
            rows={6}
            placeholder="Paste the job description here..."
            value={jd}
            onChange={(e) => setJd(e.target.value)}
          />

          <button
            onClick={analyze}
            disabled={loading}
            className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </div>

        {error && (
          <div className="rounded border border-red-400 bg-red-50 p-3 text-red-700">
            {error}
          </div>
        )}

        {result && (
          <div className="space-y-4 rounded border border-gray-300 bg-white p-4 text-black">
            <div className="text-xl font-medium">
              Match Score: {result.match_score}%
            </div>

            <div>
              <h3 className="font-semibold">Strengths</h3>
              <ul className="list-disc pl-6">
                {result.strengths.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Missing Skills</h3>
              <ul className="list-disc pl-6">
                {result.missing_skills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Suggestions</h3>
              <ul className="list-disc pl-6">
                {result.suggestions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
