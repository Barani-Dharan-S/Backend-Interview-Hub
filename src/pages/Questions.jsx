import React, { useMemo, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import { topics } from "../data/topics";

export default function Questions({ questions, topic }) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("all");
  const [open, setOpen] = useState({});
  const filtered = useMemo(() => questions.filter(q => {
    const topicOk = topic === "all" || q.topic === topic;
    const levelOk = level === "all" || q.level === level;
    const text = `${q.title} ${q.answer} ${q.tags.join(" ")}`.toLowerCase();
    return topicOk && levelOk && text.includes(query.toLowerCase());
  }), [questions, topic, query, level]);
  const expandAll = () => setOpen(Object.fromEntries(filtered.map(q => [q.id, true])));
  const topicName = topics.find(t => t.id === topic)?.name || "All Interview Questions";
  return (
    <>
      <section className="hero">
        <div><span className="pill">INTERVIEW PREPARATION</span><h2>Understand it.<br/><em>Explain it confidently.</em></h2><p>Study concepts from fundamentals to L3 depth, then use the interview-ready answer and follow-ups to prepare for the next question.</p></div>
      </section>
      <section className="toolbar">
        <div className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search questions, concepts, keywords..." /><kbd>⌘ K</kbd></div>
        <div className="filters">{["all","L1","L2","L3"].map(x=><button key={x} className={level===x?"filter active":"filter"} onClick={()=>setLevel(x)}>{x==="all"?"All levels":x}</button>)}</div>
      </section>
      <div className="result-row"><span><b>{topicName}</b> · <b>{filtered.length}</b> questions</span><button onClick={expandAll}>Expand all</button><button onClick={()=>setOpen({})}>Collapse all</button></div>
      <section className="question-list">
        {filtered.map((q,i)=><QuestionCard key={q.id} q={q} index={i} open={!!open[q.id]} onToggle={()=>setOpen(p=>({...p,[q.id]:!p[q.id]}))} />)}
        {!filtered.length && <div className="empty">No questions match your search.</div>}
      </section>
    </>
  );
}
