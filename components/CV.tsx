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
            <p><a href="mailto:amebru@icloud.com" className="text-blue-500">amebru@icloud.com</a></p>
            <p><a href="https://www.linkedin.com/in/👩‍💻-amelia-bruno-5ba708207" className="text-blue-500">linkedin</a></p>
            <p><a href="https://github.com/amebru" className="text-blue-500">github</a></p>
            <p>en, fr</p>
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
            <li className="font-mono text-xs mb-2">built document-understanding pipelines for enterprise clients using Instabase&apos;s AIHub platform, leveraging deep learning and large language models</li>
            <li className="font-mono text-xs mb-2">model training, fine tuning, LLM prompting, data analysis, programming in Python</li>
          </div>

          <div className="mb-6">
            <h3 className="font-mono font-bold">Solutions Architect @ Plotly, Montréal & New York (remote)</h3>
            <p className="font-mono text-sm mb-2">11.2021 - 10.2022</p>
            <li className="font-mono text-xs mb-2">built data visualization dashboards for enterprise clients using Plotly Dash</li>
            <li className="font-mono text-xs mb-2">data science and data visualization using Python, Redis, SQL databases</li>
          </div>

          <div className="mb-6">
            <h3 className="font-mono font-bold">Software Engineer @ Cerence, Montréal (remote)</h3>
            <p className="font-mono text-sm">2.2021 - 11.2021</p>
            <li className="font-mono text-xs mb-2">product dev work on Cerence&apos;s template-based speech assistant using Python</li>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-mono font-bold mb-4 border-b border-gray-500">EDUCATION</h2>
          
          <div className="mb-4">
            <h3 className="font-mono font-bold">McGill University</h3>
            <p className="font-mono text-sm">PhD, Computational Linguistics (2015 - 2019 dropped out, awarded MA)</p>
            <p className="font-mono text-sm">supervisor: Timothy O&apos;Donnell</p>
            <p className="font-mono text-sm">dissertation: Variational bayesian inference for unsupervised induction of Minimalist Grammars</p>
            <li className="font-mono text-xs mb-2">applied mathematics research into adapting Bayesian inference techniques for formal grammars</li>
            <li className="font-mono text-xs mb-2">built  a working learning and inference model for grammars using Julia </li>
          </div>

          <div>
            <h3 className="font-mono font-bold">University of Toronto</h3>
            <p className="font-mono text-sm">BSc, Computer Science, Linguistics (2010 - 2015 graduated)</p>
          </div>
        </section>
      </div>
      <div className="text-right mt-8">
        <p className="font-mono text-xs text-gray-500">Last updated: {new Date().toLocaleDateString('de-DE')}</p>
      </div>
    </div>
  );
};


export default CV;