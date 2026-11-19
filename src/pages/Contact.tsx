import { useState, type FormEvent } from "react";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";

const email = "aderinsoladaniel433@gmail.com";
const phone = "+234 07076203912";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const senderEmail = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `From: ${name} (${senderEmail})\n\n${message}`,
    );
    setSent(true);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="page-width inner-page contact-page">
      <Reveal className="page-heading">
        <p className="eyebrow">Say hello</p>
        <h1>
          Let’s talk <span>ideas.</span>
        </h1>
        <p className="heading-summary">
          Have a project in mind, or just want to connect? My inbox is open.
        </p>
      </Reveal>

      <div className="contact-grid">
        <Reveal className="contact-info">
          <p className="section-kicker">GET IN TOUCH</p>
          <h2>
            Good things start
            <br />
            with a conversation.
          </h2>
          <p className="contact-intro">
            Reach out anytime. I’d be happy to hear from you.
          </p>

          <a className="contact-method" href={`mailto:${email}`}>
            <span className="contact-icon">
              <Icon name="mail" size={19} />
            </span>
            <span>
              <small>Email me</small>
              <strong>{email}</strong>
            </span>
            <Icon name="arrow" size={17} />
          </a>
          <a className="contact-method" href="tel:+2347076203912">
            <span className="contact-icon">
              <Icon name="phone" size={19} />
            </span>
            <span>
              <small>Call me</small>
              <strong>{phone}</strong>
            </span>
            <Icon name="arrow" size={17} />
          </a>
          <a
            className="whatsapp-link"
            href="https://wa.me/2347076203912"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="whatsapp" size={19} /> Message me on WhatsApp{" "}
            <Icon name="external" size={15} />
          </a>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={100}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <p className="section-kicker">SEND A MESSAGE</p>
            <p className="form-note">
              Your message will be addressed to{" "}
              <a href={`mailto:${email}`}>{email}</a> in your email app.
            </p>
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              required
            />
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={4}
              required
            />
            <button type="submit" className="button button-primary form-submit">
              Send Message <Icon name="arrow" size={17} />
            </button>
            {sent && (
              <p className="form-success" role="status">
                Thanks for reaching out — your email app should open with your
                message.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </div>
  );
}

export default Contact;
