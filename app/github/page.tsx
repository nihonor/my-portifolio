"use client";
import React, { useEffect, useState } from "react";

// Define the type for a single repository
interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

const Page = () => {
  // Define the state with the correct type
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true); // state to track loading
  const [error, setError] = useState<string | null>(null); // state to handle any errors

  useEffect(() => {
    // Fetch GitHub repositories
    fetch("https://api.github.com/users/nihonor/repos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-extrabold text-blue-600 mb-4">
          My GitHub Repositories
        </h1>
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-extrabold text-blue-600 mb-4">
          My GitHub Repositories
        </h1>
        <p className="text-red-500 text-xl">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-extrabold text-blue-600 mb-6">
          My GitHub Repositories
        </h1>

        {/* Repositories List */}
        {repos.length === 0 ? (
          <p className="text-xl text-gray-700">No repositories found.</p>
        ) : (
          <ul className="space-y-6">
            {repos.map((repo) => (
              <li
                key={repo.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold text-blue-600 hover:text-blue-800 underline"
                >
                  {repo.name}
                </a>
                <p className="mt-2 text-gray-600">
                  {repo.description || "No description provided"}
                </p>
              </li>
            ))}
          </ul>
        )}

        {/* Contributions Section */}
        <div className="mt-16 bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Contributions</h2>
          <p className="text-lg">
            I&apos;m an active contributor to several open-source projects.
            Check out some of my contributions on GitHub!
          </p>

          <div className="flex space-x-6 mt-6">
            <a
              href="https://github.com/nihonor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition"
            >
              <span className="text-xl">📝 My GitHub</span>
            </a>
            <a
              href="https://github.com/nihonor?tab=contributions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition"
            >
              <span className="text-xl">👨‍💻 Contributions</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
