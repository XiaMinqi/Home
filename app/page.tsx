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
                Detail
              </button>
            </div>
          </div>

          <div className="bio-panels">
            <div className={`bio-panel bio-default ${!longBio ? "is-active" : ""}`} aria-hidden={longBio}>
              <div className="bio-copy">
                <p>
                  I’m a data scientist at P&amp;G, working at the intersection of
                  physical science, computation, and AI. I build models and tools
                  that help people understand complex systems and make better
                  scientific decisions.
                </p>
                <p>
                  My background is in computational chemistry. Over time, my
                  interests have expanded from molecular systems to measurement,
                  scientific software, and the design of scientific workflows.
                </p>
              </div>
            </div>

            <div className={`bio-panel bio-detail ${longBio ? "is-active" : ""}`} aria-hidden={!longBio}>
              <div className="detail-copy">
                <section aria-labelledby="wuxi-title">
                  <h2 id="wuxi-title">Wuxi</h2>
                  <p>I grew up in Wuxi, a city by Lake Taihu in southern Jiangsu.</p>
                  <p>
                    I like quite a few things about the city, especially the food. Wuxi-style xiaolongbao, braised spare ribs, and yangchun noodles are still some of my favorites. The local food tends to be on the sweeter side, which is also very much to my taste.
                  </p>
                  <p>
                    Beyond the food, I also really like the cherry blossoms at Yuantouzhu, especially in spring when they bloom along the shore of Lake Taihu and turn much of the lakeside pink.
                  </p>
                  <p>
                    I lived in Wuxi until I left for university, so most of my childhood memories are naturally tied to the city.
                  </p>
                </section>

                <section aria-labelledby="nanjing-title">
                  <h2 id="nanjing-title">Nanjing</h2>
                  <p>
                    I spent both my undergraduate and graduate years at Nanjing University, studying chemistry.
                  </p>
                  <p>
                    During graduate school, I joined Prof. Hu Zheng’s group. My research was mainly around electrocatalysis and battery-related systems, with a focus on computational chemistry and molecular dynamics simulations.
                  </p>
                  <p>
                    A fairly large part of my university years also overlapped with the COVID pandemic. Classes, research and campus life were affected at different points, and there were periods when travelling between cities was much more complicated than usual. It was an unusual part of spending my early twenties at university.
                  </p>
                  <p>
                    After several years there, I also grew to like Nanjing itself — its old neighborhoods, universities, mountains and lakes.
                  </p>
                </section>

                <section aria-labelledby="beijing-title">
                  <h2 id="beijing-title">Beijing</h2>
                  <p>
                    After graduation, I moved to Beijing and started working in industrial R&amp;D.
                  </p>
                  <p>
                    Compared with graduate school, the scope of my work has gradually become much broader. I still work with molecular simulation, but now also spend a lot of time on measurement, data analysis, modelling, scientific software and AI.
                  </p>
                  <p>
                    One change I particularly enjoy is that the problems are usually much closer to real products. A question may start from an unexpected product behavior, then require experiments, data analysis or simulation to understand it, and eventually turn into a model or a tool that other researchers can use.
                  </p>
                  <p>
                    Over the past few years, I have also been doing more work around AI for science, scientific agents and laboratory automation. A lot of my current interest is in how computation, experimental data, scientific models and AI systems can work together in R&amp;D.
                  </p>
                  <p>
                    Beijing is also quite different from both Wuxi and Nanjing. I am still gradually getting to know the city outside work.
                  </p>
                </section>

                <section aria-labelledby="outside-work-title">
                  <h2 id="outside-work-title">Outside work</h2>
                  <p>
                    I like staying active and spend quite a bit of my free time outdoors. Badminton is the sport I play most regularly, and I also enjoy skiing, cycling and going to the gym.
                  </p>
                  <p>
                    I am also interested in things like Chinese chess and Rubik’s cubes. I am not particularly serious about either of them, but I enjoy activities where there is something to figure out, practice, or gradually get better at.
                  </p>
                  <p>
                    When I want something quieter, I like reading. I also enjoy going out — walking around a city, visiting somewhere new, or taking a trip when I have the chance.
                  </p>
                  <p>
                    And despite already spending plenty of time with computers at work, I still genuinely enjoy coding. Sometimes I code because I need a tool; sometimes it is simply satisfying to build something and see it work.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>

        {!longBio && (
          <>
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
              <div className="contact-links">
                <a href="mailto:xiaminqi@foxmail.com" aria-label="Email Minqi Xia">
                  xiaminqi@foxmail.com
                </a>
                <a href="https://github.com/Xia-Minqi" target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </div>
            </section>
          </>
        )}

        <footer>
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
