import master from './master.json';

export const questions = master;

export const questionsByTopic = questions.reduce((acc, q) => {
  const topic = q.topic || 'java';
  (acc[topic] ||= []).push(q);
  return acc;
}, {});

export default questions;
