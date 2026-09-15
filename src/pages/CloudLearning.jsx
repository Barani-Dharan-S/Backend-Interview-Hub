import React, { useMemo, useState } from "react";
import { cloudLessons } from "../data/cloudLessons";
import { cloudLabs } from "../data/cloudLabs";

function Card({ item, open, onToggle, lab }) {
  const followups = Array.isArray(item.followups) ? item.followups : item.followups ? [item.followups] : [];
  const traps = Array.isArray(item.traps) ? item.traps : item.traps ? [item.traps] : [];

  return (
    <article className="lesson-card scenario-card">
      <button className="lesson-head" onClick={onToggle}>
        <span className="q-number">{item.id.split("-").pop()}</span>
        <span className="lesson-title">
          <strong>{item.title}</strong>
          <span className="meta"><i className="level">{item.level}</i><i>{lab ? "Cloud Lab" : item.topic}</i></span>
        </span>
        <span className="chevron">{open ? "⌃" : "⌄"}</span>
      </button>
      {open && (
        <div className="lesson-body scenario-body">
          <div className="explain-section"><div className="section-kicker">{lab ? "SITUATION" : "WHAT IS IT?"}</div><p>{lab ? item.situation : item.what}</p></div>
          <div className="explain-section"><div className="section-kicker">{lab ? "GOAL / APPROACH" : "HOW IT WORKS"}</div><p>{lab ? item.goal : item.how}</p></div>
          <div className="explain-section"><div className="section-kicker">{lab ? "STEPS / COMMANDS" : "WORKFLOW / EXAMPLE"}</div>
            {lab ? <><ol className="mistake-list" style={{marginBottom:10}}>{item.steps.map((s,i)=><li key={`${item.id}-step-${i}`}>{s}</li>)}</ol><pre>{item.commands.join("\n")}</pre></> : <pre>{item.code}</pre>}
          </div>
          <div className="explain-section interview-script"><span className="script-label">INTERVIEW DELIVERY</span><p>{item.delivery}</p></div>
          <div className="explain-section"><div className="section-kicker">EXPECTED FOLLOW-UPS</div><div className="followup-list">
            {followups.map((question,index)=><details className="followup-item" key={`${item.id}-followup-${index}`}><summary>{question}</summary><div className="followup-answer"><strong>ANSWER</strong><p>{item.followupAnswers?.[index]}</p></div></details>)}
          </div></div>
          <div className="explain-section mistake-section"><div className="section-kicker">{lab ? "LAB TRAPS" : "INTERVIEW TRAPS"}</div><ul className="mistake-list">{traps.map((trap,index)=><li key={`${item.id}-trap-${index}`}>{trap}</li>)}</ul></div>
        </div>
      )}
    </article>
  );
}

export default function CloudLearning() {
  const [tab,setTab] = useState("learn");
  const [level,setLevel] = useState("all");
  const [query,setQuery] = useState("");
  const [open,setOpen] = useState({});
  const source = tab === "learn" ? cloudLessons : cloudLabs;
  const filtered = useMemo(() => source.filter(item => (level === "all" || item.level === level) && JSON.stringify(item).toLowerCase().includes(query.toLowerCase())), [source,level,query]);
  const expandAll = () => setOpen(Object.fromEntries(filtered.map(item => [item.id,true])));

  return <section className="learning-page">
    <div className="learning-hero scenario-hero">
      <span className="pill">V19 · CLOUD & DEPLOYMENT ENGINEERING</span>
      <h2>Deploy the system.<br/><em>Operate with confidence.</em></h2>
      <p>Master cloud and deployment engineering from networking and IAM through compute, containers, databases, load balancing, DNS, observability, Kubernetes, secure CI/CD, progressive delivery, disaster recovery and production architecture.</p>
      <div className="learning-flow"><span>Code</span><b>→</b><span>Build</span><b>→</b><span>Registry</span><b>→</b><span>Cloud</span><b>→</b><span>Deploy</span><b>→</b><span>Observe</span><b>→</b><span>Recover</span></div>
    </div>
    <div className="learning-toolbar"><div className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search AWS, networking, IAM, Docker, EKS, RDS, deployment, observability..."/></div><div className="filters">{["all","L1","L2","L3"].map(item=><button key={item} className={level===item?"filter active":"filter"} onClick={()=>setLevel(item)}>{item==="all"?"All levels":item}</button>)}</div></div>
    <div className="subtopic-row"><button className={tab==="learn"?"subtopic active":"subtopic"} onClick={()=>{setTab("learn");setOpen({})}}>☁ Learn Cloud <small>{cloudLessons.length}</small></button><button className={tab==="labs"?"subtopic active":"subtopic"} onClick={()=>{setTab("labs");setOpen({})}}>🛠 Cloud Labs <small>{cloudLabs.length}</small></button></div>
    <div className="result-row"><span><b>{tab==="learn"?"Cloud Lessons":"Cloud Labs"}</b> · {filtered.length} items</span><button onClick={expandAll}>Expand all</button><button onClick={()=>setOpen({})}>Collapse all</button></div>
    <section className="lesson-list">{filtered.map(item=><Card key={item.id} item={item} lab={tab==="labs"} open={!!open[item.id]} onToggle={()=>setOpen(p=>({...p,[item.id]:!p[item.id]}))}/>)}</section>
  </section>;
}
