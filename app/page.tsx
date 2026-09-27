"use client";

import { useState } from "react";

const interests = [
  ["AI for science", "Intelligence"],
  ["Scientific software", "Tools"],
  ["Molecular modelling", "Research"],
  ["Measurement and experiments", "Practice"],
];

export default function Home() {
  const [longBio, setLongBio] = useState(false);

  return (
    <main className="page">
      <header className="topbar">
        <a className="handle" href="#bio" aria-label="Minqi Xia, home">
          @XiaMinqi
        </a>
        <a
          className="github-link"
          href="https://github.com/XiaMinqi"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="bio-section" id="bio" aria-labelledby="bio-title">
        <div className="section-topline">
          <h1 id="bio-title">Bio</h1>
          <div className="bio-switch" aria-label="Biography length">
            <button
              type="button"
              className={!longBio ? "active" : ""}
              aria-pressed={!longBio}
              onClick={() => setLongBio(false)}
            >
              Default
            </button>
            <button
              type="button"
              className={longBio ? "active" : ""}
              aria-pressed={longBio}
              onClick={() => setLongBio(true)}
            >
              Long
            </button>
          </div>
        </div>

        <div className="bio-copy">
          <p>
            I’m a scientist and builder working where physical science,
            computation, and AI meet. I studied chemistry and computational
            chemistry at Nanjing University, and I’m now based in Beijing.
          </p>
          {longBio && (
            <p>
              I care about making complex scientific ideas easier to test,
              explain, and use. Most days, that means moving between models,
              experiments, data, and software. Away from work, I play badminton,
              read, watch films, and stay curious about subjects far outside my
              own field.
            </p>
          )}
        </div>
      </section>

      <section className="content-section" aria-labelledby="interests-title">
        <h2 id="interests-title">Interests</h2>
        <ul className="link-list">
          {interests.map(([title, category]) => (
            <li key={title}>
              <span>{title}</span>
              <span className="meta">{category}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="content-section" aria-labelledby="now-title">
        <h2 id="now-title">Now</h2>
        <p className="now-copy">
          Exploring how computation and AI can make scientific work more useful,
          explainable, and enjoyable.
        </p>
      </section>

      <section className="content-section" aria-labelledby="elsewhere-title">
        <h2 id="elsewhere-title">Elsewhere</h2>
        <ul className="link-list external-list">
          <li>
            <a href="https://github.com/XiaMinqi" target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <span className="meta">Code and projects ↗</span>
            </a>
          </li>
        </ul>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Minqi Xia</span>
        <span>Beijing, China</span>
      </footer>
    </main>
  );
}
