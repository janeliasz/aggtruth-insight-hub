
import { ExternalLink, Github, FileText, Video, Database, Brain, Target, TrendingUp, Lightbulb } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                AggTruth
              </h1>
              <p className="text-gray-600 text-sm">Real-Time Hallucination Detection for Language Models</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            To be presented at ICCS 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Real-Time Hallucination Detection for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Language Models
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            AggTruth is an innovative method for detecting hallucinations in context-aware LLM responses. 
            It leverages attention maps with minimal computational overhead for real-time detection.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid gap-8">
          {/* Motivation */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Motivation</h3>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                <strong className="text-blue-600">Can hallucinations in large language models (LLMs) be detected in real time?</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                Hallucinations reduce trust in generative AI, especially in high-stakes domains such as scientific, 
                legal, or financial tasks. Real-time detection opens the door to safer applications and more 
                trustworthy AI systems.
              </p>
            </div>
          </section>

          {/* Project Description */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Project Description</h3>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                AggTruth is an innovative and lightweight method for detecting hallucinations in context-aware 
                LLM responses. It leverages attention maps to decide whether a model is "making things up".
              </p>
              <p className="text-gray-700 leading-relaxed">
                Unlike most existing methods, AggTruth can be applied during generation – thanks to its low 
                computational overhead. It's model-agnostic and language-agnostic, working well across different tasks.
              </p>
            </div>
          </section>

          {/* Key Results */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Key Results</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Outperforms current state-of-the-art hallucination detection methods</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Robust across models (GPT, LLaMA), tasks, and languages</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Achieves real-time detection with minimal overhead</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Marks important step toward trustworthy generative AI</p>
              </div>
            </div>
          </section>

          {/* Resources */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Resources</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <a
                href="https://example.com/poster.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 border-2 border-gray-100 rounded-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 group-hover:text-blue-700">Project Poster</div>
                  <div className="text-sm text-gray-500">PDF Document</div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
              </a>

              <a
                href="https://example.com/slides.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 border-2 border-gray-100 rounded-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 group-hover:text-blue-700">Presentation Slides</div>
                  <div className="text-sm text-gray-500">PDF Document</div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
              </a>

              <a
                href="https://github.com/yourusername/aggtruth"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 border-2 border-gray-100 rounded-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <Github className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 group-hover:text-blue-700">GitHub Repository</div>
                  <div className="text-sm text-gray-500">Source Code</div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
              </a>

              <a
                href="https://example.com/paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 border-2 border-gray-100 rounded-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 group-hover:text-blue-700">Conference Paper</div>
                  <div className="text-sm text-gray-500">ICCS 2025</div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
              </a>

              <a
                href="https://youtube.com/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 border-2 border-gray-100 rounded-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <Video className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 group-hover:text-blue-700">Demo Video</div>
                  <div className="text-sm text-gray-500">YouTube</div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
              </a>

              <a
                href="https://example.com/data.zip"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 border-2 border-gray-100 rounded-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Database className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 group-hover:text-blue-700">Dataset</div>
                  <div className="text-sm text-gray-500">ZIP Archive</div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-500 mb-2">
              AggTruth Research Project
            </p>
            <p className="text-sm text-gray-400">
              Presented at ICCS 2025 • Real-Time Hallucination Detection
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
