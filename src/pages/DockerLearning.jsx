import React, { useMemo, useState } from "react";
import { dockerLessons } from "../data/dockerLessons";
import { dockerLabs } from "../data/dockerLabs";

function DockerLesson({ item, open, onToggle }) {
  return <article className="lesson-card scenario-card">
    <button className="lesson-head" onClick={onToggle}>
      <span className="q-number">{item.id.split("-")[1]}</span>
      <span className="lesson-title"><strong>{item.title}</strong><span className="meta"><i className="level">{item.level}</i><i>{item.subtopic}</i></span></span>
      <span className="chevron">{open ? "⌃" : "⌄"}</span>
    </button>
    {open && <div className="lesson-body scenario-body">
      <div className="explain-section"><div className="section-kicker">WHAT IS IT?</div><p>{item.what}</p></div>
      <div className="explain-section"><div className="section-kicker">HOW IT WORKS</div><p>{item.how}</p></div>
      <div className="explain-section"><div className="section-kicker">COMMAND / EXAMPLE</div><pre>{item.code}</pre></div>
      <div className="explain-section interview-script"><span className="script-label">INTERVIEW DELIVERY</span><p>{item.delivery}</p></div>
      <div className="explain-section"><div className="section-kicker">EXPECTED FOLLOW-UPS</div><div className="followup-list">{item.followups.map((x,i)=><details className="followup-item" key={item.id+i}><summary>{x.question}</summary><div className="followup-answer"><strong>Answer</strong><p>{x.answer}</p></div></details>)}</div></div>
      <div className="explain-section mistake-section"><div className="section-kicker">INTERVIEW TRAPS</div><ul className="mistake-list">{item.traps.map(x=><li key={x}>{x}</li>)}</ul></div>
    </div>}
  </article>;
}

function DockerLab({ item, open, onToggle }) {
  return <article className="lesson-card scenario-card">
    <button className="lesson-head" onClick={onToggle}>
      <span className="q-number">{item.id.split("-")[2]}</span>
      <span className="lesson-title"><strong>{item.title}</strong><span className="meta"><i className="level">{item.level}</i><i>{item.kind}</i></span></span>
      <span className="chevron">{open ? "⌃" : "⌄"}</span>
    </button>
    {open && <div className="lesson-body scenario-body">
      <div className="explain-section"><div className="section-kicker">OBJECTIVE</div><p>{item.objective}</p></div>
      <div className="explain-section"><div className="section-kicker">IMPLEMENTATION</div><p>{item.approach}</p></div>
      <div className="explain-section"><div className="section-kicker">STARTER COMMANDS</div><pre>{item.code}</pre></div>
      <div className="explain-section interview-script"><span className="script-label">INTERVIEW DELIVERY</span><p>{item.delivery}</p></div>
      <div className="explain-section"><div className="section-kicker">FOLLOW-UPS</div><div className="followup-list">{item.followups.map((x,i)=><details className="followup-item" key={item.id+i}><summary>{x.question}</summary><div className="followup-answer"><strong>Answer</strong><p>{x.answer}</p></div></details>)}</div></div>
      <div className="explain-section mistake-section"><div className="section-kicker">LAB TRAPS</div><ul className="mistake-list">{item.traps.map(x=><li key={x}>{x}</li>)}</ul></div>
    </div>}
  </article>;
}

export default function DockerLearning() {
  const [tab,setTab]=useState("learn"); const [level,setLevel]=useState("all"); const [query,setQuery]=useState(""); const [open,setOpen]=useState({});
  const source=tab==="learn"?dockerLessons:dockerLabs;
  const filtered=useMemo(()=>source.filter(x=>{const text=JSON.stringify(x).toLowerCase(); return (level==="all"||x.level===level)&&text.includes(query.toLowerCase());}),[source,level,query]);
  const expandAll=()=>setOpen(Object.fromEntries(filtered.map(x=>[x.id,true])));
  return <section className="learning-page">
    <div className="learning-hero scenario-hero">
      <span className="pill">V14 · DOCKER ENGINEERING</span>
      <h2>Package it.<br/><em>Run it. Debug it.</em></h2>
      <p>Learn Docker from container fundamentals to production image design, networking, Compose, security, troubleshooting, and CI/CD artifact flow.</p>
      <div className="learning-flow"><span>Learn</span><b>→</b><span>Build</span><b>→</b><span>Run</span><b>→</b><span>Break</span><b>→</b><span>Debug</span><b>→</b><span>Explain</span></div>
    </div>
    <div className="learning-toolbar"><div className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search Docker topics, commands, problems..." /></div><div className="filters">{["all","L1","L2","L3"].map(x=><button key={x} className={level===x?"filter active":"filter"} onClick={()=>setLevel(x)}>{x==="all"?"All levels":x}</button>)}</div></div>
    <div className="subtopic-row"><button className={tab==="learn"?"subtopic active":"subtopic"} onClick={()=>{setTab("learn");setOpen({})}}>🐳 Learn Docker <small>{dockerLessons.length}</small></button><button className={tab==="labs"?"subtopic active":"subtopic"} onClick={()=>{setTab("labs");setOpen({})}}>🛠 Docker Labs <small>{dockerLabs.length}</small></button></div>
    <div className="result-row"><span><b>{tab==="learn"?"Docker Lessons":"Docker Labs"}</b> · <b>{filtered.length}</b> items</span><button onClick={expandAll}>Expand all</button><button onClick={()=>setOpen({})}>Collapse all</button></div>
    <section className="lesson-list">{filtered.map(x=>tab==="learn"?<DockerLesson key={x.id} item={x} open={!!open[x.id]} onToggle={()=>setOpen(p=>({...p,[x.id]:!p[x.id]}))}/>:<DockerLab key={x.id} item={x} open={!!open[x.id]} onToggle={()=>setOpen(p=>({...p,[x.id]:!p[x.id]}))}/>)}</section>
  </section>;
}
