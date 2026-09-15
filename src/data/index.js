import master from './master.json';
import coding from './coding.json';
import { classifyQuestion } from './roadmap';

// Coding problems are maintained in coding.json. Replace the coding slice in the
// master dataset so the UI always renders the same 51 coding records and answers.
const codingById = new Map(coding.map(q => [q.id, q]));
const merged = master.map(q => q.topic === 'coding' && codingById.has(q.id)
  ? { ...q, ...codingById.get(q.id) }
  : q
);

const normalizeList = value => {
  if (Array.isArray(value)) return value;
  if (value == null || value === '') return [];
  return [String(value)];
};

export const questions = merged.map(q => ({
  ...q,
  tags: normalizeList(q.tags),
  followups: normalizeList(q.followups),
  mistakes: normalizeList(q.mistakes),
  ...classifyQuestion(q)
}));

export const questionsByTopic = questions.reduce((acc, q) => {
  const topic = q.topic || 'java';
  (acc[topic] ||= []).push(q);
  return acc;
}, {});

export default questions;
