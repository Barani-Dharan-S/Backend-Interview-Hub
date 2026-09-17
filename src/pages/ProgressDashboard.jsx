import React, { useMemo } from 'react';
import { useProgress } from '../hooks/useProgress';
import { questions } from '../data/index';
import { contentCounts } from '../data/counts';
import { roadmap, learningJourney, classifyQuestion } from '../data/roadmap';
import { javascriptLessons } from '../data/javascript';
import { reactLessons } from '../data/react';
import { capstoneLessons } from '../data/capstoneLessons';
import { capstoneLabs } from '../data/capstoneLabs';
import { deepDiveLessons } from '../data/deepDiveLessons';
import { deepDiveLabs } from '../data/deepDiveLabs';
import { buildLabs } from '../data/buildLabs';
import { debugLabs } from '../data/debugLabs';
import { architectureLabs } from '../data/architectureLabs';
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
import { distributedSystemsLessons } from '../data/distributedSystemsLessons';
import { distributedSystemsLabs } from '../data/distributedSystemsLabs';
import { internalWorkingsLessons } from '../data/internalWorkingsLessons';
import { internalWorkingsLabs } from '../data/internalWorkingsLabs';

const tracks = [
  { id:'java', name:'Java', icon:'☕', type:'questions', totalKey:'java' },
  { id:'springboot', name:'Spring Boot', icon:'◉', type:'questions', totalKey:'springboot' },
  { id:'jpa', name:'JPA / Hibernate', icon:'◈', type:'questions', totalKey:'jpa' },
  { id:'microservices', name:'Microservices', icon:'◇', type:'questions', totalKey:'microservices' },
  { id:'sql', name:'SQL', icon:'▤', type:'questions', totalKey:'sql' },
  { id:'security', name:'Security', icon:'⌁', type:'questions', totalKey:'security' },
  { id:'system-design', name:'System Design', icon:'⌘', type:'questions', totalKey:'system-design' },
  { id:'coding', name:'Coding', icon:'</>', type:'questions', totalKey:'coding' },
  { id:'react', name:'React', icon:'⚛', type:'learning', items:reactLessons, prefix:'react', route:'react' },
  { id:'javascript', name:'JavaScript', icon:'JS', type:'learning', items:javascriptLessons, prefix:'javascript', route:'javascript' },
  { id:'fullstack', name:'Full Stack', icon:'↔', type:'count', totalKey:'fullstack' },
  { id:'docker', name:'Docker', icon:'🐳', type:'learning', items:[...dockerLessons,...dockerLabs], prefix:'docker', route:'docker' },
  { id:'kubernetes', name:'Kubernetes', icon:'☸', type:'learning', items:[...kubernetesLessons,...kubernetesLabs], prefix:'kubernetes', route:'kubernetes' },
  { id:'cicd', name:'CI/CD', icon:'⚙', type:'learning', items:[...cicdLessons,...cicdLabs], prefix:'cicd', route:'cicd' },
  { id:'jenkins', name:'Jenkins', icon:'🔧', type:'learning', items:[...jenkinsLessons,...jenkinsLabs], prefix:'jenkins', route:'jenkins' },
  { id:'github-actions', name:'GitHub Actions', icon:'◉', type:'learning', items:[...githubActionsLessons,...githubActionsLabs], prefix:'github-actions', route:'github-actions' },
  { id:'cloud', name:'Cloud & Deployment', icon:'☁', type:'learning', items:[...cloudLessons,...cloudLabs], prefix:'cloud', route:'cloud' },
  { id:'production', name:'Production Engineering', icon:'🏗', type:'learning', items:[...capstoneLessons,...capstoneLabs], prefix:'production', route:'production' },
  { id:'deep-dive', name:'Deep Dive & Architecture', icon:'🧠', type:'learning', items:[...deepDiveLessons,...deepDiveLabs], prefix:'deep-dive', route:'deep-dive' },
  { id:'internal', name:'Internal Workings', icon:'⚙', type:'learning', items:[...internalWorkingsLessons,...internalWorkingsLabs], prefix:'internal', route:'internal' },
  { id:'distributed', name:'Distributed Systems', icon:'🌐', type:'learning', items:[...distributedSystemsLessons,...distributedSystemsLabs], prefix:'distributed', route:'distributed' }
];

