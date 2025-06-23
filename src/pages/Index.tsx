
import { ExternalLink, Github, FileText, Video, Database } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            AggTruth: Real-Time Hallucination Detection for Language Models
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Problem Statement / Motivation */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Problem Statement / Motivation
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Can hallucinations in large language models (LLMs) be detected in real time? 
            Hallucinations reduce trust in generative AI, especially in high-stakes tasks 
            like legal, scientific, or financial text generation.
          </p>
        </section>

        {/* Project Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Project Description
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            AggTruth is an innovative method for hallucination detection in large language 
            models performing context-dependent tasks. It analyzes attention maps to determine 
            whether the model is hallucinating. Thanks to its low complexity, AggTruth can be 
            applied during response generation in real time. The method is model-agnostic and 
            performs well across multiple languages and tasks.
          </p>
        </section>

        {/* Results */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Results
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            AggTruth outperforms current state-of-the-art solutions in accuracy and robustness 
            across models, languages, and tasks. This approach marks an important step toward 
            trustworthy generative AI. Our results will be presented at{" "}
            <span className="font-medium text-blue-700">ICCS 2025</span>.
          </p>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-6 border-b border-gray-200 pb-2">
            Resources
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="https://example.com/poster.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
            >
              <FileText className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
              <span className="text-gray-700 group-hover:text-blue-700 font-medium">
                Project Poster (PDF)
              </span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 ml-auto" />
            </a>

            <a
              href="https://example.com/slides.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
            >
              <FileText className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
              <span className="text-gray-700 group-hover:text-blue-700 font-medium">
                Presentation Slides (PDF)
              </span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 ml-auto" />
            </a>

            <a
              href="https://github.com/yourusername/aggtruth"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
            >
              <Github className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
              <span className="text-gray-700 group-hover:text-blue-700 font-medium">
                GitHub Repository
              </span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 ml-auto" />
            </a>

            <a
              href="https://example.com/paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
            >
              <FileText className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
              <span className="text-gray-700 group-hover:text-blue-700 font-medium">
                Conference Paper (ICCS 2025)
              </span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 ml-auto" />
            </a>

            <a
              href="https://youtube.com/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
            >
              <Video className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
              <span className="text-gray-700 group-hover:text-blue-700 font-medium">
                Demo Video
              </span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 ml-auto" />
            </a>

            <a
              href="https://example.com/data.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
            >
              <Database className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
              <span className="text-gray-700 group-hover:text-blue-700 font-medium">
                Dataset
              </span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 ml-auto" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <p className="text-gray-500 text-center">
            AggTruth Research Project • ICCS 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
