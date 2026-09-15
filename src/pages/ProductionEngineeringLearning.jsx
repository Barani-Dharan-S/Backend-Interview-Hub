import React, { useMemo, useState } from "react";
import { capstoneLessons } from "../data/capstoneLessons";
import { capstoneLabs } from "../data/capstoneLabs";

function Card({ item, open, onToggle, lab }) {
  const followups = item.followups || [];
  return <article className="lesson-card scenario-card">
    <button className="lesson-head" onClick={onToggle}>
      <span className="q-number">{item.id.split("-").pop()}</span>
      <span className="lesson-title"><strong>{item.title}</strong><span className="meta"><i className="level">{item.level}</i><i>{lab ? "Capstone Lab" : item.topic}</i></span></span>
      <span className="chevron">{open ? "⌃" : "⌄"}</span>
    </button>
    {open && <div className="lesson-body scenario-body">
      <div className="explain-section"><div className="section-kicker">{lab ? "SITUATION" : "WHAT IS IT?"}</div><p>{lab ? item.situation : item.what}</p></div>
      <div className="explain-section"><div className="section-kicker">{lab ? "GOAL / APPROACH" : "HOW IT WORKS"}</div><p>{lab ? item.goal : item.how}</p></div>
      <div className="explain-section"><div className="section-kicker">{lab ? "STEPS / COMMANDS" : "WORKFLOW / EXAMPLE"}</div>
        {lab ? <><ol className="mistake-list" style={{marginBottom:10}}>{item.steps.map((s,i)=><li key={i}>{s}</li>)}</ol><pre>{item.commands.join("\n")}</pre></> : <pre>{item.code}</pre>}
      </div>
      <div className="explain-section interview-script"><span className="script-label">INTERVIEW DELIVERY</span><p>{item.delivery}</p></div>
      <div className="explain-section"><div className="section-kicker">EXPECTED FOLLOW-UPS</div><div className="followup-list">{followups.map((q,i)=><details className="followup-item" key={i}><summary>{q}</summary><div className="followup-answer"><strong>ANSWER</strong><p>{item.followupAnswers?.[i]}</p></div></details>)}</div></div>
      <div className="explain-section mistake-section"><div className="section-kicker">{lab ? "LAB TRAPS" : "INTERVIEW TRAPS"}</div><ul className="mistake-list">{item.traps.map((t,i)=><li key={i}>{t}</li>)}</ul></div>
    </div>}
  </article>;
}

export default function ProductionEngineeringLearning() {
 const [tab,setTab]=useState("learn"),[level,setLevel]=useState("all"),[query,setQuery]=useState(""),[open,setOpen]=useState({});
 const source=tab==="learn"?capstoneLessons:capstoneLabs;
 const filtered=useMemo(()=>source.filter(x=>(level==="all"||x.level===level)&&JSON.stringify(x).toLowerCase().includes(query.toLowerCase())),[source,level,query]);
 const expandAll=()=>setOpen(Object.fromEntries(filtered.map(x=>[x.id,true])));
 return <section className="learning-page">
  <div className="learning-hero scenario-hero"><span className="pill">V20 · END-TO-END PRODUCTION ENGINEERING</span><h2>Build it.<br/><em>Break it. Operate it.</em></h2><p>Bring React, Spring Boot, PostgreSQL, Docker, Kubernetes, GitHub Actions and cloud deployment together into one production engineering capstone. Learn to design, deploy, observe, debug, recover and explain the system under failure.</p><div className="learning-flow"><span>Build</span><b>→</b><span>Test</span><b>→</b><span>Ship</span><b>→</b><span>Deploy</span><b>→</b><span>Observe</span><b>→</b><span>Break</span><b>→</b><span>Recover</span><b>→</b><span>Explain</span></div></div>
  <div className="learning-toolbar"><div className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search architecture, Kubernetes, AWS, rollback, database, observability, incidents..."/></div><div className="filters">{["all","L1","L2","L3"].map(x=><button key={x} className={level===x?"filter active":"filter"} onClick={()=>setLevel(x)}>{x==="all"?"All levels":x}</button>)}</div></div>
  <div className="subtopic-row"><button className={tab==="learn"?"subtopic active":"subtopic"} onClick={()=>{setTab("learn");setOpen({})}}>🏗 Learn Production <small>{capstoneLessons.length}</small></button><button className={tab==="labs"?"subtopic active":"subtopic"} onClick={()=>{setTab("labs");setOpen({})}}>🛠 Capstone Labs <small>{capstoneLabs.length}</small></button></div>
  <div className="result-row"><span><b>{tab==="learn"?"Production Lessons":"Capstone Labs"}</b> · {filtered.length} items</span><button onClick={expandAll}>Expand all</button><button onClick={()=>setOpen({})}>Collapse all</button></div>
  <section className="lesson-list">{filtered.map(x=><Card key={x.id} item={x} lab={tab==="labs"} open={!!open[x.id]} onToggle={()=>setOpen(p=>({...p,[x.id]:!p[x.id]}))}/>)}</section>
 </section>;
}
