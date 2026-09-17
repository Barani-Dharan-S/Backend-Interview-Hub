import React from 'react';
import Questions from './Questions';

export default function BackendQuestions({ questions, topic, subtopic, setSubtopic }) {
  return <Questions questions={questions} topic={topic} subtopic={subtopic} setSubtopic={setSubtopic} />;
}
