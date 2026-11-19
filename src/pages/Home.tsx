import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";

function Home() {
  return (
    <section className="hero page-width">
      <Reveal className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> Available for opportunities
        </p>
        <h1>
          Aderinsola
          <br />
          <span>Daniel</span>
        </h1>
        <p className="hero-role">
          Frontend Developer <span className="role-line" />
        </p>
        <p className="hero-intro">
          I build clean, thoughtful web experiences that feel great to use on
          any screen. Curious by nature, always learning, and happiest turning
          ideas into interfaces.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/work">
            View My Work <Icon name="arrow" size={17} />
          </Link>
          <Link className="button button-quiet" to="/contact">
            Contact Me
          </Link>
        </div>
        <div className="hero-meta">
          <span>Based in Nigeria</span>
          <span className="meta-divider" />
          <span>Open to work</span>
        </div>
      </Reveal>
      <Reveal className="hero-visual" delay={120}>
        <div className="portrait-frame">
          <div
            className="portrait-placeholder"
            role="img"
            aria-label="Photo placeholder for Aderinsola Daniel"
          >
            <span>AD</span>
            <i />
            <b />
          </div>
          <div className="portrait-caption">
            <span className="caption-dot" /> Learning. Building. Growing.
          </div>
        </div>
        <div className="hero-index">
          01 <span>/ 04</span>
        </div>
        <div className="visual-decoration" aria-hidden="true">
          ✳
        </div>
      </Reveal>
    </section>
  );
}

export default Home;
