import React, { useEffect, useMemo, useState } from 'react';
import { useProgress } from '../hooks/useProgress';
import { questions } from '../data/index';
import { roadmap, classifyQuestion } from '../data/roadmap';
import { reactLessons } from '../data/react';
import { javascriptLessons } from '../data/javascript';
import { dockerLessons } from '../data/dockerLessons';
import { dockerLabs } from '../data/dockerLabs';
import { kubernetesLessons } from '../data/kubernetesLessons';
import { kubernetesLabs } from '../data/kubernetesLabs';
import { cicdLessons } from '../data/cicdLessons';
import { cicdLabs } from '../data/cicdLabs';
import { jenkinsLessons } from '../data/jenkinsLessons';
import { jenkinsLabs } from '../data/jenkinsLabs';
import { githubActionsLessons } from '../data/githubActionsLessons';
import { githubActionsLabs } from '../data/githubActionsLabs';
import { cloudLessons } from '../data/cloudLessons';
import { cloudLabs } from '../data/cloudLabs';
import { capstoneLessons } from '../data/capstoneLessons';
import { capstoneLabs } from '../data/capstoneLabs';
import { deepDiveLessons } from '../data/deepDiveLessons';
import { deepDiveLabs } from '../data/deepDiveLabs';
import { internalWorkingsLessons } from '../data/internalWorkingsLessons';
import { internalWorkingsLabs } from '../data/internalWorkingsLabs';
import { distributedSystemsLessons } from '../data/distributedSystemsLessons';
import { distributedSystemsLabs } from '../data/distributedSystemsLabs';

const SESSION_KEY = 'backend-interview-study-sessions-v1';
const sizes = { 10: 5, 20: 8, 30: 12 };

const learningTracks = [
  ['react','React',reactLessons], ['javascript','JavaScript',javascriptLessons],
  ['docker','Docker',[...dockerLessons,...dockerLabs]], ['kubernetes','Kubernetes',[...kubernetesLessons,...kubernetesLabs]],
  ['cicd','CI/CD',[...cicdLessons,...cicdLabs]], ['jenkins','Jenkins',[...jenkinsLessons,...jenkinsLabs]],
  ['github-actions','GitHub Actions',[...githubActionsLessons,...githubActionsLabs]], ['cloud','Cloud & Deployment',[...cloudLessons,...cloudLabs]],
  ['production','Production Engineering',[...capstoneLessons,...capstoneLabs]], ['deep-dive','Deep Dive & Architecture',[...deepDiveLessons,...deepDiveLabs]],
  ['internal','Internal Workings',[...internalWorkingsLessons,...internalWorkingsLabs]], ['distributed','Distributed Systems',[...distributedSystemsLessons,...distributedSystemsLabs]]
];

const topicId = topic => ({ spring:'springboot', system:'system-design' }[topic] || topic);
const rank = id => roadmap.find(r => r.id === id)?.order ?? 99;

function readSessions() {
  try { const parsed = JSON.parse(localStorage.getItem(SESSION_KEY) || '[]'); return Array.isArray(parsed) ? parsed : []; }
  catch { return []; }
}

function makeCandidates(completed) {
  const candidates = [];
  questions.forEach(q => {
    const id = `question:${q.id}`;
    if (completed.includes(id)) return;
    const topic = topicId(q.topic);
    const area = classifyQuestion(q);
    const level = q.level === 'L3' ? 3 : q.level === 'L2' ? 2 : 1;
    candidates.push({ id, kind:'question', title:q.title, meta:`${topic.replace('-', ' ')} · ${q.level || 'Core'} · ${area.subtopicName}`, topic, level, sort: rank(topic) * 2 + (3 - level) });
  });
  learningTracks.forEach(([id, name, items]) => items.forEach((item, index) => {
    const prefix = `${id}:${item.type === 'lab' || item.kind === 'lab' ? 'labs' : 'lessons'}:${item.id}`;
    if (completed.includes(prefix)) return;
    candidates.push({ id:prefix, kind:'learning', title:item.title, meta:`${name} · ${item.type === 'lab' || item.kind === 'lab' ? 'Lab' : 'Lesson'}`, topic:id, level:item.type === 'lab' || item.kind === 'lab' ? 2 : 1, sort:rank(id) * 2 + index * .01 });
  }));
  return candidates.sort((a,b) => a.sort - b.sort || a.title.localeCompare(b.title));
}

function streakFrom(sessions) {
  const days = new Set(sessions.map(s => s.date));
  let cursor = new Date(); cursor.setHours(0,0,0,0);
  let streak = 0;
  while (days.has(cursor.toISOString().slice(0,10))) { streak++; cursor.setDate(cursor.getDate()-1); }
  return streak;
}

