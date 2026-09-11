import React from "react";
import { topics } from "../data/topics";
import { reactLessons } from "../data/react";
import { javascriptLessons } from "../data/javascript";
import { fullStackLessons } from "../data/fullstack";
import { questions } from "../data/index";

function SidebarScroll({ children }) {
  const scrollRef = React.useRef(null);
  const [metrics, setMetrics] = React.useState({ visible: false, top: 0, height: 0 });
  const [hovered, setHovered] = React.useState(false);
  const [scrolling, setScrolling] = React.useState(false);
  const hideTimer = React.useRef(null);
  const dragging = React.useRef(false);
  const dragStart = React.useRef({ y: 0, top: 0 });

  const update = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    const visible = max > 1;
    const track = el.clientHeight;
    const height = visible ? Math.max(42, (el.clientHeight / el.scrollHeight) * track) : track;
    const top = visible ? (el.scrollTop / max) * (track - height) : 0;
    setMetrics({ visible, top, height });
  }, []);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    if (el.firstElementChild) ro.observe(el.firstElementChild);
    const onScroll = () => {
      update();
      setScrolling(true);
      clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => setScrolling(false), 750);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      clearTimeout(hideTimer.current);
    };
  }, [update]);

  const onTrackPointerDown = (event) => {
    const el = scrollRef.current;
    if (!el || event.target.dataset.thumb !== 'true') {
      if (!el) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const ratio = (event.clientY - rect.top) / rect.height;
      el.scrollTop = ratio * (el.scrollHeight - el.clientHeight);
      return;
    }
    dragging.current = true;
    dragStart.current = { y: event.clientY, top: metrics.top };
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!dragging.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const track = el.clientHeight;
    const maxTop = Math.max(1, track - metrics.height);
    const nextTop = Math.min(maxTop, Math.max(0, dragStart.current.top + event.clientY - dragStart.current.y));
    el.scrollTop = (nextTop / maxTop) * (el.scrollHeight - el.clientHeight);
  };

  const stopDragging = () => { dragging.current = false; };

  const showScrollbar = metrics.visible && (hovered || scrolling || dragging.current);

  return (
    <div className="sidebar-scroll-wrap" onMouseEnter={() => setHovered(true)} onMouseLeave={() => { setHovered(false); if (!scrolling) setScrolling(false); }}>
      <div className="sidebar-scroll" ref={scrollRef}>
        {children}
      </div>
      {showScrollbar && (
        <div
          className="sidebar-scrollbar"
          onPointerDown={onTrackPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          aria-hidden="true"
        >
          <div
            className="sidebar-scrollbar-thumb"
            data-thumb="true"
            style={{ height: metrics.height, transform: `translateY(${metrics.top}px)` }}
          />
        </div>
      )}
    </div>
  );
}

export default function Sidebar({ view, setView, topic, setTopic, dark, setDark, open, onClose }) {
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
      {open && <button className="sidebar-overlay" aria-label="Close navigation" onClick={onClose} />}
      <aside className={open ? "sidebar sidebar-open" : "sidebar"}>
        <div className="sidebar-top">
          <div className="brand">
            <div className="brand-mark">FS</div>
            <div>
              <strong>Full Stack Interview</strong>
              <span>Learning Hub</span>
            </div>
          </div>
          <button className="sidebar-close" aria-label="Close navigation" onClick={onClose}>×</button>
        </div>

        <div className="side-intro">One place for backend fundamentals, frontend skills, and full-stack interview preparation.</div>

        <div className="side-label">START HERE</div>
        <button className={view === "roadmap" ? "roadmap-nav active" : "roadmap-nav"} onClick={() => go("roadmap")}>
          <span>🗺</span><label>Interview Roadmap</label>
        </button>

        <SidebarScroll>
          <div className="side-label section-label">BACKEND</div>
          <nav className="topic-nav">
            {topics.map(t => (
              <button key={t.id} className={view === "questions" && topic === t.id ? "nav-item active" : "nav-item"} onClick={() => goTopic(t.id)}>
                <span>{t.icon}</span><label>{t.name}</label><small>{t.id === "all" ? questions.length : (questions.filter(q => q.topic === t.id).length || 0)}</small>
              </button>
            ))}
          </nav>

          <div className="side-label section-label frontend-label">FRONTEND</div>
          <nav className="topic-nav">
            <button className={view === "react" ? "nav-item active" : "nav-item"} onClick={() => go("react")}>
              <span>⚛</span><label>React Learning</label><small>{reactLessons.length}</small>
            </button>
            <button className={view === "javascript" ? "nav-item active" : "nav-item"} onClick={() => go("javascript")}>
              <span className="text-icon js-icon">JS</span><label>JavaScript</label><small>{javascriptLessons.length}</small>
            </button>
            <button className="nav-item nav-item-disabled" disabled>
              <span className="text-icon ts-icon">TS</span><label>TypeScript</label><small>SOON</small>
            </button>
          </nav>

          <div className="side-label section-label fullstack-label">FULL STACK</div>
          <nav className="topic-nav">
            <button className={view === "fullstack" ? "nav-item active" : "nav-item"} onClick={() => go("fullstack")}>
              <span>↗</span><label>React + Spring Boot</label><small>{fullStackLessons.length}</small>
            </button>
            <button className="nav-item nav-item-disabled" disabled>
              <span>▱</span><label>Full Stack Scenarios</label><small>SOON</small>
            </button>
          </nav>
        </SidebarScroll>

        <div className="sidebar-bottom">
          <button className="theme-btn" onClick={() => setDark(!dark)}>
            <span>{dark ? "☀️" : "🌙"}</span>
            <label>{dark ? "Light mode" : "Dark mode"}</label>
          </button>
        </div>
      </aside>
    </>
  );
}
