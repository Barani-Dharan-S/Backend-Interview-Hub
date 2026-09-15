import React, { useEffect, useState } from 'react';
import Roadmap from './Roadmap';

export default function BackendRoadmap({ onTopic }) {
  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    import('../data/index').then(({ questions: loaded }) => setQuestions(loaded));
  }, []);
  if (!questions) return <div className="page-loading">Loading roadmap…</div>;
  return <Roadmap questions={questions} onTopic={onTopic} />;
}
