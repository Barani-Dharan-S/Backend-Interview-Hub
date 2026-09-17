import React from 'react';
import Roadmap from './Roadmap';

export default function BackendRoadmap({ questions, onTopic }) {
  return <Roadmap questions={questions} onTopic={onTopic} />;
}
