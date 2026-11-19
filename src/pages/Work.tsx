import Icon from "../components/Icon";
import Reveal from "../components/Reveal";

const projects = [
  {
    number: "01",
    name: "Task Manager App",
    description:
      "A simple task manager where you can add, complete and delete tasks.",
    url: "https://task-manager-five-plum-42.vercel.app",
    type: "Interactive app",
    preview: "task-preview",
    accent: "tasks",
  },
  {
    number: "02",
    name: "Blog Preview Card",
    description:
      "A clean blog preview card built with HTML & CSS, focused on layout and design.",
    url: "https://blog-preview-card-eight-pink.vercel.app",
    type: "HTML & CSS",
    preview: "blog-preview",
    accent: "blog",
  },
];

function Work() {
  return (
    <div className="page-width inner-page">
      <Reveal className="page-heading work-heading">
        <p className="eyebrow">A few things I’ve made</p>
        <h1>
          Selected <span>work.</span>
        </h1>
        <p className="heading-summary">
          Small projects, real practice. More is always in the works.
        </p>
      </Reveal>

      <section className="project-grid" aria-label="Selected projects">
        {projects.map((project, index) => (
          <Reveal
            className="project-card"
            key={project.name}
            delay={index * 90}
          >
            <div className={`project-preview ${project.preview}`}>
              <span className="project-number">{project.number} / 03</span>
              <div className={`mock-window ${project.accent}`}>
                {project.accent === "tasks" ? (
                  <div className="task-mock">
                    <div className="mock-top">
                      <span className="mock-logo">
                        <i /> daylist
                      </span>
                      <span className="mock-menu">•••</span>
                    </div>
                    <p className="mock-date">MONDAY, 12 MAY</p>
                    <h3>Your day, in focus.</h3>
                    <div className="mock-task checked">
                      <b>✓</b>
                      <span>Review project notes</span>
                    </div>
                    <div className="mock-task">
                      <b /> <span>Plan the week ahead</span>
                    </div>
                    <div className="mock-task">
                      <b /> <span>Take a short break</span>
                    </div>
                    <div className="mock-add">＋ Add a task</div>
                  </div>
                ) : (
                  <div className="blog-mock">
                    <div className="blog-art">
                      <span>✳</span>
                      <i />
                      <b />
                    </div>
                    <span className="blog-tag">Learning</span>
                    <h3>Building a better web, one detail at a time.</h3>
                    <p>Thoughts on design and the little things...</p>
                    <div className="blog-author">
                      <span /> Alex Morgan <small>5 min read</small>
                    </div>
                  </div>
                )}
              </div>
              <span className="preview-label">{project.type}</span>
            </div>
            <div className="project-details">
              <div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
              <div className="project-actions">
                <a
                  className="text-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo <Icon name="external" size={15} />
                </a>
                <a
                  className="text-link subdued-link"
                  href="https://github.com/Dandizzy67"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <Icon name="external" size={15} />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
        <Reveal className="coming-card" delay={180}>
          <div className="coming-icon">＋</div>
          <p className="section-kicker">NEXT UP</p>
          <h2>
            Something good
            <br />
            is on the way.
          </h2>
          <span>Coming soon</span>
        </Reveal>
      </section>

      <Reveal className="work-cta">
        <p>Have an idea in mind?</p>
        <a className="text-link" href="/contact">
          Let’s make it happen <Icon name="arrow" size={17} />
        </a>
      </Reveal>
    </div>
  );
}

export default Work;
