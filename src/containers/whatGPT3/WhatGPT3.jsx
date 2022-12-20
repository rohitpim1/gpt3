import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Perform a wide variety of natural language tasks with GPT-3." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Perform a wide variety of natural language tasks with GPT-3." />
      <Feature title="Knowledgebase" text="Perform a wide variety of natural language tasks with GPT-3." />
      <Feature title="Education" text="Perform a wide variety of natural language tasks with GPT-3." />
    </div>
  </div>
);

export default WhatGPT3;
