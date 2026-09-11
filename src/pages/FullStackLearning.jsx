import React, { useMemo, useState } from 'react';
import { fullStackLessons } from '../data/fullstack';

function LessonCard({ lesson, open, onToggle }) {
  return <article className="lesson-card">
    <button className="lesson-head" onClick={onToggle}>
      <span className="q-number">{lesson.id.replace('fullstack-','').padStart(3,'0')}</span>
      <span className="lesson-title"><strong>{lesson.title}</strong><span className="meta"><i className="level">{lesson.level}</i><i>{lesson.subtopic}</i></span></span>
      <span className="chevron">{open ? '⌃' : '⌄'}</span>
    </button>
    {open && <div className="lesson-body">
      <div className="explain-section"><div className="section-kicker">QUICK UNDERSTANDING</div><h4>What is it?</h4><p>{lesson.what}</p></div>
      <div className="explain-section"><div className="section-kicker">DEEP DIVE</div><h4>How does it work?</h4><p>{lesson.how}</p></div>
      {lesson.code && <div className="explain-section"><div className="section-kicker">EXAMPLE</div><pre>{lesson.code}</pre></div>}
      <div className="explain-section interview-script"><span className="script-label">INTERVIEW DELIVERY</span><p>{lesson.delivery}</p></div>
      <div className="explain-section"><div className="section-kicker">EXPECTED FOLLOW-UPS</div><ul className="followup-list">{lesson.followups.map(x=><li key={x}>{x}</li>)}</ul></div>
      <div className="explain-section mistake-section"><div className="section-kicker">INTERVIEW TRAPS</div><ul className="mistake-list">{lesson.traps.map(x=><li key={x}>{x}</li>)}</ul></div>
    </div>}
  </article>;
}

export default function FullStackLearning() {
  const [level,setLevel]=useState('all'); const [subtopic,setSubtopic]=useState('all'); const [query,setQuery]=useState(''); const [open,setOpen]=useState({});
  const areas=[...new Set(fullStackLessons.map(x=>x.subtopic))];
  const filtered=useMemo(()=>fullStackLessons.filter(x=>{const text=`${x.title} ${x.what} ${x.how} ${x.subtopic}`.toLowerCase(); return (level==='all'||x.level===level)&&(subtopic==='all'||x.subtopic===subtopic)&&text.includes(query.toLowerCase());}),[level,subtopic,query]);
  const expandAll=()=>setOpen(Object.fromEntries(filtered.map(x=>[x.id,true])));
  return <section className="learning-page">
    <div className="learning-hero">
      <span className="pill">V12 · FULL STACK EXPANSION</span>
      <h2>React + Spring Boot<br/><em>from UI to production.</em></h2>
      <p>Learn how the browser, REST APIs, Spring Security, services, databases, messaging, deployment and observability work together as one full-stack system.</p>
      <div className="learning-flow"><span>React</span><b>→</b><span>REST API</span><b>→</b><span>Spring Boot</span><b>→</b><span>Database</span><b>→</b><span>Production</span></div>
    </div>
    <div className="learning-toolbar"><div className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search full-stack lessons..." /></div><div className="filters">{['all','L1','L2','L3'].map(x=><button key={x} className={level===x?'filter active':'filter'} onClick={()=>setLevel(x)}>{x==='all'?'All levels':x}</button>)}</div></div>
    <div className="subtopic-row"><button className={subtopic==='all'?'subtopic active':'subtopic'} onClick={()=>setSubtopic('all')}>All areas</button>{areas.map(x=><button key={x} className={subtopic===x?'subtopic active':'subtopic'} onClick={()=>setSubtopic(x)}>{x}</button>)}</div>
    <div className="result-row"><span><b>Full Stack Learning Track</b> · <b>{filtered.length}</b> lessons</span><button onClick={expandAll}>Expand all</button><button onClick={()=>setOpen({})}>Collapse all</button></div>
    <section className="lesson-list">{filtered.map(x=><LessonCard key={x.id} lesson={x} open={!!open[x.id]} onToggle={()=>setOpen(p=>({...p,[x.id]:!p[x.id]}))}/>)}</section>
  </section>;
}
