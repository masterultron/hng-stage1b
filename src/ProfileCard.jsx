import React, { useState, useEffect } from 'react';

const ProfileCard = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <article data-testid="test-profile-card" className="w-full max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-md border border-slate-200 flex flex-col md:flex-row gap-8 items-center md:items-start transition-all">
      <figure className="shrink-0 flex flex-col items-center">
        <img
          data-testid="test-user-avatar"
          src="https://avatars.githubusercontent.com/u/9919?v=4" 
          alt="Profile avatar of Abdurrahaman Jamiu"
          className="w-40 h-40 rounded-full object-cover border-4 border-indigo-50 shadow-sm"
        />
      </figure>

      <div className="flex-1 w-full flex flex-col gap-4 text-center md:text-left">
        <header>
          <h2 data-testid="test-user-name" className="text-3xl font-extrabold text-slate-900">Abdurrahaman Jamiu</h2>
          <p data-testid="test-user-bio" className="text-slate-600 mt-2 leading-relaxed">
            Lead Front-End Developer and Software Engineer. Passionate about architecting scalable, accessible web applications using modern stacks while actively building in public.
          </p>
        </header>

        <div className="inline-flex items-center justify-center md:justify-start gap-2 text-sm font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-md w-fit mx-auto md:mx-0" aria-live="polite">
          <span>Epoch Time:</span>
          <span data-testid="test-user-time" className="font-mono text-indigo-700">{currentTime}</span>
          <span>ms</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
          <section>
            <h3 className="font-bold text-slate-800 border-b border-slate-200 pb-1 mb-2 text-sm uppercase tracking-wider">Hobbies</h3>
            <ul data-testid="test-user-hobbies" className="list-disc list-inside text-slate-600 space-y-1">
              <li>Building in public</li>
              <li>Environmental research</li>
              <li>Bodyweight fitness</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-slate-800 border-b border-slate-200 pb-1 mb-2 text-sm uppercase tracking-wider">Dislikes</h3>
            <ul data-testid="test-user-dislikes" className="list-disc list-inside text-slate-600 space-y-1">
              <li>Unsemantic markup</li>
              <li>Spaghetti code</li>
              <li>Merge conflicts</li>
            </ul>
          </section>
        </div>

        <nav aria-label="Social links" className="mt-4 pt-4 border-t border-slate-100">
          <ul data-testid="test-user-social-links" className="flex flex-wrap justify-center md:justify-start gap-4">
            <li>
              <a
                data-testid="test-user-social-github"
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-semibold hover:text-indigo-800 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded px-2 py-1 transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                data-testid="test-user-social-linkedin"
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-semibold hover:text-indigo-800 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded px-2 py-1 transition-colors"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </article>
  );
};

export default ProfileCard;