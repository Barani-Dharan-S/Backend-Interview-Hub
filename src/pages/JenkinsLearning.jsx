import React, { useMemo, useState } from "react";
import { jenkinsLessons } from "../data/jenkinsLessons";
import { jenkinsLabs } from "../data/jenkinsLabs";
import { getFollowupAnswer } from "../data/followupAnswers";

function Card({ item, open, onToggle, lab }) {
  const followups = Array.isArray(item.followups) ? item.followups : item.followups ? [item.followups] : [];
  const traps = Array.isArray(item.traps) ? item.traps : item.traps ? [item.traps] : [];
  return (
    <article className="lesson-card scenario-card">
      <button className="lesson-head" onClick={onToggle}>
        <span className="q-number">{item.id.split("-").pop()}</span>
        <span className="lesson-title"><strong>{item.title}</strong><span className="meta"><i className="level">{item.level}</i><i>{lab ? "Jenkins Lab" : item.topic}</i></span></span>
        <span className="chevron">{open ? "⌃" : "⌄"}</span>
      </button>
      {open && (
        <div className="lesson-body scenario-body">
          <div className="explain-section"><div className="section-kicker">{lab ? "SITUATION" : "WHAT IS IT?"}</div><p>{lab ? item.situation : item.what}</p></div>
          <div className="explain-section"><div className="section-kicker">{lab ? "GOAL / APPROACH" : "HOW IT WORKS"}</div><p>{lab ? item.goal : item.how}</p></div>
          <div className="explain-section"><div className="section-kicker">{lab ? "STEPS / COMMANDS" : "JENKINSFILE / EXAMPLE"}</div>
            {lab ? <><ol className="mistake-list" style={{marginBottom:10}}>{item.steps.map((s,i)=><li key={`${item.id}-step-${i}`}>{s}</li>)}</ol><pre>{item.commands.join("\n")}</pre></> : <pre>{item.code}</pre>}
          </div>
          <div className="explain-section interview-script"><span className="script-label">INTERVIEW DELIVERY</span><p>{item.delivery}</p></div>
          <div className="explain-section"><div className="section-kicker">EXPECTED FOLLOW-UPS</div><div className="followup-list">
            {followups.map((question,index)=><details className="followup-item" key={`${item.id}-followup-${index}`}><summary>{question}</summary><div className="followup-answer"><strong>ANSWER</strong><p>{item.followupAnswers?.[index] || getFollowupAnswer(item.id,index,question) || "Answer not added yet."}</p></div></details>)}
          </div></div>
          <div className="explain-section mistake-section"><div className="section-kicker">{lab ? "LAB TRAPS" : "INTERVIEW TRAPS"}</div><ul className="mistake-list">{traps.map((trap,index)=><li key={`${item.id}-trap-${index}`}>{trap}</li>)}</ul></div>
        </div>
      )}
    </article>
  );
}

export default function JenkinsLearning(){
  const [tab,setTab]=useState("learn"); const [level,setLevel]=useState("all"); const [query,setQuery]=useState(""); const [open,setOpen]=useState({});
  const source=tab==="learn"?jenkinsLessons:jenkinsLabs;
  const filtered=useMemo(()=>source.filter(item=>(level==="all"||item.level===level)&&JSON.stringify(item).toLowerCase().includes(query.toLowerCase())),[source,level,query]);
  const expandAll=()=>setOpen(Object.fromEntries(filtered.map(item=>[item.id,true])));
  return <section className="learning-page">
    <div className="learning-hero scenario-hero"><span className="pill">V17 · JENKINS ENGINEERING</span><h2>Automate it.<br/><em>Control the path to production.</em></h2><p>Master Jenkins from pipeline fundamentals through secure agents, shared libraries, Docker, Kubernetes, progressive delivery, troubleshooting, governance and production CI/CD architecture.</p><div className="learning-flow"><span>Commit</span><b>→</b><span>Build</span><b>→</b><span>Test</span><b>→</b><span>Scan</span><b>→</b><span>Publish</span><b>→</b><span>Deploy</span><b>→</b><span>Verify</span></div></div>
    <div className="learning-toolbar"><div className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search Jenkins topics, Jenkinsfile, commands, scenarios..."/></div><div className="filters">{["all","L1","L2","L3"].map(item=><button key={item} className={level===item?"filter active":"filter"} onClick={()=>setLevel(item)}>{item==="all"?"All levels":item}</button>)}</div></div>
    <div className="subtopic-row"><button className={tab==="learn"?"subtopic active":"subtopic"} onClick={()=>{setTab("learn");setOpen({})}}>⚙ Learn Jenkins <small>{jenkinsLessons.length}</small></button><button className={tab==="labs"?"subtopic active":"subtopic"} onClick={()=>{setTab("labs");setOpen({})}}>🛠 Jenkins Labs <small>{jenkinsLabs.length}</small></button></div>
    <div className="result-row"><span><b>{tab==="learn"?"Jenkins Lessons":"Jenkins Labs"}</b> · {filtered.length} items</span><button onClick={expandAll}>Expand all</button><button onClick={()=>setOpen({})}>Collapse all</button></div>
    <section className="lesson-list">{filtered.map(item=><Card key={item.id} item={item} lab={tab==="labs"} open={!!open[item.id]} onToggle={()=>setOpen(p=>({...p,[item.id]:!p[item.id]}))}/>)}</section>
  </section>;
}
