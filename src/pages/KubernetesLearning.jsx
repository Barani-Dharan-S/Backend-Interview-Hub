import React, { useMemo, useState } from "react";
import { kubernetesLessons } from "../data/kubernetesLessons";
import { kubernetesLabs } from "../data/kubernetesLabs";

function Card({ item, open, onToggle, lab }) {
  return <article className="lesson-card scenario-card">
    <button className="lesson-head" onClick={onToggle}>
      <span className="q-number">{item.id.split("-").pop()}</span>
      <span className="lesson-title"><strong>{item.title}</strong><span className="meta"><i className="level">{item.level}</i><i>{lab ? item.kind : item.subtopic}</i></span></span>
      <span className="chevron">{open ? "⌃" : "⌄"}</span>
    </button>
    {open && <div className="lesson-body scenario-body">
      <div className="explain-section"><div className="section-kicker">{lab ? "OBJECTIVE" : "WHAT IS IT?"}</div><p>{lab ? item.objective : item.what}</p></div>
      <div className="explain-section"><div className="section-kicker">{lab ? "IMPLEMENTATION" : "HOW IT WORKS"}</div><p>{lab ? item.approach : item.how}</p></div>
      <div className="explain-section"><div className="section-kicker">{lab ? "STARTER COMMANDS / MANIFEST" : "COMMAND / EXAMPLE"}</div><pre>{item.code}</pre></div>
      <div className="explain-section interview-script"><span className="script-label">INTERVIEW DELIVERY</span><p>{item.delivery}</p></div>
      <div className="explain-section"><div className="section-kicker">EXPECTED FOLLOW-UPS</div><div className="followup-list">{item.followups.map((x,i)=><details className="followup-item" key={item.id+i}><summary>{x.question}</summary><div className="followup-answer"><strong>Answer</strong><p>{x.answer}</p></div></details>)}</div></div>
      <div className="explain-section mistake-section"><div className="section-kicker">{lab ? "LAB TRAPS" : "INTERVIEW TRAPS"}</div><ul className="mistake-list">{item.traps.map(x=><li key={x}>{x}</li>)}</ul></div>
    </div>}
  </article>;
}

export default function KubernetesLearning() {
  const [tab,setTab]=useState("learn"); const [level,setLevel]=useState("all"); const [query,setQuery]=useState(""); const [open,setOpen]=useState({});
  const source=tab==="learn"?kubernetesLessons:kubernetesLabs;
  const filtered=useMemo(()=>source.filter(x=>{const text=JSON.stringify(x).toLowerCase(); return (level==="all"||x.level===level)&&text.includes(query.toLowerCase());}),[source,level,query]);
  const expandAll=()=>setOpen(Object.fromEntries(filtered.map(x=>[x.id,true])));
  return <section className="learning-page">
    <div className="learning-hero scenario-hero">
      <span className="pill">V15 · KUBERNETES ENGINEERING</span>
      <h2>Deploy it.<br/><em>Scale it. Debug it.</em></h2>
      <p>Learn Kubernetes from Pods and Deployments through networking, security, storage, scaling, rollout strategy, incident debugging, and production architecture.</p>
      <div className="learning-flow"><span>Learn</span><b>→</b><span>Deploy</span><b>→</b><span>Scale</span><b>→</b><span>Break</span><b>→</b><span>Debug</span><b>→</b><span>Explain</span></div>
    </div>
    <div className="learning-toolbar"><div className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search Kubernetes topics, kubectl commands, incidents..." /></div><div className="filters">{["all","L1","L2","L3"].map(x=><button key={x} className={level===x?"filter active":"filter"} onClick={()=>setLevel(x)}>{x==="all"?"All levels":x}</button>)}</div></div>
    <div className="subtopic-row"><button className={tab==="learn"?"subtopic active":"subtopic"} onClick={()=>{setTab("learn");setOpen({})}}>☸ Learn Kubernetes <small>{kubernetesLessons.length}</small></button><button className={tab==="labs"?"subtopic active":"subtopic"} onClick={()=>{setTab("labs");setOpen({})}}>🛠 Kubernetes Labs <small>{kubernetesLabs.length}</small></button></div>
    <div className="result-row"><span><b>{tab==="learn"?"Kubernetes Lessons":"Kubernetes Labs"}</b> · <b>{filtered.length}</b> items</span><button onClick={expandAll}>Expand all</button><button onClick={()=>setOpen({})}>Collapse all</button></div>
    <section className="lesson-list">{filtered.map(x=><Card key={x.id} item={x} lab={tab==="labs"} open={!!open[x.id]} onToggle={()=>setOpen(p=>({...p,[x.id]:!p[x.id]}))}/>)}</section>
  </section>;
}
