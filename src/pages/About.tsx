import Reveal from "../components/Reveal";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Git & GitHub",
  "Responsive Design",
  "Vite",
  "VS Code",
  "API Fetching",
  "Basic UI/UX",
];

const milestones = [
  {
    number: "01",
    title: "Started learning",
    detail:
      "Found my way into frontend development and fell in love with making ideas visible.",
  },
  {
    number: "02",
    title: "Built projects",
    detail:
      "Put new skills into practice by creating real, responsive web experiences.",
  },
  {
    number: "03",
    title: "Still learning & growing",
    detail:
      "Four months in and curious every day — improving through each project and challenge.",
  },
];

function About() {
  return (
    <div className="page-width inner-page">
      <Reveal className="page-heading">
        <p className="eyebrow">A little about me</p>
        <h1>
          Building with <span>curiosity.</span>
        </h1>
        <p className="heading-summary">
          A young developer with a love for simple, useful things on the web.
        </p>
      </Reveal>

      <section className="about-grid">
        <Reveal className="about-story panel">
          <p className="section-kicker">MY STORY</p>
          <h2>Hey, I’m Aderinsola.</h2>
          <p>
            I’m 18 and have spent the last four months learning and growing as a
            frontend developer. I love building clean, simple websites that work
            just as well on a phone as they do on a laptop.
          </p>
          <p>
            Every project teaches me something new. I’m focused on writing
            thoughtful code, paying attention to the details, and making the web
            a little easier to use.
          </p>
          <div className="about-note">
            <span className="note-mark">“</span>
            <span>Good design feels effortless. Getting there takes care.</span>
          </div>
        </Reveal>
        <Reveal className="skills-panel panel" delay={100}>
          <p className="section-kicker">TOOLS & SKILLS</p>
          <h2>Things I work with</h2>
          <div className="skill-list">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="timeline-section">
        <Reveal className="section-title-row">
          <div>
            <p className="section-kicker">THE JOURNEY SO FAR</p>
            <h2>One step at a time.</h2>
          </div>
          <span className="timeline-count">01 — 03</span>
        </Reveal>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <Reveal
              className="timeline-item"
              key={milestone.number}
              delay={index * 80}
            >
              <div className="timeline-marker">
                <span>{milestone.number}</span>
              </div>
              <div className="timeline-copy">
                <h3>{milestone.title}</h3>
                <p>{milestone.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
