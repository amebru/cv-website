"use client"
import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const CV = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-3xl mx-auto">
        {/* Theme Toggle */}
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`fixed top-4 right-4 p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-mono font-bold mb-2">amelia bruno</h1>
          <p className="text-xl font-mono mb-4">dev</p>
          <div className="font-mono text-sm">
            <p className="line-through">New York, NY, USA</p>
            <p>Berlin, DE, EU</p>
            <p className="text-blue-500">amebru@icloud.com</p>
          </div>
        </header>

        {/* Stack */}
        <section className="mb-8">
          <h2 className="text-xl font-mono font-bold mb-4 border-b border-gray-500">STACK</h2>
          <ul className="font-mono">
            <li>python</li>
            <li>linux/macos</li>
            <li>github</li>
            <li>amazon cloud services (s3, lambda)</li>
            <li>postgresql</li>
            <li>redis</li>
            <li>grafana</li>
            <li>docker + kubernetes</li>
            <li>claude/openai/deepseek</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-mono font-bold mb-4 border-b border-gray-500">EXPERIENCE</h2>
          
          <div className="mb-6">
            <h3 className="font-mono font-bold">Solutions Engineer @ Instabase, New York (remote)</h3>
            <p className="font-mono text-sm mb-2">10.2022 - 2.2025</p>
            {/* <ul className="font-mono text-sm list-disc pl-4">
              <li>building production solutions for Instabase's enterprise clients</li>
              <li>MLOps with deep learning models and large language models</li>
              <li>interfacing with OpenAI's GPT models and Instabase's internal LLM</li>
            </ul> */}
          </div>

          <div className="mb-6">
            <h3 className="font-mono font-bold">Solutions Architect @ Plotly, Montréal & New York (remote)</h3>
            <p className="font-mono text-sm mb-2">11.2021 - 10.2022</p>
          </div>

          <div className="mb-6">
            <h3 className="font-mono font-bold">Software Engineer @ Cerence, Montréal (remote)</h3>
            <p className="font-mono text-sm">2.2021 - 11.2021</p>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-mono font-bold mb-4 border-b border-gray-500">Education</h2>
          
          <div className="mb-4">
            <h3 className="font-mono font-bold">McGill University</h3>
            <p className="font-mono text-sm">PhD, Computational Linguistics (2015 - 2019 dropped out, awarded MA)</p>
            <p className="font-mono text-sm">supervisor: Timothy O'Donnell</p>
            <p className="font-mono text-sm">dissertation: Variational bayesian inference for unsupervised induction of formal Minimalist Grammars</p>
          </div>

          <div>
            <h3 className="font-mono font-bold">University of Toronto</h3>
            <p className="font-mono text-sm">BSc, Computer Science, Linguistics (2010 - 2015 graduated)</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV;