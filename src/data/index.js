import master from './master.json';
import { classifyQuestion } from './roadmap';

export const questions = master.map(q => ({ ...q, ...classifyQuestion(q) }));

export const questionsByTopic = questions.reduce((acc, q) => {
  const topic = q.topic || 'java';
  (acc[topic] ||= []).push(q);
  return acc;
}, {});

export default questions;
