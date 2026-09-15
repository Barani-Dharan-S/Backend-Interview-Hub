import React, { useMemo, useState } from "react";
import { buildLabs } from "../data/buildLabs";
import { debugLabs } from "../data/debugLabs";
import { architectureLabs } from "../data/architectureLabs";
import { matchesQuery } from "../utils/search";

function LabCard({ item, type, open, onToggle }) {
  const isBuild = type === "build";
  const isDebug = type === "debug";
  return <article className="lesson-card scenario-card">
    <button className="lesson-head" onClick={onToggle} aria-expanded={open} aria-controls={`lab-${item.id}`}>
      <span className="q-number">{item.id.split("-")[1].padStart(3,"0")}</span>
      <span className="lesson-title"><strong>{item.title}</strong><span className="meta"><i className="level">{item.level}</i><i>{item.subtopic}</i></span></span>
      <span className="chevron">{open ? "⌃" : "⌄"}</span>
    </button>
    {open && <div id={`lab-${item.id}`} className="lesson-body scenario-body">
      <div className="explain-section"><div className="section-kicker">{isBuild ? "OBJECTIVE" : isDebug ? "SYMPTOM" : "GOAL"}</div><p>{isBuild ? item.objective : isDebug ? item.symptom : item.goal}</p></div>
      <div className="explain-section"><div className="section-kicker">{isDebug ? "DIAGNOSIS" : "IMPLEMENTATION"}</div><h4>{isDebug ? "Find the first failing boundary" : isBuild ? "How to build it" : "Architecture"}</h4><p>{isDebug ? item.diagnosis : isBuild ? item.approach : item.design}</p></div>
      {isBuild && item.code && <div className="explain-section"><div className="section-kicker">STARTER EXAMPLE</div><pre>{item.code}</pre></div>}
      <div className="explain-section interview-script"><span className="script-label">INTERVIEW DELIVERY</span><p>{isDebug || isBuild ? item.delivery : item.delivery}</p></div>
      {item.followups?.length > 0 && <div className="explain-section"><div className="section-kicker">EXPECTED FOLLOW-UPS</div><div className="followup-list">{item.followups.map((x,i)=><details className="followup-item" key={item.id+"-followup-"+i}><summary>{x.question}</summary><div className="followup-answer"><strong>Answer</strong><p>{x.answer}</p></div></details>)}</div></div>}
      {isBuild && <div className="explain-section mistake-section"><div className="section-kicker">INTERVIEW TRAPS</div><ul className="mistake-list">{item.traps.map(x=><li key={x}>{x}</li>)}</ul></div>}
      {isDebug && <div className="explain-section mistake-section"><div className="section-kicker">INTERVIEW TRAPS</div><ul className="mistake-list">{item.traps.map(x=><li key={x}>{x}</li>)}</ul></div>}
    </div>}
  </article>;
}

export default function PracticalLabs() {
  const [tab,setTab]=useState("build"); const [level,setLevel]=useState("all"); const [query,setQuery]=useState(""); const [open,setOpen]=useState({});
  const source=tab==="build"?buildLabs:tab==="debug"?debugLabs:architectureLabs;
  const filtered=useMemo(()=>source.filter(x=>(level==="all"||x.level===level)&&matchesQuery(x,query,["title","subtopic","objective","symptom","diagnosis","approach","design","delivery","followups","traps","code"])),[source,level,query]);
  const expandAll=()=>setOpen(Object.fromEntries(filtered.map(x=>[x.id,true])));
  return <section className="learning-page">
    <div className="learning-hero scenario-hero">
      <span className="pill">V13 · PRACTICAL ENGINEERING LABS</span>
      <h2>Stop only reading.<br/><em>Build, break, and reason.</em></h2>
      <p>Turn React, JavaScript, Spring Boot and backend knowledge into practical engineering skill. Learn the flow, implement the feature, diagnose failures, and explain the trade-offs.</p>
      <div className="learning-flow"><span>Learn</span><b>→</b><span>Build</span><b>→</b><span>Break</span><b>→</b><span>Debug</span><b>→</b><span>Explain</span></div>
    </div>
    <div className="learning-toolbar"><div className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search labs, technologies, problems..." /></div><div className="filters">{["all","L1","L2","L3"].map(x=><button key={x} className={level===x?"filter active":"filter"} onClick={()=>setLevel(x)}>{x==="all"?"All levels":x}</button>)}</div></div>
    <div className="subtopic-row"><button className={tab==="build"?"subtopic active":"subtopic"} onClick={()=>{setTab("build");setOpen({})}}>🛠 Build Labs <small>{buildLabs.length}</small></button><button className={tab==="debug"?"subtopic active":"subtopic"} onClick={()=>{setTab("debug");setOpen({})}}>🐛 Debug Labs <small>{debugLabs.length}</small></button><button className={tab==="architecture"?"subtopic active":"subtopic"} onClick={()=>{setTab("architecture");setOpen({})}}>🏗 Architecture Labs <small>{architectureLabs.length}</small></button></div>
    <div className="result-row"><span><b>{tab==="build"?"Build Labs":tab==="debug"?"Debug Labs":"Architecture Labs"}</b> · <b>{filtered.length}</b> labs</span><button onClick={expandAll}>Expand all</button><button onClick={()=>setOpen({})}>Collapse all</button></div>
    <section className="lesson-list">{filtered.map(x=><LabCard key={x.id} item={x} type={tab} open={!!open[x.id]} onToggle={()=>setOpen(p=>({...p,[x.id]:!p[x.id]}))}/>)}</section>
  </section>;
}
