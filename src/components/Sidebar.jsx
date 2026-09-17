import React from "react";
import { topics } from "../data/topics";
import { contentCounts } from "../data/counts";

export default function Sidebar({ view, setView, topic, setTopic, dark, setDark, open, onClose, triggerRef }) {
  const closeRef = React.useRef(null);
  const wasOpen = React.useRef(false);

  React.useEffect(() => {
    if (!open) {
      if (wasOpen.current) triggerRef?.current?.focus();
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;
    closeRef.current?.focus();
    const onKeyDown = event => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose?.();
        return;
      }
      if (event.key !== "Tab") return;
      const sidebar = event.currentTarget;
      const focusable = sidebar.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const sidebar = document.querySelector('.sidebar.sidebar-open');
    sidebar?.addEventListener('keydown', onKeyDown);
    return () => sidebar?.removeEventListener('keydown', onKeyDown);
  }, [open, onClose, triggerRef]);
  const go = (next) => {
    setView(next);
    onClose?.();
  };

  const goTopic = (nextTopic) => {
    setTopic(nextTopic);
    onClose?.();
  };

  return (
    <>
      {open && <button type="button" className="sidebar-overlay" aria-label="Close navigation" onClick={onClose} />}
      <aside id="site-navigation" aria-label="Site navigation" className={open ? "sidebar sidebar-open" : "sidebar"}>
        <div className="sidebar-top">
          <div className="brand">
            <div className="brand-mark">FS</div>
            <div>
              <strong>Full Stack Interview</strong>
              <span>Learning Hub</span>
            </div>
          </div>
          <button type="button" ref={closeRef} className="sidebar-close" aria-label="Close navigation" onClick={onClose}>×</button>
        </div>

        <div className="side-intro">One place for backend fundamentals, frontend skills, and full-stack interview preparation.</div>

        <div className="side-label">START HERE</div>
        <button type="button" className={view === "roadmap" ? "roadmap-nav active" : "roadmap-nav"} aria-current={view === "roadmap" ? "page" : undefined} onClick={() => go("roadmap")}>
          <span>🗺</span><label>Interview Roadmap</label>
        </button>
        <button type="button" className={view === "progress" ? "roadmap-nav active" : "roadmap-nav"} aria-current={view === "progress" ? "page" : undefined} onClick={() => go("progress")}>
          <span>◒</span><label>My Progress</label>
        </button>
        <button type="button" className={view === "session" ? "roadmap-nav active session-nav" : "roadmap-nav session-nav"} aria-current={view === "session" ? "page" : undefined} onClick={() => go("session")}>
          <span>▶</span><label>Study Session</label><small>Focus</small>
        </button>

        <div className="sidebar-scroll">
          <div className="side-label section-label">BACKEND</div>
          <nav className="topic-nav" aria-label="Backend topics">
            {topics.map(t => (
              <button type="button" key={t.id} className={view === "questions" && topic === t.id ? "nav-item active" : "nav-item"} aria-current={view === "questions" && topic === t.id ? "page" : undefined} onClick={() => goTopic(t.id)}>
                <span>{t.icon}</span><label>{t.name}</label><small>{t.id === "all" ? contentCounts.backend.total : (contentCounts.backend.byTopic?.[t.id] || 0)}</small>
              </button>
            ))}
          </nav>

          <div className="side-label section-label frontend-label">FRONTEND</div>
          <nav className="topic-nav" aria-label="Learning navigation">
            <button type="button" className={view === "react" ? "nav-item active" : "nav-item"} aria-current={view === "react" ? "page" : undefined} onClick={() => go("react")}>
              <span>⚛</span><label>React Learning</label><small>{contentCounts.react.total}</small>
            </button>
            <button type="button" className={view === "javascript" ? "nav-item active" : "nav-item"} aria-current={view === "javascript" ? "page" : undefined} onClick={() => go("javascript")}>
              <span className="text-icon js-icon">JS</span><label>JavaScript</label><small>{contentCounts.javascript.total}</small>
            </button>
          </nav>

          <div className="side-label section-label devops-label">DEVOPS</div>
          <nav className="topic-nav" aria-label="Learning navigation">
            <button type="button" className={view === "docker" ? "nav-item active" : "nav-item"} aria-current={view === "docker" ? "page" : undefined} onClick={() => go("docker")}>
              <span>🐳</span><label>Docker</label><small>{contentCounts.docker.total}</small>
            </button>
            <button type="button" className={view === "kubernetes" ? "nav-item active" : "nav-item"} aria-current={view === "kubernetes" ? "page" : undefined} onClick={() => go("kubernetes")}>
              <span>☸</span><label>Kubernetes</label><small>{contentCounts.kubernetes.total}</small>
            </button>
            <button type="button" className={view === "cicd" ? "nav-item active" : "nav-item"} aria-current={view === "cicd" ? "page" : undefined} onClick={() => go("cicd")}>
              <span>⚙</span><label>CI/CD</label><small>{contentCounts.cicd.total}</small>
            </button>
            <button type="button" className={view === "jenkins" ? "nav-item active" : "nav-item"} aria-current={view === "jenkins" ? "page" : undefined} onClick={() => go("jenkins")}>
              <span>🔧</span><label>Jenkins</label><small>{contentCounts.jenkins.total}</small>
            </button>
            <button type="button" className={view === "github-actions" ? "nav-item active" : "nav-item"} aria-current={view === "github-actions" ? "page" : undefined} onClick={() => go("github-actions")}>
              <span>◉</span><label>GitHub Actions</label><small>{contentCounts.githubActions.total}</small>
            </button>
            <button type="button" className={view === "cloud" ? "nav-item active" : "nav-item"} aria-current={view === "cloud" ? "page" : undefined} onClick={() => go("cloud")}>
              <span>☁</span><label>Cloud & Deployment</label><small>{contentCounts.cloud.total}</small>
            </button>
            <button type="button" className={view === "production" ? "nav-item active" : "nav-item"} aria-current={view === "production" ? "page" : undefined} onClick={() => go("production")}>
              <span>🏗</span><label>Production Engineering</label><small>{contentCounts.production.total}</small>
            </button>
          </nav>

          <div className="side-label section-label advanced-label">DEEP LEARNING</div>
          <nav className="topic-nav" aria-label="Learning navigation">
            <button type="button" className={view === "deep-dive" ? "nav-item active" : "nav-item"} aria-current={view === "deep-dive" ? "page" : undefined} onClick={() => go("deep-dive")}>
              <span>🧠</span><label>Deep Dive & Architecture</label><small>{contentCounts.deepDive.total}</small>
            </button>
          </nav>

          <div className="side-label section-label advanced-label">DISTRIBUTED SYSTEMS</div>
          <nav className="topic-nav" aria-label="Learning navigation">
            <button type="button" className={view === "distributed" ? "nav-item active" : "nav-item"} aria-current={view === "distributed" ? "page" : undefined} onClick={() => go("distributed")}>
              <span>🌐</span><label>Distributed Systems</label><small>{contentCounts.distributed.total}</small>
            </button>
          </nav>

          <div className="side-label section-label advanced-label">INTERNAL WORKINGS</div>
          <nav className="topic-nav" aria-label="Learning navigation">
            <button type="button" className={view === "internal" ? "nav-item active" : "nav-item"} aria-current={view === "internal" ? "page" : undefined} onClick={() => go("internal")}>
              <span>⚙</span><label>Internal Workings</label><small>{contentCounts.internal.total}</small>
            </button>
          </nav>

          <div className="side-label section-label practical-label">PRACTICAL ENGINEERING</div>
          <nav className="topic-nav" aria-label="Learning navigation">
            <button type="button" className={view === "labs" ? "nav-item active" : "nav-item"} aria-current={view === "labs" ? "page" : undefined} onClick={() => go("labs")}>
              <span>🛠</span><label>Build / Debug Labs</label><small>{contentCounts.labs.total}</small>
            </button>
          </nav>

          <div className="side-label section-label fullstack-label">FULL STACK</div>
          <nav className="topic-nav" aria-label="Learning navigation">
            <button type="button" className={view === "fullstack" ? "nav-item active" : "nav-item"} aria-current={view === "fullstack" ? "page" : undefined} onClick={() => go("fullstack")}>
              <span>↗</span><label>React + Spring Boot</label><small>{contentCounts.fullstack.total}</small>
            </button>
            <button type="button" className={view === "scenarios" ? "nav-item active" : "nav-item"} aria-current={view === "scenarios" ? "page" : undefined} onClick={() => go("scenarios")}>
              <span>▱</span><label>Full Stack Scenarios</label><small>{contentCounts.scenarios.total}</small>
            </button>
          </nav>
        </div>

        <div className="sidebar-bottom">
          <button type="button" className="theme-btn" onClick={() => setDark(!dark)}>
            <span>{dark ? "☀️" : "🌙"}</span>
            <label>{dark ? "Light mode" : "Dark mode"}</label>
          </button>
        </div>
      </aside>
    </>
  );
}