const questionTopicId = topic => ({ spring: 'springboot', system: 'system-design' }[topic] || topic);
const questionTrack = id => questions.filter(q => questionTopicId(q.topic) === id);
const itemProgressId = (track, item, tab = 'lessons') => `${track.prefix}:${tab}:${item.id}`;

function formatWhen(timestamp) {
  if (!timestamp) return 'Completion time not recorded';
  const delta = Math.max(0, Date.now() - timestamp);
  const minute = 60 * 1000, hour = 60 * minute, day = 24 * hour;
  if (delta < hour) return `${Math.max(1, Math.floor(delta / minute))}m ago`;
  if (delta < day) return `${Math.floor(delta / hour)}h ago`;
  if (delta < 7 * day) return `${Math.floor(delta / day)}d ago`;
  return new Date(timestamp).toLocaleDateString(undefined, { month:'short', day:'numeric' });
}


function buildStudyQueue(trackStats, completed, limit = 8) {
  const statsById = new Map(trackStats.map(track => [track.id, track]));
  const candidates = [];

  questions.forEach(q => {
    const progressId = `question:${q.id}`;
    if (completed.includes(progressId)) return;
    const track = statsById.get(questionTopicId(q.topic));
    if (!track) return;
    const area = classifyQuestion(q);
    const levelWeight = q.level === 'L3' ? 22 : q.level === 'L2' ? 14 : 8;
    const weaknessWeight = Math.max(0, 100 - track.percent) * 0.42;
    const orderWeight = Math.max(0, 16 - (roadmap.find(r => r.id === questionTopicId(q.topic))?.order || 16)) * 0.7;
    const titleWeight = q.title?.toLowerCase().includes('difference') || q.title?.toLowerCase().includes('explain') ? 2 : 0;
    candidates.push({
      key: progressId,
      kind: 'question',
      title: q.title,
      meta: `${track.name} · ${q.level || 'Core'} · ${area.subtopicName}`,
      reason: track.percent < 35 ? 'Low mastery area' : q.level === 'L3' ? 'Deep interview recall' : 'Unreviewed coverage',
      score: weaknessWeight + levelWeight + orderWeight + titleWeight,
      action: () => {},
      topic: questionTopicId(q.topic),
      questionId: q.id,
      level: q.level || 'Core'
    });
  });

  trackStats.filter(t => t.type === 'learning' && t.items).forEach(track => {
    track.items.forEach((item, index) => {
      const lessonId = itemProgressId(track, item, 'lessons');
      const labId = itemProgressId(track, item, 'labs');
      if (completed.includes(lessonId) || completed.includes(labId)) return;
      const weaknessWeight = Math.max(0, 100 - track.percent) * 0.34;
      const sequenceWeight = Math.max(0, 14 - index) * 0.5;
      const labWeight = item.type === 'lab' || item.kind === 'lab' ? 7 : 0;
      candidates.push({
        key: lessonId,
        kind: 'learning',
        title: item.title,
        meta: `${track.name} · ${item.type === 'lab' || item.kind === 'lab' ? 'Lab' : 'Lesson'}`,
        reason: track.percent < 35 ? 'Weak learning track' : index < 2 ? 'Next in sequence' : 'Unfinished learning',
        score: weaknessWeight + sequenceWeight + labWeight,
        route: track.route,
        trackId: track.id
      });
    });
  });

  return candidates.sort((a,b) => b.score - a.score || a.title.localeCompare(b.title)).slice(0, limit);
}