export default function StudySession({ onView, onTopic }) {
  const { completed, toggleComplete } = useProgress();
  const [duration, setDuration] = useState(20);
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(0);
  const [sessionItems, setSessionItems] = useState([]);
  const [reviewed, setReviewed] = useState(new Set());
  const [sessions, setSessions] = useState(readSessions);
  const [startedAt, setStartedAt] = useState(null);

  const candidates = useMemo(() => makeCandidates(completed), [completed]);
  const preview = useMemo(() => candidates.slice(0, sizes[duration]), [candidates, duration]);
  const current = sessionItems[index];
  const streak = useMemo(() => streakFrom(sessions), [sessions]);

  useEffect(() => {
    if (active && index >= sessionItems.length && sessionItems.length) finishSession();
  }, [active, index, sessionItems.length]);

  const startSession = () => {
    const next = candidates.slice(0, sizes[duration]);
    setSessionItems(next); setIndex(0); setReviewed(new Set()); setStartedAt(Date.now()); setActive(true);
  };

  const markCurrent = () => {
    if (!current) return;
    if (current.kind === 'question') toggleComplete(current.id);
    else toggleComplete(current.id);
    setReviewed(prev => new Set(prev).add(current.id));
  };

  const nextItem = () => setIndex(i => i + 1);

  function finishSession() {
    if (!sessionItems.length || !startedAt) { setActive(false); return; }
    const date = new Date().toISOString().slice(0,10);
    const entry = { id:`${Date.now()}`, date, completed:reviewed.size, total:sessionItems.length, duration, startedAt, finishedAt:Date.now() };
    const next = [entry, ...sessions].slice(0,30);
    setSessions(next); localStorage.setItem(SESSION_KEY, JSON.stringify(next));
    setActive(false); setIndex(sessionItems.length); setStartedAt(null);
  }

  if (active && current) return (
    <section className="session-page">
      <div className="session-topline"><button type="button" className="session-back" onClick={() => finishSession()}>← Exit session</button><span>FOCUSED STUDY SESSION</span><span>{duration} MIN</span></div>
      <div className="session-progress"><i style={{width:`${Math.min(100, (index / sessionItems.length) * 100)}%`}} /></div>
      <main className="session-workspace">
        <div className="session-counter">ITEM {String(index + 1).padStart(2,'0')} <span>/ {String(sessionItems.length).padStart(2,'0')}</span></div>
        <div className="session-type">{current.kind === 'question' ? 'INTERVIEW QUESTION' : 'LEARNING ITEM'} · {current.level === 3 ? 'L3 DEEP' : current.level === 2 ? 'L2 APPLIED' : 'L1 FOUNDATION'}</div>
        <h2>{current.title}</h2>
        <p className="session-meta">{current.meta}</p>
        <div className="session-coach"><span>STUDY LOOP</span><b>Recall → explain → check → move on</b><small>Try answering from memory before opening the full content.</small></div>
        <div className="session-actions">
          <button type="button" className={reviewed.has(current.id) ? 'session-complete done' : 'session-complete'} onClick={markCurrent}>{reviewed.has(current.id) ? '✓ Marked complete' : 'Mark as covered'}</button>
          <button type="button" className="session-open" onClick={() => current.kind === 'question' ? onTopic(current.topic) : onView(current.topic)}>Open full content ↗</button>
          <button type="button" className="session-next" onClick={nextItem}>{index === sessionItems.length - 1 ? 'Finish session' : 'Next item →'}</button>
        </div>
      </main>
      <footer className="session-footer"><span>{reviewed.size} covered</span><span>{sessionItems.length - index - 1} remaining</span><span>Streak {streak} day{streak === 1 ? '' : 's'}</span></footer>
    </section>
  );

  const last = sessions[0];
  return (
    <section className="session-page session-home">
      <header className="session-hero">
        <div><span className="progress-eyebrow"><span className="roadmap-live-dot" /> FOCUSED PREPARATION</span><h2>Study with intent.<br/><em>Leave with momentum.</em></h2><p>Turn your smart queue into a short, distraction-free session. Recall first, open the source when needed, mark what you covered, and keep moving.</p></div>
        <div className="session-streak"><span>CURRENT STREAK</span><strong>{streak}</strong><small>completed study day{streak === 1 ? '' : 's'}</small></div>
      </header>
      <div className="session-layout">
        <section className="session-builder">
          <div className="section-kicker">01 · SESSION LENGTH</div><h3>How much time do you have?</h3><div className="duration-grid">{[10,20,30].map(value => <button type="button" key={value} className={duration === value ? 'duration-card active' : 'duration-card'} onClick={() => setDuration(value)}><strong>{value}</strong><span>MIN</span><small>{sizes[value]} focused items</small></button>)}</div>
          <div className="session-preview-head"><div><span className="section-kicker">02 · SESSION PLAN</span><h3>Your next {sizes[duration]} items</h3></div><span>{preview.length} available</span></div>
          <div className="session-plan">{preview.map((item,i)=><div className="session-plan-row" key={item.id}><span>{String(i+1).padStart(2,'0')}</span><div><b>{item.title}</b><small>{item.meta}</small></div><i>{item.kind === 'question' ? 'Q' : 'L'}</i></div>)}</div>
          <button type="button" className="start-session" onClick={startSession} disabled={!preview.length}>Start {duration}-minute session <span>→</span></button>
        </section>
        <aside className="session-sidebar">
          <div className="session-side-card"><span className="section-kicker">THE STUDY LOOP</span><ol><li><b>Recall</b><small>Answer before reading.</small></li><li><b>Explain</b><small>Say it like an interviewer asked.</small></li><li><b>Check</b><small>Open the full lesson or answer.</small></li><li><b>Commit</b><small>Mark it covered and move on.</small></li></ol></div>
          <div className="session-side-card"><span className="section-kicker">LAST SESSION</span>{last ? <><strong>{last.completed}/{last.total}</strong><p>{last.duration}-minute session · {last.date}</p></> : <><strong>—</strong><p>No completed sessions yet.</p></>}</div>
          <button type="button" className="session-dashboard-link" onClick={() => onView('progress')}>Back to My Progress ↗</button>
        </aside>
      </div>
    </section>
  );
}
