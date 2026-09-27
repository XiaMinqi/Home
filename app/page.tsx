"use client";

import { useState } from "react";

const skillsets = [
  "AI for Science",
  "Formulation Science",
  "Quantum Chemistry",
  "Molecular Dynamics",
  "Laboratory Automation",
  "Image Analysis",
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
              I’m a data scientist at P&G, working at the intersection of
              physical science, computation, and AI. I build models and tools
              that help people understand complex systems and make better
              scientific decisions.
            </p>
            <p>
              My background is in computational chemistry. Over time, my
              interests have expanded from molecular systems to measurement,
              scientific software, and the design of scientific workflows.
            </p>
            {longBio && (
              <p>
                I grew up in Wuxi, studied at Nanjing University, and now live in
                Beijing. Outside work, I stay active through badminton, skiing,
                cycling, and strength training. I also read widely, watch films,
                and enjoy exploring subjects beyond my own field.
              </p>
            )}
          </div>
        </section>

        <section className="section" aria-labelledby="skillsets-title">
          <h1 id="skillsets-title">Skillsets</h1>
          <ul className="note-grid">
            {skillsets.map((skill) => (
              <li key={skill}>{skill}</li>
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

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <h1 id="contact-title">Contact</h1>
          <p className="contact-copy">
            I’m always happy to connect with people working across science,
            computation, and AI. If you’d like to exchange ideas or discuss a
            possible collaboration, you can find me on GitHub.
          </p>
          <a className="contact-link" href="https://github.com/Xia-Minqi" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </section>

        <footer>
          <a href="https://github.com/Xia-Minqi" target="_blank" rel="noreferrer">
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
            alt="A bright painted landscape flowing from a Jiangnan canal through Nanjing’s green city wall toward an open Beijing skyline."
            draggable="false"
          />
        </div>
      </aside>
    </main>
  );
}