export default function ProgressDashboard({ onView, onTopic }) {
  const { completed, completionTimes, resetProgress, toggleComplete } = useProgress();

  const stats = useMemo(() => {
    const questionReviewed = questions.filter(q => completed.includes(`question:${q.id}`)).length;
    const learningTotal = tracks.filter(t => t.type === 'learning').reduce((sum,t) => sum + t.items.length, 0);
    const learningDone = completed.filter(id => tracks.some(t => t.type === 'learning' && id.startsWith(`${t.prefix}:`))).length;
    const total = questions.length + learningTotal;
    const done = questionReviewed + learningDone;
    return { questionReviewed, learningTotal, learningDone, total, done, percent: total ? Math.round(done / total * 100) : 0 };
  }, [completed]);

  const trackStats = useMemo(() => tracks.map(track => {
    if (track.type === 'questions') {
      const items = questionTrack(track.id);
      const done = items.filter(q => completed.includes(`question:${q.id}`)).length;
      return { ...track, total: items.length || contentCounts.backend.byTopic[track.totalKey] || 0, done, percent: items.length ? Math.round(done/items.length*100) : 0, route:'questions' };
    }
    if (track.type === 'learning') {
      const total = track.items.length;
      const done = track.items.filter(item => completed.includes(itemProgressId(track,item,'lessons')) || completed.includes(itemProgressId(track,item,'labs'))).length;
      return { ...track, total, done, percent: total ? Math.round(done/total*100) : 0 };
    }
    return { ...track, total: contentCounts[track.totalKey]?.total || 0, done: 0, percent: 0, route:track.id };
  }), [completed]);

  const weakest = useMemo(() => [...trackStats].filter(t => t.total > 0).sort((a,b) => a.percent - b.percent || b.total - a.total).slice(0,5), [trackStats]);
  const recent = useMemo(() => Object.entries(completionTimes || {}).sort((a,b) => b[1]-a[1]).slice(0,6).map(([id,time]) => ({ id,time })), [completionTimes]);

  const recentLabel = id => {
    if (id.startsWith('question:')) {
      const q = questions.find(x => `question:${x.id}` === id);
      return q ? { title:q.title, type:'Question reviewed', action:() => onTopic(questionTopicId(q.topic)) } : null;
    }
    const track = tracks.find(t => t.type === 'learning' && id.startsWith(`${t.prefix}:`));
    if (!track) return null;
    const item = track.items.find(x => id.endsWith(`:${x.id}`));
    return item ? { title:item.title, type:`${track.name} completed`, action:() => onView(track.route) } : null;
  };

  const next = useMemo(() => {
    const preferred = ['java','springboot','jpa','microservices','sql','security','system-design','coding','react','javascript'];
    for (const id of preferred) {
      const track = trackStats.find(t => t.id === id);
      if (!track || track.percent >= 100) continue;
      if (track.type === 'questions') {
        const item = questionTrack(id).find(q => !completed.includes(`question:${q.id}`));
        if (item) return { title:item.title, meta:`${track.name} · question ${item.id}`, action:() => onTopic(id) };
      } else if (track.items) {
        const item = track.items.find(x => !completed.includes(itemProgressId(track,x,'lessons')) && !completed.includes(itemProgressId(track,x,'labs')));
        if (item) return { title:item.title, meta:`${track.name} · learning item`, action:() => onView(track.route) };
      }
    }
    return { title:'Review any topic you have not revisited recently.', meta:'Your tracked learning is currently complete.', action:() => onView('roadmap') };
  }, [trackStats, completed, onView, onTopic]);


  const studyQueue = useMemo(() => buildStudyQueue(trackStats, completed, 8), [trackStats, completed]);

  return <section className="progress-page">
    <header className="progress-hero">
      <div>
        <span className="progress-eyebrow"><span className="roadmap-live-dot" /> PERSONAL STUDY DASHBOARD</span>
        <h2>Know where you are.<br/><em>Know what to study next.</em></h2>
        <p>Your progress is stored locally in this browser. Use the dashboard to continue unfinished work, revisit weak areas, and keep your roadmap moving without turning preparation into a checklist.</p>
      </div>
      <div className="progress-hero-stat"><span>OVERALL MASTERY</span><strong>{stats.percent}%</strong><div className="mastery-track"><i style={{width:`${stats.percent}%`}}/></div><small>{stats.done.toLocaleString()} of {stats.total.toLocaleString()} tracked items</small></div>
    </header>

    <div className="dashboard-grid">
      <article className="dashboard-card continue-card">
        <div className="card-kicker">CONTINUE LEARNING</div>
        <div className="continue-icon">→</div>
        <h3>{next.title}</h3>
        <p>{next.meta}</p>
        <button type="button" className="dashboard-action" onClick={next.action}>Continue <span>↗</span></button>
      </article>
      <article className="dashboard-card stat-card"><span>QUESTIONS REVIEWED</span><strong>{stats.questionReviewed.toLocaleString()}</strong><small>Interview recall layer</small></article>
      <article className="dashboard-card stat-card"><span>LEARNING COMPLETED</span><strong>{stats.learningDone.toLocaleString()}</strong><small>Lessons + labs</small></article>
      <article className="dashboard-card stat-card"><span>TRACKED ITEMS</span><strong>{stats.total.toLocaleString()}</strong><small>Across the full hub</small></article>
    </div>

    <section className="study-queue-panel">
      <div className="study-queue-head">
        <div><span className="section-kicker">SMART STUDY QUEUE</span><h3>What deserves your attention next</h3><p>Prioritized from unfinished content using mastery gaps, roadmap order and question difficulty.</p></div>
        <div className="queue-head-actions"><button type="button" className="queue-session-btn" onClick={() => onView?.('session')}>Start focused session ↗</button><span className="queue-count">{studyQueue.length} NEXT</span></div>
      </div>
      {studyQueue.length ? <div className="study-queue-list">{studyQueue.map((item, index) => {
        const open = item.kind === 'question' ? () => onTopic(item.topic) : () => onView(item.route);
        return <div className="queue-item" key={item.key}>
          <span className="queue-index">0{index + 1}</span>
          <span className="queue-type">{item.kind === 'question' ? 'Q' : 'L'}</span>
          <span className="queue-copy"><b>{item.title}</b><small>{item.meta}</small><em>{item.reason}</em></span>
          <span className="queue-actions"><button type="button" className="queue-open" onClick={open}>Open ↗</button>{item.kind === 'question' ? <button type="button" className="queue-done" onClick={() => toggleComplete(`question:${item.questionId}`)}>Review</button> : null}</span>
        </div>;
      })}</div> : <div className="queue-empty"><b>Your tracked queue is clear.</b><span>Open the roadmap to revisit any completed area.</span><button type="button" onClick={() => onView('roadmap')}>Explore roadmap ↗</button></div>}
    </section>

    <div className="dashboard-section-head"><div><span className="section-kicker">MASTERY BY DOMAIN</span><h3>Where your preparation stands</h3></div><button type="button" className="dashboard-reset" onClick={resetProgress}>Reset all progress</button></div>
    <section className="domain-grid">{trackStats.map(track => <button type="button" className="domain-card" key={track.id} onClick={() => track.type === 'questions' ? onTopic(track.id) : onView(track.route)}><span className="domain-icon">{track.icon}</span><span className="domain-copy"><b>{track.name}</b><small>{track.done} / {track.total} tracked</small><span className="domain-track"><i style={{width:`${track.percent}%`}}/></span></span><strong>{track.percent}%</strong></button>)}</section>

    <div className="dashboard-columns">
      <section className="dashboard-panel"><div className="panel-heading"><span className="section-kicker">FOCUS AREAS</span><h3>Start here next</h3></div><div className="focus-list">{weakest.map((track,index) => <button type="button" key={track.id} onClick={() => track.type === 'questions' ? onTopic(track.id) : onView(track.route)}><span className="focus-rank">0{index+1}</span><span><b>{track.icon} {track.name}</b><small>{track.percent}% mastery · {track.total-track.done} still open</small></span><i>→</i></button>)}</div></section>
      <section className="dashboard-panel"><div className="panel-heading"><span className="section-kicker">RECENT ACTIVITY</span><h3>What you finished</h3></div>{recent.length ? <div className="recent-list">{recent.map(entry => { const item = recentLabel(entry.id); return item ? <button type="button" key={entry.id} onClick={item.action}><span className="recent-dot"/><span><b>{item.title}</b><small>{item.type}</small></span><time>{formatWhen(entry.time)}</time></button> : null; })}</div> : <div className="empty-state"><span>○</span><b>No activity yet</b><small>Complete a lesson or review a question and your study history will appear here.</small></div>}</section>
    </div>

    <div className="dashboard-footer"><span>LOCAL PROGRESS</span><b>Private to this browser</b><small>No account sync is required. Clearing site storage will clear this study history.</small></div>
  </section>;
}
