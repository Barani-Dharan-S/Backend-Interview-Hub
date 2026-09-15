import React, { memo, useCallback, useMemo, useState } from 'react';
import { getFollowupAnswer } from '../data/followupAnswers';
import { matchesQuery } from '../utils/search';

const asArray = value => Array.isArray(value) ? value : value ? [value] : [];

const LearningCard = memo(function LearningCard({ item, open, onToggle, lab, config }) {
  const followups = asArray(item.followups);
  const traps = asArray(item.traps);
  const number = item.id?.split('-').pop();
  const followupAnswer = (question, index) => item.followupAnswers?.[index] || getFollowupAnswer(item.id, index, question) || 'Answer not added yet.';

  return (
    <article className="lesson-card scenario-card">
      <button
        className="lesson-head"
        onClick={() => onToggle(item.id)}
        aria-expanded={open}
        aria-controls={`lesson-${item.id}`}
      >
        <span className="q-number">{number}</span>
        <span className="lesson-title">
          <strong>{item.title}</strong>
          <span className="meta">
            <i className="level">{item.level}</i>
            <i>{lab ? config.labMeta : (item.topic || item.subtopic || config.lessonMeta)}</i>
          </span>
        </span>
        <span className="chevron" aria-hidden="true">{open ? '⌃' : '⌄'}</span>
      </button>

      {open && (
        <div id={`lesson-${item.id}`} className="lesson-body scenario-body">
          <div className="explain-section">
            <div className="section-kicker">{lab ? config.labFirstLabel : 'WHAT IS IT?'}</div>
            <p>{lab ? (item.situation ?? item.objective ?? item.symptom ?? item.goal) : item.what}</p>
          </div>

          <div className="explain-section">
            <div className="section-kicker">{lab ? config.labSecondLabel : 'HOW IT WORKS'}</div>
            <p>{lab ? (item.goal ?? item.approach ?? item.diagnosis ?? item.design) : item.how}</p>
          </div>

          {(item.code || item.commands || item.steps) && (
            <div className="explain-section">
              <div className="section-kicker">{lab ? config.labThirdLabel : 'IMPLEMENTATION / EXAMPLE'}</div>
              {lab && item.steps && <ol className="mistake-list" style={{ marginBottom: 10 }}>{item.steps.map((step, index) => <li key={`${item.id}-step-${index}`}>{step}</li>)}</ol>}
              <pre>{lab && item.commands ? item.commands.join('\n') : item.code}</pre>
            </div>
          )}

          {!lab && item.realWorld && (
            <div className="explain-section">
              <div className="section-kicker">REAL-WORLD PERSPECTIVE</div>
              <p>{item.realWorld}</p>
            </div>
          )}

          <div className="explain-section interview-script">
            <span className="script-label">INTERVIEW DELIVERY</span>
            <p>{item.delivery}</p>
          </div>

          {followups.length > 0 && (
            <div className="explain-section">
              <div className="section-kicker">EXPECTED FOLLOW-UPS</div>
              <div className="followup-list">
                {followups.map((question, index) => (
                  <details className="followup-item" key={`${item.id}-followup-${index}`}>
                    <summary>{question.question ?? question}</summary>
                    <div className="followup-answer">
                      <strong>Answer</strong>
                      <p>{question.answer ?? followupAnswer(question.question ?? question, index)}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {traps.length > 0 && (
            <div className="explain-section mistake-section">
              <div className="section-kicker">{lab ? config.labTrapsLabel : 'COMMON TRAPS'}</div>
              <ul className="mistake-list">{traps.map((trap, index) => <li key={`${item.id}-trap-${index}`}>{trap}</li>)}</ul>
            </div>
          )}
        </div>
      )}
    </article>
  );
});

export default function LearningPage({ config }) {
  const [tab, setTab] = useState(config.defaultTab || 'lessons');
  const [level, setLevel] = useState('all');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState({});
  const source = tab === 'lessons' ? config.lessons : config.labs;
  const fields = config.searchFields || ['title', 'what', 'how', 'code', 'delivery', 'followups', 'realWorld', 'topic', 'subtopic'];
  const filtered = useMemo(() => source.filter(item => (level === 'all' || item.level === level) && matchesQuery(item, query, fields)), [source, level, query, fields]);
  const expandAll = () => setOpen(Object.fromEntries(filtered.map(item => [item.id, true])));
  const toggleItem = useCallback(id => setOpen(previous => ({ ...previous, [id]: !previous[id] })), []);

  return (
    <section className="learning-page">
      <div className="learning-hero scenario-hero">
        <span className="pill">{config.pill}</span>
        <h2>{config.hero[0]}<br /><em>{config.hero[1]}</em></h2>
        <p>{config.description}</p>
        <div className="learning-flow">{config.flow.map((step, index) => <React.Fragment key={step}><span>{step}</span>{index < config.flow.length - 1 && <b>→</b>}</React.Fragment>)}</div>
      </div>

      <div className="learning-toolbar">
        <div className="search"><span>⌕</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder={config.placeholder} aria-label={`Search ${config.label}`} /></div>
        <div className="filters">{['all', 'L1', 'L2', 'L3'].map(value => <button key={value} className={level === value ? 'filter active' : 'filter'} onClick={() => setLevel(value)}>{value === 'all' ? 'All levels' : value}</button>)}</div>
      </div>

      <div className="subtopic-row">
        <button className={tab === 'lessons' ? 'subtopic active' : 'subtopic'} onClick={() => { setTab('lessons'); setOpen({}); }}>{config.lessonIcon} {config.lessonTab} <small>{config.lessons.length}</small></button>
        <button className={tab === 'labs' ? 'subtopic active' : 'subtopic'} onClick={() => { setTab('labs'); setOpen({}); }}>{config.labIcon} {config.labTab} <small>{config.labs.length}</small></button>
      </div>

      <div className="result-row"><span><b>{tab === 'lessons' ? config.lessonTab : config.labTab}</b> · {filtered.length} items</span><button onClick={expandAll}>Expand all</button><button onClick={() => setOpen({})}>Collapse all</button></div>
      <section className="lesson-list">{filtered.map(item => <LearningCard key={item.id} item={item} lab={tab === 'labs'} config={config} open={!!open[item.id]} onToggle={toggleItem} />)}</section>
    </section>
  );
}
