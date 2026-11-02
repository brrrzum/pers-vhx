import React from "react";

const PROJECTS = [
  {
    title: "//vhxx -prsnl",
    description:
      "personal collection.",
    tags: ["tech", "etcetera", "showcase"],
    status: "live",
    link: "#",
  },
  {
    title: "about",
    description:
      "Automated Docker compose stacks and Python utilities for network monitoring and service deployment.",
    tags: ["Docker", "Python", "Linux"],
    status: "Active",
    link: "#",
  },
  {
    title: "Personal Dev Toolkit",
    description:
      "A curated collection of local scripts, system administration snippets, and workflow automations.",
    tags: ["Bash", "TypeScript", "Git"],
    status: "WIP",
    link: "#",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-zinc-50">
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        
        {/* Header / Nav */}
        <header className="mb-16 flex items-center justify-between border-b border-zinc-200 pb-6">
          <div>
            <h1 className="text-lg font-semibold tracking-tight">vhxx //js</h1>
            <p className="text-sm text-zinc-500">bits & etcetera</p>
          </div>
          <nav className="flex gap-6 text-sm font-medium text-zinc-600">
            <a href="#bio" className=" transition hover:text-zinc-900">about</a>
            <a href="#projects" className="transition hover:text-zinc-900">projects</a>
            <a
              href="https://x.com/colaveins"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-zinc-900"
            >
              x ↗
            </a>
          </nav>
        </header>

        {/* Bio Section */}
        <section id="bio" className="mb-20">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            About
          </h2>
          <p className="text-xl leading-relaxed text-zinc-800 md:text-2xl">
            ersonal sandbox and a living index of what I am building.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Selected Projects
            </h2>
            <span className="text-xs text-zinc-400">
              {PROJECTS.length} indexed
            </span>
          </div>

          <div className="grid gap-4">
            {PROJECTS.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="group block rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-400 hover:shadow-sm"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium text-zinc-900 group-hover:underline">
                    {project.title}
                  </h3>
                  <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600">
                    {project.status}
                  </span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-zinc-600">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-zinc-50 px-2 py-1 font-mono text-xs text-zinc-500 border border-zinc-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="mt-24 border-t border-zinc-200 pt-8 text-xs text-zinc-400 flex justify-between">
          <span>breathe & relax</span>
          <span>v1.0</span>
        </footer>

      </main>
    </div>
  );
}