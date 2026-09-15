import React, { useEffect, useState } from 'react';
import Questions from './Questions';

export default function BackendQuestions({ topic, subtopic, setSubtopic }) {
  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    import('../data/index').then(({ questions: loaded }) => setQuestions(loaded));
  }, []);
  if (!questions) return <div className="page-loading">Loading questions…</div>;
  return <Questions questions={questions} topic={topic} subtopic={subtopic} setSubtopic={setSubtopic} />;
}
