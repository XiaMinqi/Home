"use client";

import { useState } from "react";

const notes = [
  "AI for science",
  "Scientific software",
  "Measurement",
  "Molecular modelling",
  "Autonomous experimentation",
  "Learning across fields",
  "Books and ideas",
  "Film and ways of seeing",
];

const now = [
  ["Connecting experiments, models, and decisions", "Scientific work"],
  ["Learning more about statistics, biology, and automation", "Current study"],
  ["Reading across technology, business, history, and culture", "Ongoing"],
  ["Playing badminton and learning to watch films more carefully", "Outside work"],
];

const background = [
  ["Scientific research, modelling, data, and AI", "Beijing"],
  ["Chemistry and computational chemistry", "Nanjing University"],
  ["Where I grew up", "Wuxi, Jiangsu"],
];

export default function Home() {
  const [longBio, setLongBio] = useState(false);

  return (
    <main className="site-shell">
      <div className="content-column">
        <header>
          <a className="handle" href="#bio" aria-label="Minqi Xia, home">
            @XiaMinqi
          </a>
        </header>

        <section className="bio" id="bio" aria-labelledby="bio-label">
          <div className="bio-toolbar">
            <span id="bio-label">Bio</span>
            <div className="bio-modes" aria-label="Biography length">
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
              computation, and AI meet. I build models and tools that help people
              understand complex systems and make better scientific decisions.
            </p>
            <p>
              My background is in chemistry and computational modelling. Over
              time, my interests have expanded from molecules to measurement,
              software, and the design of scientific workflows.
            </p>
            {longBio && (
              <p>
                I grew up in Wuxi, studied at Nanjing University, and now live in
                Beijing. Outside work, I play badminton, read widely, watch films,
                and try to understand subjects beyond my own field.
              </p>
            )}
          </div>
        </section>

        <section className="section" aria-labelledby="notes-title">
          <h1 id="notes-title">Notes</h1>
          <ul className="note-grid">
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>

        <section className="section" aria-labelledby="now-title">
          <h1 id="now-title">Now</h1>
          <ul className="row-list">
            {now.map(([title, meta]) => (
              <li key={title}>
                <span>{title}</span>
                <span>{meta}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="background" aria-labelledby="background-title">
          <h1 id="background-title">Background</h1>
          <ul className="row-list">
            {background.map(([title, meta]) => (
              <li key={title}>
                <span>{title}</span>
                <span>{meta}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer>
          <a href="https://github.com/XiaMinqi" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <span>© {new Date().getFullYear()} Minqi Xia</span>
        </footer>
      </div>

      <aside className="portrait-column" aria-label="Personal journey illustration">
        <div className="portrait-canvas">
          <img
            className="portrait-motion"
            src="/journey-v2.webp"
            alt=""
            aria-hidden="true"
            draggable="false"
          />
          <img
            className="portrait-still"
            src="/journey-v2.webp"
            alt="A bright painted landscape flowing from a Jiangnan canal through Nanjing's green city wall toward an open Beijing skyline."
            draggable="false"
          />
        </div>
      </aside>
    </main>
  );
}
