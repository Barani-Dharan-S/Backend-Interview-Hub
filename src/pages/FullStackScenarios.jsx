import React, { useMemo, useState } from 'react';
import { fullStackScenarios } from '../data/fullstackScenarios';
import { scenarioFoundations } from '../data/scenarioFoundations';

function ScenarioCard({ scenario, open, onToggle }) {
  return <article className="lesson-card scenario-card">
    <button className="lesson-head" onClick={onToggle}>
      <span className="q-number">{scenario.id.replace('scenario-','').padStart(3,'0')}</span>
      <span className="lesson-title"><strong>{scenario.title}</strong><span className="meta"><i className="level">{scenario.level}</i><i>{scenario.subtopic}</i></span></span>
      <span className="chevron">{open ? '⌃' : '⌄'}</span>
    </button>
    {open && <div className="lesson-body scenario-body">
      <div className="explain-section"><div className="section-kicker">SCENARIO</div><h4>What happened?</h4><p>{scenario.situation}</p></div>
      <div className="explain-section"><div className="section-kicker">INVESTIGATION</div><h4>How would you diagnose it?</h4><p>{scenario.diagnosis}</p></div>
      <div className="explain-section"><div className="section-kicker">SOLUTION</div><h4>What would you do?</h4><p>{scenario.solution}</p></div>
      <div className="explain-section interview-script"><span className="script-label">INTERVIEW DELIVERY</span><p>{scenario.delivery}</p></div>
      <div className="explain-section"><div className="section-kicker">EXPECTED FOLLOW-UPS</div><div className="followup-list">{scenario.followups.map((x,i)=><details className="followup-item" key={scenario.id+'-followup-'+i}><summary>{x.question}</summary><div className="followup-answer"><strong>Answer</strong><p>{x.answer}</p></div></details>)}</div></div>
      <div className="explain-section mistake-section"><div className="section-kicker">INTERVIEW TRAPS</div><ul className="mistake-list">{scenario.traps.map(x=><li key={x}>{x}</li>)}</ul></div>
    </div>}
  </article>;
}

function FoundationCard({ lesson, open, onToggle }) {
  return <article className="lesson-card scenario-card">
    <button className="lesson-head" onClick={onToggle}>
      <span className="q-number">{lesson.id.replace('foundation-','').padStart(3,'0')}</span>
      <span className="lesson-title"><strong>{lesson.title}</strong><span className="meta"><i className="level">{lesson.level}</i><i>{lesson.subtopic}</i></span></span>
      <span className="chevron">{open ? '⌃' : '⌄'}</span>
    </button>
    {open && <div className="lesson-body scenario-body">
      <div className="explain-section"><div className="section-kicker">QUICK UNDERSTANDING</div><h4>What do I need to know?</h4><p>{lesson.what}</p></div>
      <div className="explain-section"><div className="section-kicker">DEEP DIVE</div><h4>How does it work?</h4><p>{lesson.how}</p></div>
      {lesson.code && <div className="explain-section"><div className="section-kicker">EXAMPLE</div><pre>{lesson.code}</pre></div>}
      <div className="explain-section interview-script"><span className="script-label">INTERVIEW DELIVERY</span><p>{lesson.delivery}</p></div>
      <div className="explain-section"><div className="section-kicker">EXPECTED FOLLOW-UPS</div><div className="followup-list">{lesson.followups.map((x,i)=><details className="followup-item" key={lesson.id+'-followup-'+i}><summary>{x.question}</summary><div className="followup-answer"><strong>Answer</strong><p>{x.answer}</p></div></details>)}</div></div>
      <div className="explain-section mistake-section"><div className="section-kicker">INTERVIEW TRAPS</div><ul className="mistake-list">{lesson.traps.map(x=><li key={x}>{x}</li>)}</ul></div>
    </div>}
  </article>;
}

export default function FullStackScenarios() {
  const [level,setLevel]=useState('all'); const [subtopic,setSubtopic]=useState('all'); const [query,setQuery]=useState(''); const [open,setOpen]=useState({}); const [foundationOpen,setFoundationOpen]=useState({});
  const areas=[...new Set(fullStackScenarios.map(x=>x.subtopic))];
  const filtered=useMemo(()=>fullStackScenarios.filter(x=>{const text=`${x.title} ${x.situation} ${x.diagnosis} ${x.solution} ${x.subtopic} ${x.followups.map(f=>f.question).join(' ')}`.toLowerCase(); return (level==='all'||x.level===level)&&(subtopic==='all'||x.subtopic===subtopic)&&text.includes(query.toLowerCase());}),[level,subtopic,query]);
  const expandAll=()=>setOpen(Object.fromEntries(filtered.map(x=>[x.id,true])));
  return <section className="learning-page">
    <div className="learning-hero scenario-hero">
      <span className="pill">V12.22 · FULL-STACK SCENARIOS</span>
      <h2>Think like a production engineer.<br/><em>Not just a framework user.</em></h2>
      <p>Practice realistic React + Spring Boot situations: diagnose the first failing boundary, choose the right fix, explain trade-offs, and handle production follow-ups.</p>
      <div className="learning-flow"><span>Symptom</span><b>→</b><span>Evidence</span><b>→</b><span>Root cause</span><b>→</b><span>Fix</span><b>→</b><span>Trade-offs</span></div>
    </div>
    <div className="learning-toolbar"><div className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search scenarios..." /></div><div className="filters">{['all','L1','L2','L3'].map(x=><button key={x} className={level===x?'filter active':'filter'} onClick={()=>setLevel(x)}>{x==='all'?'All levels':x}</button>)}</div></div>
    <div className="subtopic-row"><button className={subtopic==='all'?'subtopic active':'subtopic'} onClick={()=>setSubtopic('all')}>All areas</button>{areas.map(x=><button key={x} className={subtopic===x?'subtopic active':'subtopic'} onClick={()=>setSubtopic(x)}>{x}</button>)}</div>
    <div className="result-row"><span><b>Learn First</b> · <b>{scenarioFoundations.length}</b> foundations</span><button onClick={()=>setFoundationOpen(Object.fromEntries(scenarioFoundations.map(x=>[x.id,true])))}>Expand all</button><button onClick={()=>setFoundationOpen({})}>Collapse all</button></div>
    <section className="lesson-list">{scenarioFoundations.map(x=><FoundationCard key={x.id} lesson={x} open={!!foundationOpen[x.id]} onToggle={()=>setFoundationOpen(p=>({...p,[x.id]:!p[x.id]}))}/>)}</section>
    <div className="result-row"><span><b>Production Scenarios</b> · <b>{filtered.length}</b> scenarios</span><button onClick={expandAll}>Expand all</button><button onClick={()=>setOpen({})}>Collapse all</button></div>
    <section className="lesson-list">{filtered.map(x=><ScenarioCard key={x.id} scenario={x} open={!!open[x.id]} onToggle={()=>setOpen(p=>({...p,[x.id]:!p[x.id]}))}/>)}</section>
  </section>;
}
